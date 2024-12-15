import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, Dimensions, ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next';
import { calculatePayment, formatCurrency, formatPercentage, totalToPay, getFees, getCapital } from '@/utils/loanCalculator';
import InputField from '@/components/InputField';
import ResultCard from '@/components/ResultCard';
import SummarySection from '@/components/SummarySection';
import { PieChart } from 'react-native-chart-kit';
import { router } from 'expo-router';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {
  const [amount, setAmount] = useState(0);
  const [interest, setInterest] = useState(0);
  const [duration, setDuration] = useState(0);
  const [payment, setPayment] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const { t } = useTranslation();

  const validateValue = (value) => {
    const parsedValue = parseFloat(value);
    return isNaN(parsedValue) || parsedValue <= 0 ? 0 : parsedValue;
  };

  const simulateLoading = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Sleep for 1 second
    setIsLoading(false);
  };

  useEffect(() => {
    if (amount > 0 && interest > 0 && duration > 0) {
      simulateLoading();
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
            formatter={amount ? formatCurrency : undefined}
          />
          <InputField
            label={t('MainScreen.form.inputs.placeholder.interest')}
            value={interest}
            setValue={setInterest}
            formatter={interest ? formatPercentage : undefined}
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

        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#004e89" />
          </View>
        ) : (
          payment > 0 && (
            <>
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
                onAmortization={() => router.push('/amortization')}
              />
            </>
          )
        )}
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
  loadingContainer: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
