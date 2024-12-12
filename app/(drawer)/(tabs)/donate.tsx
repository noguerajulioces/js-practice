import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function donateScreen() {
  const { t } = useTranslation();

  const handleDonation = (amount: number) => {
    alert(t('donateScreen.thankYou', { amount: amount.toFixed(2) }));
  };

  const restorePurchase = () => {
    alert(t('donateScreen.restoreMessage'));
  };

  return (
    <View style={styles.container}>
      {/* Mensaje Principal */}
      <View style={styles.message}>
        <Text style={styles.title}>{t('donateScreen.title')}</Text>
        <Text style={styles.description}>{t('donateScreen.description')}</Text>
        <Text style={styles.subtitle}>
          {t('donateScreen.subtitle')}
          <Text style={styles.smallText}>{t('donateScreen.smallText')}</Text>
        </Text>
      </View>

      {/* Botones de Donación */}
      <View style={styles.donationContainer}>
        <TouchableOpacity style={styles.donationButton} onPress={() => handleDonation(2.99)}>
          <Text style={styles.donationText}>{t('donateScreen.donationOptions.option1')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.donationButton} onPress={() => handleDonation(4.99)}>
          <Text style={styles.donationText}>{t('donateScreen.donationOptions.option2')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.donationButton} onPress={() => handleDonation(6.99)}>
          <Text style={styles.donationText}>{t('donateScreen.donationOptions.option3')}</Text>
        </TouchableOpacity>
      </View>

      {/* Botón Restaurar Compra */}
      <TouchableOpacity style={styles.restoreButton} onPress={restorePurchase}>
        <Text style={styles.restoreText}>{t('donateScreen.restorePurchase')}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  message: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 12,
    color: '#666',
  },
  donationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  donationButton: {
    backgroundColor: '#004e89',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  donationText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  restoreButton: {
    backgroundColor: '#004e89',
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  restoreText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
