import React, { useState } from 'react';
import { Alert, Button, View, StyleSheet, SafeAreaView,} from 'react-native';


  export default function CurrencyButtons(props) {



  return (
    <SafeAreaView style={styles.buttonsContainer}>
    
    <View style={styles.currencyButtonContainer}>
    <Button
        title="Dolar"
        onPress={() => {props.setCurrency('Dolares')}}
        style={styles.currencyButton}
        color={'#14A073'}
      />

    
    <Button
        title="Real"
        onPress={() => {props.setCurrency('Reales')}}
        style={styles.currencyButton}
        color={'#14A073'}
      />

    <Button
        title="Pesulis"
        onPress={() => {props.setCurrency('Pesulis')}}
        style={styles.currencyButton}
        color={'#14A073'}
      />
    </View>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  currencyButtonContainer: {
    flexDirection: "row",
    justifyContent: 'space-around',
    gap: 20,

  },
  buttonsContainer: {
    gap: 20,
    width: 300,
  }
});
