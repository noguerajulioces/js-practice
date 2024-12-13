import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import { calculatePayment, formatCurrency, formatPercentage, totalToPay, getFees, getCapital, formatNumber } from '@/utils/loanCalculator';
import InputField from '@/components/InputField';
import ResultCard from '@/components/ResultCard';
import SummarySection from '@/components/SummarySection';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {
  const [amount, setAmount] = useState(0);
  const [interest, setInterest] = useState(0);
  const [duration, setDuration] = useState(0);
  const [payment, setPayment] = useState(0);

  const { t } = useTranslation();

  const validateValue = (value) => {
    console.log(" valida value ", value);
    const parsedValue = parseFloat(value);

    console.log(" parsedValue parsedValue ", parsedValue);

    console.log(" isNaN(parsedValue) || parsedValue <= 0 ? 0 : parsedValue = ", isNaN(parsedValue) || parsedValue <= 0 ? 0 : parsedValue);

    return isNaN(parsedValue) || parsedValue <= 0 ? 0 : parsedValue;
  };
  
  useEffect(() => {
    if (amount > 0 && interest > 0 && duration > 0) {
      setPayment(calculatePayment(amount, interest, duration));
    } else {
      setPayment(0);
    }
  }, [amount, interest, duration]);

  const pieData = [
    {
      name: t('MainScreen.chart.fees'),
      population: validateValue(getFees(payment, amount, duration)),
      color: 'rgba(255, 99, 132, 1)',
    },
    {
      name: t('MainScreen.chart.capital'),
      population: validateValue(getCapital(amount)),
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
            formatter={formatCurrency}
          />
          <InputField
            label={t('MainScreen.form.inputs.placeholder.interest')}
            value={interest}
            setValue={setInterest}
            formatter={formatPercentage}
          />
          <InputField
            label={t('MainScreen.form.inputs.placeholder.duration')}
            value={duration}
            setValue={setDuration}
            suffix={t('MainScreen.form.inputs.unit')} 
            formatter={undefined}
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
    paddingHorizontal: 20,
  },
  chartContainer: {
    marginVertical: 5,
    alignItems: 'center',
  },
});
