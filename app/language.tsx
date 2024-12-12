import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#fff'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const Language = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          { data: ['Alemán', 'Árabe', 'Chino', 'Español', 'Francés', 'Italiano', 'Inglés', 'Hindi', 'Japonés', 'Ruso'] }
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={item => `languageEntry-${item}`}
      />
    </View>
  );
};

export default Language;
