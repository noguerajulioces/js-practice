import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import { calculatePayment, formatCurrency, totalToPay, getFees, getCapital } from '../../../utils/loanCalculator';
import InputField from '@/components/InputField';
import ResultCard from '@/components/ResultCard';
import SummarySection from '@/components/SummarySection';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [duration, setDuration] = useState('');
  const [payment, setPayment] = useState('0.00');

  const { t } = useTranslation();

  // Recalcular el pago mensual cuando cambien los valores
  useEffect(() => {
    setPayment(calculatePayment(amount, interest, duration));
  }, [amount, interest, duration]);

  // Datos para el gráfico
  const pieData = [
    {
      name: t('MainScreen.chart.fees'),
      population: getFees(payment, amount, duration),
      color: 'rgba(255, 99, 132, 1)',
    },
    {
      name: t('MainScreen.chart.capital'),
      population: getCapital(amount),
      color: 'rgba(54, 162, 235, 1)',
    },
  ];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.form}>
          <InputField
            label={t('MainScreen.form.inputs.placeholder.amount')}
            value={amount}
            setValue={setAmount}
          />
          <InputField
            label={t('MainScreen.form.inputs.placeholder.interest')}
            value={interest}
            setValue={setInterest}
          />
          <InputField
            label={t('MainScreen.form.inputs.placeholder.duration')}
            value={duration}
            setValue={setDuration}
            suffix={t('MainScreen.form.inputs.unit')}
          />
        </View>

        <ResultCard
          payment={formatCurrency(payment)}
          description={t('MainScreen.form.result.label')}
        />

        <View style={styles.chartContainer}>
          <PieChart
            data={pieData}
            width={screenWidth - 40}
            height={180}
            chartConfig={{
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
          />
        </View>

        <SummarySection
          total={totalToPay(payment, duration)}
          onSave={() => alert('Save Loan')}
          onAmortization={() => alert('Amortization Table')}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  form: {
    paddingTop: 20,
    paddingHorizontal: 20
  },
  chartContainer: {
    marginVertical: 5,
    alignItems: 'center',
  },
});
