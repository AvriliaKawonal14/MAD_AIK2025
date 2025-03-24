import { StyleSheet, Text, View } from "react-native";
import React, {useState, useEffect} from 'react';
import axios from 'react'; 

const RestAPI = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios 
            .get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data));
    }, []);
    return (
        <View>
            <Text>RestAPI</Text>
            {users.map(item => ())}
        </View>
    )
}