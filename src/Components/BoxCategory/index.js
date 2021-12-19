import axios from "axios";
import React, {useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import {View, SafeAreaView, StyleSheet, Text, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';

export default function BoxCategory(){

const navigation = useNavigation()
const [dataBooks, setDataBooks] = useState([])

const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

    useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR`)
                .then(response => {
                    setDataBooks(response.data.results)
                }).catch(error => {
                    alert(error)
                })
    }, [])
    
    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={false} style={styles.bookContainer}>
        {dataBooks.map((book) => {
            // data.books.map((book) => {
                const {list_name, list_name_encoded, rank} = book
                console.log(book)
            
        return(
            <View key={list_name_encoded}>
                <View styles={{flexDirection: 'row'}}>
                    <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Category', {list: list_name_encoded, list_name: list_name})
                    }}
                    >
                        <View style={[styles.boxCategory, {backgroundColor: generateColor()}]}></View>
                        <Text numberOfLines={1} style={styles.bookFont}>{list_name}</Text>
                    </TouchableOpacity>
                </View>
             </View>
        )

    // })
    })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    bookFont: {
        color: '#000',
        fontWeight: 'bold',
        maxWidth: 100,
        fontSize: 12,
        marginLeft: 10
    },
    boxCategory: {
        width: 80,
        height: 80,
        margin: 10,
        borderRadius: 10

    }
})