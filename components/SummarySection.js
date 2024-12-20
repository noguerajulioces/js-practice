import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { formatCurrency } from '@/utils/loanCalculator';
import { useTranslation } from 'react-i18next';

export default function SummarySection({ total, onSave, onAmortization }) {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>{t("components.SummarySection.totalToPay")}</Text>
        <Text style={styles.summaryValue}>{formatCurrency(total)}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={onAmortization}>
          <Text style={styles.buttonText}>{t("components.SummarySection.amortizationTable")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onSave}>
          <Text style={styles.buttonText}>
            {t("components.SummarySection.saveLoan")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  summary: {
    alignItems: 'center',
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 16,
    color: '#7F7F7F',
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004e89',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    backgroundColor: '#004e89',
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});
