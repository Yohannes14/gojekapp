import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Pressable, View } from 'react-native';
import CountryPicker, {
  Country,
  CountryCode,
} from 'react-native-country-picker-modal';

export default function LanguageSelectorScreen() {
  const [countryCode, setCountryCode] = useState<CountryCode>('US');
  const [country, setCountry] = useState<Country | null>(null);
  const [language, setLanguage] = useState('English');
  const [isVisible, setIsVisible] = useState(false);

  const onSelect = (selectedCountry: Country) => {
    setCountry(selectedCountry);
    setCountryCode(selectedCountry.cca2);

    // Use `selectedCountry.name.common` for the country name
    const countryName =
      typeof selectedCountry.name === 'string'
        ? selectedCountry.name
        : selectedCountry.name.common;
    setLanguage(countryName);

    setIsVisible(false); // Close the modal after selection
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>🌍 App Logo</Text>

        {/* Language Button */}
        <Pressable onPress={() => setIsVisible(true)} style={styles.languageButton}>
          <Text style={styles.languageText}>{language}</Text>
        </Pressable>
      </View>

      <Text style={styles.bodyText}>
        Selected Language: {language} {country?.flag || '🇺🇸'}
      </Text>

      {/* Country Picker Modal */}
      {isVisible && (
        <CountryPicker
          withFlag
          withAlphaFilter
          withFilter
          withEmoji
          withCountryNameButton
          onSelect={onSelect}
          countryCode={countryCode}
          theme={{ fontFamily: 'Arial', backgroundColor: '#fff' }}
          containerButtonStyle={styles.pickerContainer}
          visible={isVisible}
          onClose={() => setIsVisible(false)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  languageButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007BFF',
    borderRadius: 20,
  },
  languageText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bodyText: {
    marginTop: 30,
    fontSize: 18,
    textAlign: 'center',
  },
  pickerContainer: {
    marginTop: 20,
  },
});
