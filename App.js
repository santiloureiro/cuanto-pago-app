import { StatusBar } from 'expo-status-bar';
import {React, useEffect, useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import CurrencyButtons from './components/CurrencyButtons';
import CurrencyTable from './components/CurrencyTable';
import { Arvo_400Regular, Arvo_700Bold, Arvo_700Bold_Italic, Arvo_400Regular_Italic, useFonts } from '@expo-google-fonts/arvo';


export default function App() {

  const [fontsLoaded] = useFonts({
    Arvo_400Regular, Arvo_700Bold, Arvo_700Bold_Italic, Arvo_400Regular_Italic
  });

  useEffect(() => {
    fetch('https://dolarapi.com/v1/dolares/blue')
    .then(response => response.json())
    .then(json => setDolarBlue(json.venta))
    .catch(error => console.error(error));

    fetch('https://dolarapi.com/v1/dolares/oficial')
    .then(response => response.json())
    .then(json => setDolar(json.venta))
    .catch(error => console.error(error));

    fetch('https://dolarapi.com/v1/cotizaciones/brl')
    .then(response => response.json())
    .then(json => setReales(Math.round(json.venta)))
    .catch(error => console.error(error));
  
    return () => {
      
    }
  }, [])
  

  const [dolar, setDolar] = useState(null)

  const [dolarBlue, setDolarBlue] = useState(null)
  
  const [real, setReales] = useState(null)

  const [text, onChangeText] = useState('Useless Text');
  
  const [number, onChangeNumber] = useState('');

  const [currency, setCurrency] = useState('Reales')

  const formatCurrency = (amount) => {
    return(Number(amount)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,'))
  }

  if(!fontsLoaded)
  {
    return(<Text>Loading...</Text>)
  }


  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />

      <Text style={styles.title}>Cuanto estoy pagando en {currency} 🇧🇷?</Text>
      <View style={styles.countersContainer}>
        <Text style={styles.paragraph}>USD$ {formatCurrency(number * 0.20)}</Text>
        <Text style={styles.paragraph}>ARS$ {formatCurrency(number * real * (1 + 0.3))}</Text>
        <Text style={styles.paragraph}>R$ {formatCurrency(number)}</Text>
      </View>
      <TextInput
        width={300}
        textAlign='center'
        style={styles.currencyInput}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Cuantos reales vas a gastar?"
        keyboardType="numeric"
        placeholderTextColor='#fff'
      />


    <CurrencyTable real={real} dolarBlue={dolarBlue} dolar={dolar}/>

    </View>
  );
}

const fontColor = '#fff'

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    gap: 30,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 20,
    fontFamily: 'Arvo_700Bold',
    color: fontColor,
    textAlign: 'center'
  },
  paragraph: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Arvo_400Regular',

  },
  currencyInput: {
    backgroundColor: 'transparent',
    borderBottomWidth : 1.0,
    borderColor: '#ffffff',
    padding: 10,
    fontSize: 20,
    color: fontColor,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arvo_400Regular',
  },
  countersContainer: {
    backgroundColor: '#fff',
    color: '#000',
    padding: 20,
    borderRadius: 10,
  }
});
