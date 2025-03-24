/* eslint-disable react/react-in-jsx-scope */
//1.import component raect-native
// import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
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
        <Text style={styles.title}>Basic React Native</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <TextInput style={styles.input} placeholder="Enter your Email" />
        <TextInput style={styles.input} placeholder="Enter your Password" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <Text style={styles.subTitle}>Logo ReactNative</Text>
        <Image
          style={styles.img1}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        <Text style={styles.subTitle}>Hallo</Text>
        <Image style={styles.img2} source={require('./assets/kawonal.jpg')} />
        <Text style={styles.subTitle}>Ini Saya</Text>
        <Image style={styles.img2} source={require('./assets/kawonal.jpg')} />
      </ScrollView>
    </>
  );
};

//3.export component
export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderColor: 'pink',
    borderWidth: 5,
    borderRadius: 20, //untuk ujung container atau border
    margin: 30, //border with komponen terluar
    padding: 30, //border with text component(inner)
  },

  title: {
    fontSize: 40,
    fontWeight: '700',
    color: 'pink',
    textAlign: 'center',
    //margin bisa juga dilakukan disini
  },

  subTitle: {
    fontSize: 25,
    fontWeight: 500,
    marginBottom: 10,
    color: 'black',
    textAlign: 'center',
  },

  img1: {
    height: 200,
    width: 200,
    marginLeft: 50,
  },

  img2: {
    height: 200,
    width: 200,
    marginLeft: 50,
    borderRadius: 20,
  },

  input: {
    borderColor: 'black',
    borderWidth: 2,
    margin: 20,
    fontSize: 15,
    borderRadius: 10,
    padding: 10,
  },

  button: {
    backgroundColor: 'blue',
    margin: 20,
    padding: 30,
    borderRadius: 10,
  },

  buttonText: {
    
  }
});
