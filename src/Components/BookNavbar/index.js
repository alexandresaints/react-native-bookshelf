import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import like from '../Assets/Images/like.png'
import send from '../Assets/Images/send.png'

export default function BookNavbar(){
        return(
            
            <View style={{flexDirection: 'row', marginHorizontal: 280}}>
                <TouchableOpacity>
                    <Image source={like} style={styles.headerIcons, {marginLeft: 10}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={send} style={styles.headerIcons} />
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({

    headerLogo: {
        marginHorizontal: 10
    },
    headerTitle: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 24
    },
    headerIcons: {
        width: 20,
        height: 20,
        marginLeft: 40
    },

})
    
