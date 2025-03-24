import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Input from './components/input';
import Button from './components/button';
import Title from './components/title';

const Signin = () => {
  // let title = 'Welcome!!!';   //Variable biasa
  const [title, setTitle] = useState('Welcome'); //State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    // title = 'Selamat Datang';
    setTitle('Selamat Datang');
    console.log(username, password);
  };

  return (
    <View style={styles.container}>
      <Title text="Registration" />
      <Input
        label="Name"
        placeholder="Masukan nama lengkap anda"
        onChangeText={e => setUsername(e)}
      />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={e => setPassword(e)}
        secureTextEntry={true}
      />
      <Input
        label="Email"
        placeholder="Masukan email anda"
        onChangeText={e => setPassword(e)}
        secureTextEntry={true}
      />
      <Input
        label="Addres"
        placeholder="Masukan alamat anda"
        onChangeText={e => setPassword(e)}
        secureTextEntry={true}
      />
      <Input
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        onChangeText={e => setPassword(e)}
        secureTextEntry={true}
      />
      <Button label="Register" onPress={onSubmit} />
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 40,
    color: 'black',
    fontWeight: '700',
    marginBottom: 20,
  },
  label: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    fontSize: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'orange',
    padding: 15,
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
