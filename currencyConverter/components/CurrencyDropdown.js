import React, { useState, useEffect } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
// import { createTable, insertCurrency, getAllCurrencies } from '../database/localDB';

const CurrencyDropdown = () => {
  const [currencySymbols, setCurrencySymbols] = useState([]);
    const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch('https://api.currencyfreaks.com/v2.0/currency-symbols')
      .then(response => {
        if (!response.ok) {
          throw Error('Error fetching data');
        }
        return response.json();
      })
      .then(data => {
        // Assuming data.symbols is the array of currency symbols
        setCurrencySymbols(data.currencySymbols);
      })
      .catch(error => console.error('Error fetching data:', error));

        // createTable();
    //   currencySymbols.forEach(currency => {
    //     insertCurrency(currency.symbol, currency.name);
    //     console.log(currency);
    //   });

    //   getAllCurrencies(currencies => {
    //     console.log(currencies);
    //   });
  }, []);


  return (
    <SelectList
    data={Object.values(currencySymbols)}
    maxHeight={100}
    setSelected={setSelected}
    selected={selected}
    />
  );
};

const styles = {
  button: {
    backgroundColor: '#f2f22f',
    width: 100,
    height: 50,
    borderRadius: 10,
  },
};

export default CurrencyDropdown;

//     <SelectDropdown
    //   data={Object.values(currencySymbols)}
    //   keyExtractor={currency => currency}
    //   buttonStyle={styles.button}
    //   defaultButtonText={"Select"}
    //   onSelect={(selectedItem, index) => {
    //     console.log(selectedItem, index);
    //   }}
    //   buttonTextAfterSelection={(selectedItem, index) => {
    //     return selectedItem;
    //   }}
    //   rowTextForSelection={(item, index) => {
    //     return item;
    //   }}
    // /> 