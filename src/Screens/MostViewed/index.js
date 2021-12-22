import axios from "axios";
import React, {useState, useEffect } from "react";
import {View, SafeAreaView, StyleSheet, Text, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/core";
import Icon from 'react-native-vector-icons/Ionicons';
import RatingComponent from "../../Components/Ratings";
import Categories from "../Categories";

import {Input} from './styles'

export default function MostViewed(){

const navigation = useNavigation()
const [dataBooks, setDataBooks] = useState([])

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
            <View>
                <Text style={styles.headerTopic}>
                    Os mais lidos da semana
                </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={false} style={styles.bookContainer}>
            {dataBooks.map((book) => {
               const bookList = book.books.map((book) => {
                    const {author, description, title, rank, book_image, price} = book
                    console.log(book)
            return(
                <View key={rank}>
                    <View>
                    <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Book', {title: title, rank: rank, description: description, image: book_image, author: author})
                    }}
                    >
                        <Image source={{uri: book_image}} style={styles.bookImage}/>
                        <Text numberOfLines={1} style={styles.bookFont}>{title}</Text>
                        <Text numberOfLines={1} style={styles.bookAuthorFont}>{author}</Text>
                    </TouchableOpacity>
                    <View style={{width: 78}}>
                        <RatingComponent/>
                    </View>
                    </View>
                 </View>
            )

       })
       return bookList
        })}
            </ScrollView>
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

    bookContainer: {
        flexDirection: 'row',
    }

})