import axios from "axios";
import React, {useState, useEffect } from "react";
import {View, ActivityIndicator, StyleSheet, Text, Image, ScrollView, TouchableOpacity, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Icon from 'react-native-vector-icons/Ionicons';
import RatingComponent from "../../Components/Ratings";

import Categories from "../Categories";
import MostViewed from "../MostViewed";

import {Input} from './styles'

export default function Home({navigation}){

const [dataBooks, setDataBooks] = useState([])
const [searchData, setsearchData] = ('')

    useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR`)
                .then(response => {
                    setDataBooks(response.data.results.lists)
                }).catch(error => {
                    console.log(error)
                })
    }, [])
    
    return(
    <ScrollView style={{backgroundColor: '#FFF'}}>
        <View style={styles.container}>
            <Input placeholder="Qual livro você gostaria de ler hoje?" onChangeText={setsearchData}/>
            <View>
                <Text style={styles.headerTopic}>
                    Para você
                </Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={false} style={styles.bookContainer}>
            {dataBooks.map((book) => {
               const bookList = book.books.map((book) => {
                    const {author, description, title, rank, book_image, price, weeks_on_list, list_name} = book
                    console.log(book)
            return(
                <View key={rank}>
                    <View>
                    <TouchableOpacity
                     onPress={() => {
                        navigation.navigate('Book', {title: title, rank: rank, description: description, image: book_image, author: author, list: list_name})
                    }}
                    >                        
                        <Image source={{uri: book_image}} style={styles.bookImage}/>
                        <Text numberOfLines={1} style={styles.bookFont}>{title}</Text>
                        <Text numberOfLines={1} style={styles.bookAuthorFont}>{author}</Text>
                        <RatingComponent/>
                    </TouchableOpacity>
                    </View>
                </View>
            )
            
        })
                return bookList
    })}        
            </ScrollView>
        
        <View>
            <Categories/>
        </View>

        <View style={{marginTop: 30}}>
            <MostViewed/>
        </View>
            
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        margin: 20,
        backgroundColor: '#FFF'
    },

    bookFont: {
        color: '#000',
        fontWeight: 'bold',
        maxWidth: 120,
        

    },
    bookAuthorFont: {
        color: '#303030',
        fontSize: 12,
        maxWidth: 120,

    },
    headerTopic: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20

    },

    bookImage: {
        width: 130,
        height: 180,
        marginRight: 10,
        borderRadius: 5
    },

})