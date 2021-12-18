import axios from "axios";
import React, {useState, useEffect } from "react";
import {View, Flatlist, StyleSheet, Text, Image, ScrollView, TouchableOpacity, TextInput, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/core";

import Icon from 'react-native-vector-icons/Ionicons';
import RatingComponent from "../../Components/Ratings";

import Categories from "../Categories";
import MostViewed from "../MostViewed";
import { Grid, Col } from "react-native-easy-grid";


const CategoriesScreen = (props) => {

const navigation = useNavigation()
const [dataBooks, setDataBooks] = useState([])
const kingOfBooks = props.route.params.list

    useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${kingOfBooks}.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR`)
                .then(response => {
                    setDataBooks(response.data.results.books)
                }).catch(error => {
                    console.log(error)
                })
    }, [])

return(
    <SafeAreaView style={styles.container}>
        {dataBooks.lenght < 1 ? null :
    <Flatlist
           data={dataBooks}
           keyExtractor={(item, index) => {return item.rank}}
           renderItem={({item, index}) => (
            <TouchableOpacity
            onPress={() => {
                navigation.navigate('Book', {title: item.title, rank: item.rank, description: item.description, image: item.book_image, author: item.author})
            }}
            >
                <Image source={{uri: item.book_image}} style={styles.bookImage}/>
                <Text numberOfLines={1} style={styles.bookFont}>{item.title}</Text>
                <Text numberOfLines={1} style={styles.bookAuthorFont}>{item.author}</Text>
            </TouchableOpacity>
           )}
       />
        }
   </SafeAreaView>

)
}

const styles = StyleSheet.create({

    container: {
        margin: 20,
        backgroundColor: '#FFF',
    },
    listBooks: {
        backgroundColor: '#FFF',
        flexWrap: 'wrap',
        flexBasis: 10
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
        borderRadius: 5,
        flex: 1
    },

    bookContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1
    }

})

export default CategoriesScreen