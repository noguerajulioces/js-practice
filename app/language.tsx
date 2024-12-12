import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LanguageScreen() {
  const { t } = useTranslation();

  // Lista de idiomas disponibles
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'zh', label: '中文 (Chinese)' },
    { code: 'ar', label: 'العربية (Arabic)' },
    { code: 'fr', label: 'Français (French)' },
    { code: 'pt', label: 'Português (Portuguese)' },
    { code: 'de', label: 'Deutsch (German)' },
    { code: 'hi', label: 'हिंदी (Hindi)' },
    { code: 'ja', label: '日本語 (Japanese)' },
    { code: 'ru', label: 'Русский (Russian)' },
  ];  

  // Cambiar idioma y guardar en AsyncStorage
  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
    await AsyncStorage.setItem('language', lng);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{t('languageScreen.selectLanguage')}:</Text>

      <View style={styles.languageList}>
        {languages.map(({ code, label }) => (
          <TouchableOpacity
            key={code}
            style={[
              styles.button,
              i18n.language === code && styles.selectedButton,
            ]}
            onPress={() => changeLanguage(code)}
          >
            <Text
              style={[
                styles.buttonText,
                i18n.language === code && styles.selectedButtonText,
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 20,
  },
  languageList: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#004e89',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  selectedButton: {
    backgroundColor: '#0078b8',
    borderWidth: 2,
    borderColor: '#fff',
  },
  selectedButtonText: {
    fontWeight: 'bold',
  },
});
