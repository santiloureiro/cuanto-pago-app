import React, { useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Arvo_400Regular, Arvo_700Bold, Arvo_700Bold_Italic, Arvo_400Regular_Italic, useFonts } from '@expo-google-fonts/arvo';


  export default function CurrencyTable(props) {



  return (
    <View width={300} style={styles.tableContainer}>
        
        <View style={styles.currencyContainer}>

        <Text style={styles.currencyValue}>Tabla de Precios:</Text>

        </View>

        <View style={styles.currencyContainer}>

        <Text style={styles.currencyValue}>Real:</Text>
        <Text style={styles.currencyValue}>ARS${props.real}</Text>

        </View>

        <View style={styles.currencyContainer}>

        <Text style={styles.currencyValue}>Dolar Blue:</Text>
        <Text style={styles.currencyValue}>ARS${props.dolarBlue}</Text>

        </View>

        <View style={styles.currencyContainer}>

        <Text style={styles.currencyValue}>Dolar Oficial:</Text>
        <Text style={styles.currencyValue}>ARS${props.dolar}</Text>

        </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
    currencyValue: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'Arvo_700Bold',
  },
  tableContainer: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10 ,
    display: 'flex',
    gap: 20,
  },
  currencyContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
