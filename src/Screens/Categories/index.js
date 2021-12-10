import axios from "axios";
import React from "react";
import {View, SafeAreaView, StyleSheet, Text, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';
import BoxCategory from "../../Components/BoxCategory";

export default function Categories(){
    return(
    <ScrollView style={{backgroundColor: '#FFF'}}>
            <View>
                <Text style={styles.headerTopic}>
                    Categorias
                </Text>
            </View>

        <BoxCategory/>
        
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
        maxWidth: 140,
    },
    boxCategory: {
        backgroundColor: '#303030',
        width: 100,
        height: 100

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