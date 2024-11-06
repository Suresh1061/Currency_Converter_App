import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { currencyByRupee } from './constant'
import CurrencyBtn from './components/currencyBtn'
import Snackbar from 'react-native-snackbar';

const App = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [resultValue, setResultValue] = useState<string>('')
  const [targetCurrency, setTargetCurrency] = useState<string>('')

  const Calculate = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Please enter an amount',
        backgroundColor: '#ea7773',
        textColor: '#000000',
      })
    }
    const amount = parseFloat(inputValue)
    if (!isNaN(amount)) {
      const convertedCurrency = amount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedCurrency.toFixed(2)}`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    } else {
      return Snackbar.show({
        text: 'Please enter a valid amount',
        backgroundColor: '#ea7773',
        textColor: '#000000',
      })
    }
  }
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              style={styles.inputAmountField}
              value={inputValue}
              maxLength={14}
              onChangeText={(val) => setInputValue(val)}
              keyboardType='numeric'
              placeholder='Enter Amount in Rupee'
            />
          </View>
          {resultValue && (
            <Text style={styles.resultTxt}>
              {resultValue}
            </Text>
          )}
        </View>
        <FlatList
          numColumns={3}
          data={currencyByRupee}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Pressable
              style={[
                styles.button,
                targetCurrency === item.name && styles.selected
              ]}
              onPress={() => Calculate(item)}
            >
              <CurrencyBtn {...item} />
            </Pressable>
          )}
        />
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,
    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});