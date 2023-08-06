
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import CurrencyDropdown from './components/CurrencyDropdown';


export default function App() {
  const [conversionRates, setConversionRates] = useState([]);
  const currencyUrl = 'https://api.currencyfreaks.com/v2.0/rates/latest?apikey=74ea4fe00799468484d79b31161a5056';

  // useEffect(() => {
  //   fetch(currencyUrl)
  //     .then(response => {
  //       if(!response.ok) {
  //         throw Error('Error fetching data');
  //       }
  //       return response.json()
  //     })
  //     .then(data =>{ 
  //       setConversionRates(data.rates)
  //       console.log(data.rates)
  //     })
  //     .catch(error => console.error('Error fetching data:', error))
  // }, []);

  return (
    <View style={[styles.container]}>
      <Text style={styles.heading}>CONVERT</Text>
      <Text>From:</Text>
      <View style={styles.line}>
      <TextInput keyboardType='numeric' style={styles.textInput} />
      <CurrencyDropdown />
      </View>
      <Text>To:</Text>
      <View style={styles.line}>
      <TextInput keyboardType='numeric' style={styles.textInput} />
      <CurrencyDropdown />
     </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 40,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#000'
  },
  line: { 
    fontSize: 25,
    flexDirection: 'row',
    marginBottom: 10,
  },
  text: {
    fontSize: 25,
    marginRight: 10,
  },
  textInput: {
    width: 100,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 25,
    textAlign: 'center',
    
  }
});
