import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

type CurrencyBtn = PropsWithChildren<{
     flag: string;
     name: string;
}>

const CurrencyBtn = ({ flag, name }: CurrencyBtn): JSX.Element => {
     return (
          <View style={styles.buttonContainer}>
               <Text style={styles.flag}>{flag}</Text>
               <Text style={styles.country}>{name}</Text>
          </View>
     )
}

export default CurrencyBtn

const styles = StyleSheet.create({
     buttonContainer: {
          alignItems: 'center',
          paddingVertical: 4
     },
     flag: {
          fontSize: 20,
          color: "#FFFFFF",
          marginBottom: 4
     },
     country: {
          fontSize: 14,
          color: "#2d3436",
          textAlign: 'center'
     }
})