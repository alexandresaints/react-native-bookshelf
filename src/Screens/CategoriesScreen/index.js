import axios from "axios";
import React, {useState, useEffect } from "react";
import {View, FlatList, StyleSheet, Text, Image, ScrollView, TouchableOpacity, TextInput, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/core";

import RatingComponent from "../../Components/Ratings";



const CategoriesScreen = (props) => {

const navigation = useNavigation()
const [dataBooks, setDataBooks] = useState([])
const kingOfBooks = props.route.params.list
const list = props.route.params.list_name

    useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${kingOfBooks}.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR`)
                .then(response => {
                    setDataBooks(response.data.results.books)
                }).catch(error => {
                    console.log(error)
                })
    }, [])

return(
    <SafeAreaView style={{backgroundColor: '#FFF'}}>
        <View style={styles.container}>
        {dataBooks.lenght < 1 ? null :
    <FlatList
           data={dataBooks}
           keyExtractor={(item) => {return item.rank}}
           renderItem={({item}) => (
            <TouchableOpacity
            onPress={() => {
                navigation.navigate('Book', {title: item.title, rank: item.rank, description: item.description, image: item.book_image, author: item.author, list: list})
            }}
            >
                <View style={{marginTop: 20}}>
                <Image source={{uri: item.book_image}} style={styles.bookImage}/>
                <Text numberOfLines={1} style={styles.bookFont}>{item.title}</Text>
                <Text numberOfLines={1} style={styles.bookAuthorFont}>{item.author}</Text>
                <View style={{width: 78}}>
                    <RatingComponent/>
                </View>
                </View>
            </TouchableOpacity>
           )}
           numColumns={3}
       />
        }
        </View>
   </SafeAreaView>

)
}

export default CategoriesScreen

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#FFF',
        paddingLeft: 20,
        paddingRight: 20
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
        width: 110,
        height: 150,
        marginRight: 10,
        borderRadius: 5,
        flex: 1
    },

    bookContainer: {
        margin: 10
    }

})