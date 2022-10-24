import React from "react";
import { ImageBackground, View, Text, StyleSheet } from "react-native";
import { Agenda } from 'react-native-calendars';

const image = require('../../assets/Background.jpg')
export default function Room() {
    return (
        <View style={styles.view}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Agenda
                selected={Date.now()}
                showClosingKnob={true}
                theme={{
                    agendaDayTextColor: 'darkorange',
                    agendaDayNumColor: '#3c3c3c',
                    agendaKnobColor: 'lightgrey',
                    backgroundColor: '#fffbed',
                    monthTextColor: 'darkorange',
                    textSectionTitleColor: 'darkorange',
                    dayTextColor: '#5d6e1e',
                    selectedDayBackgroundColor: 'darkorange',
                    todayTextColor: 'red',
                    dotColor: '#FF4500',
                    selectedDotColor: '#FF4500',
                }}
                />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'black', 
        alignSelf: 'center',
        fontSize: 30
    }
})