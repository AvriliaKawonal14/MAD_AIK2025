import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redContainer}>
        <Text>Hallo</Text>
      </View>
      <View style={styles.greenContainer} />
      <View style={styles.blueContainer} />
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', //kalau pakai reverse kebalikannya, letak juga berubah
    // justifyContent: 'flex-start',   //kalau pakai flex-end dan flex-start, posisi tidak berubah tapi berpindah/serong
    justifyContent: 'center', //ditengah
    // justifyContent: 'space-around', // buat space antara kiri dan kanan
    // justifyContent: 'space-between', //buat space tapi tidak ada jarak di ujung kiri dan kanan
    alignItems: 'center', //ditengah" top,buttom,left and right.
  },
  redContainer: {
    backgroundColor: 'red',
    height: 100, //flex: 1,
    width: 100,
  },
  greenContainer: {
    backgroundColor: 'green',
    height: 100, //flex: 1,
    width: 100,
  },
  blueContainer: {
    backgroundColor: 'blue',
    height: 100, //flex: 1,
    width: 100,
  },
});
