import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function donateScreen() {
  const handleDonation = (amount: number) => {
    alert(`¡Gracias por donar USD ${amount}!`);
  };

  const restorePurchase = () => {
    alert('Tus compras han sido restauradas.');
  };

  return (
    <View style={styles.container}>
      {/* Mensaje Principal */}
      <View style={styles.message}>
        <Text style={styles.title}>Todo esto es posible gracias a ti!</Text>
        <Text style={styles.description}>
          La Calculadora de Préstamos es completamente gratis y estamos trabajando muy duro para
          hacer nuevas aplicaciones! Si te gusta nuestra aplicación, puedes apoyar a nuestro equipo
          con un poco de amor para alimentar nuestros esfuerzos! A cambio, vamos a habilitar las
          notificaciones sobre cuándo tiene que pagar sus préstamos y eliminaremos los anuncios!
        </Text>
        <Text style={styles.subtitle}>
          Tus donaciones nos ayudan muchísimo{'\n'}<Text style={styles.smallText}>Alimenta nuestras mascotas</Text>
        </Text>
      </View>

      {/* Imagen */}
      <View style={styles.imageContainer}>
        
      </View>

      {/* Botones de Donación */}
      <View style={styles.donationContainer}>
        <TouchableOpacity style={styles.donationButton} onPress={() => handleDonation(2.99)}>
          <Text style={styles.donationText}>USD 2,99</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.donationButton} onPress={() => handleDonation(4.99)}>
          <Text style={styles.donationText}>USD 4,99</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.donationButton} onPress={() => handleDonation(6.99)}>
          <Text style={styles.donationText}>USD 6,99</Text>
        </TouchableOpacity>
      </View>

      {/* Botón Restaurar Compra */}
      <TouchableOpacity style={styles.restoreButton} onPress={restorePurchase}>
        <Text style={styles.restoreText}>RESTAURAR COMPRA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#000',
    paddingVertical: 15,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
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
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
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