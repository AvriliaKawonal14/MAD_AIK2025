/* eslint-disable react/react-in-jsx-scope */
//1.import component raect-native
// import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
//2.buat component
// component adalah function yang return jsx
const App = () => {
  return (
    //jsx
    //view as a container
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
      </View>
      <View>
        <Text style={styles.Text}>Username</Text>
        <TextInput style={styles.input} placeholder="Masukkan username anda" />
        <Text style={styles.Text}>Password</Text>
        <TextInput style={styles.input} placeholder="Masukkan password anda" />
        <Text style={styles.Text}>Alamat</Text>
        <TextInput style={styles.input} placeholder="Masukkan password anda" />
        <Text style={styles.Text}>No.Telp</Text>
        <TextInput style={styles.input} placeholder="Masukkan password anda" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

//3.export component
export default App;
const styles = StyleSheet.create({
  container: {
    padding: 30, //border with text component(inner)
  },

  title: {
    fontSize: 40,
    fontWeight: '700',
    color: 'black',
    marginLeft: -10,
  },

  input: {
    borderColor: 'silver',
    borderWidth: 2,
    margin: 20,
    fontSize: 15,
    borderRadius: 10,
    padding: 10,
  },

  button: {
    backgroundColor: 'orange',
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },

  Text: {
    fontWeight: '600',
    marginLeft: 25,
    marginBottom: -10,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
