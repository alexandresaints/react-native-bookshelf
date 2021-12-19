import axios from "axios";
import React, {useState, useEffect } from "react";
import {View, ActivityIndicator, StyleSheet, Text, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/Ionicons';
import RatingComponent from "../../Components/Ratings";

import Categories from "../Categories";
import MostViewed from "../MostViewed";


export default function Book(props){

const title = props.route.params.title
const description = props.route.params.description
const image = props.route.params.image
const author = props.route.params.author
const category = props.route.params.list
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
    <ScrollView key={props.route.params.rank} style={{backgroundColor: '#FFF'}}>
        <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <Image source={{uri: image}} style={styles.bookImage}/>
                    <View>
                        <Text style={styles.bookFont}>{title}</Text>
                        <Text style={styles.bookAuthorFont}>{author}</Text>
                        <RatingComponent/>
                        <Text style={styles.bookAuthorFont}>{category}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.aboutBook}>Sobre esse livro</Text>
                    <Text style={styles.descriptionBook}>{description}</Text>
                </View>
                <View style={styles.readNowContainer}>
                <TouchableOpacity style={styles.readNow}>
                        <Text style={styles.readNowText}>Ler agora</Text>
                    </TouchableOpacity>
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
    mainContainer: {
        flexDirection: 'row'
    },

    bookFont: {
        color: '#000',
        fontWeight: 'bold',
        maxWidth: 180,
        fontSize: 18
    },
    bookAuthorFont: {
        color: '#303030',
        fontSize: 14,
        maxWidth: 120,
    },
    aboutBook: {
        color: '#000',
        fontWeight: 'bold',
        maxWidth: 200,
        fontSize: 18,
        marginTop: 20
    },
    descriptionBook: {
        color: '#303030',
        fontSize: 14,
        maxWidth: 500,
        color: '#000',
        marginTop: 10
    },
    headerTopic: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20

    },

    bookImage: {
        width: 180,
        height: 270,
        marginRight: 10,
        borderRadius: 5
    },

    bookContainer: {
        flexDirection: 'row',
    },

    readNowContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 220
    },
    readNowText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 13
    },

    readNow: {
        width: '100%',
        padding: 10,
        backgroundColor: '#FFA500',
        justifyContent: 'center',
        alignItems: 'center'
    }

})