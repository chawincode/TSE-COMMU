import React from "react";
import { View, ImageBackground, StyleSheet, TouchableOpacity, Image, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

const image = require('../../assets/Background.jpg')

export default function Room() {
    const navigation = useNavigation();  
    return (
      <View style={styles.view}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style={styles.textPet}>EXPLORE SPACE</Text>
              <View style={styles.boxin1}>
                <Text style={styles.text1}>PRIVATE ROOM 200</Text>
                <Text style={styles.text2}>ROOM TYPE PRIVATE</Text>
                <Text style={styles.text3}>CAPACITY</Text>
                <Text style={styles.text3}>4-6 PERSONS</Text>
                <TouchableOpacity onPress={() => navigation.navigate('RoomTime')}>
                  <View style={styles.fab}>
                    <Text style={styles.fabIcon}>BOOK NOW</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.boxin2}>
                <Text style={styles.text1}>PRIVATE ROOM 201</Text>
                <Text style={styles.text2}>ROOM TYPE PRIVATE</Text>
                <Text style={styles.text3}>CAPACITY</Text>
                <Text style={styles.text3}>4-6 PERSONS</Text>
                <TouchableOpacity onPress={() => navigation.navigate('RoomTime')}>
                  <View style={styles.fab}>
                    <Text style={styles.fabIcon}>BOOK NOW</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.boxin3}>
                <Text style={styles.text1}>PRIVATE ROOM 300</Text>
                <Text style={styles.text2}>ROOM TYPE PRIVATE</Text>
                <Text style={styles.text3}>CAPACITY</Text>
                <Text style={styles.text3}>8-10 PERSONS</Text>
                <TouchableOpacity onPress={() => navigation.navigate('RoomTime')}>
                  <View style={styles.fab}>
                    <Text style={styles.fabIcon}>BOOK NOW</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.boxin4}>
                <Text style={styles.text1}>PRIVATE ROOM 301</Text>
                <Text style={styles.text2}>ROOM TYPE PRIVATE</Text>
                <Text style={styles.text3}>CAPACITY</Text>
                  <Text style={styles.text3}>8-10 PERSONS</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('RoomTime')}>
                  <View style={styles.fab}>
                    <Text style={styles.fabIcon}>BOOK NOW</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.boxin5}>
                <Text style={styles.text1}>PRIVATE ROOM 400</Text>
                <Text style={styles.text2}>ROOM TYPE PRIVATE</Text>
                <Text style={styles.text3}>CAPACITY</Text>
                <Text style={styles.text3}>20-40 PERSONS</Text>
                <TouchableOpacity onPress={() => navigation.navigate('RoomTime')}>
                  <View style={styles.fab}>
                    <Text style={styles.fabIcon}>BOOK NOW</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.boxin6}>
                <Text style={styles.text1}>PRIVATE ROOM 401</Text>
                <Text style={styles.text2}>ROOM TYPE PRIVATE</Text>
                <Text style={styles.text3}>CAPACITY</Text>
                <Text style={styles.text3}>20-40 PERSONS</Text>
                <TouchableOpacity onPress={() => navigation.navigate('RoomTime')}>
                  <View style={styles.fab}>
                    <Text style={styles.fabIcon}>BOOK NOW</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
      )}

      const styles = StyleSheet.create({
      fab: {
          left: 24,
          top: 40,
          width: 90,
          height: 23,
          backgroundColor: '#efddc6',
          borderRadius: 9,
          position: "absolute"
      },
      fabIcon: {
          left: 8,
          top: 4,
          fontSize: 13,
          color: '#6b6b6b'
      },
      view: {
          flex: 1
      },
      image: {
          flex: 1,
      },
      text1: {
          left: 10,
          top: 15,
          color: 'white', 
          fontSize: 13
      },
      text2: {
          left: 10,
          top: 18,
          color: '#F1ADAD', 
          fontSize: 10
      },
      text3: {
          left: 10,
          top: 33,
          color: 'white', 
          fontSize: 13
      },
      text4: {
          left: 10,
          top: 34,
          color: 'white', 
          fontSize: 13
      },
      textPet: {
          position: "absolute",
          left: 31,
          top: 50,
          width: 178,
          height: 26,
          fontFamily: "Abhaya Libre Medium",
          fontSize: 20,
          fontWeight: "400",
          fontStyle: "normal",
          lineHeight: 20,
          color: "#100F0F",
      },
      btnRoom: {
          height: 26.04,
          width: 25,
          alignSelf: 'center',
          top: 7
      },
      boxin1: {
          left: 30,
          top: 70,
          marginTop: 30,
          width: 140,
          height: 130,
          backgroundColor: "#6b6b6b",
          borderRadius: 10,
          shadowColor: "#9A9A9A",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.5,
          shadowRadius: 10,     
      },
      boxin2: {
        left: 210,
        top: -90,
        marginTop: 30,
        width: 140,
        height: 130,
        backgroundColor: "#6b6b6b",
        borderRadius: 10,
        shadowColor: "#9A9A9A",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 10,     
      },
      boxin3: {
        left: 30,
        top: -70,
        marginTop: 30,
        width: 140,
        height: 130,
        backgroundColor: "#6b6b6b",
        borderRadius: 10,
        shadowColor: "#9A9A9A",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 10,     
      },
      boxin4: {
        left: 210,
        top: -230,
        marginTop: 30,
        width: 140,
        height: 130,
        backgroundColor: "#6b6b6b",
        borderRadius: 10,
        shadowColor: "#9A9A9A",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 10,     
      },
      boxin5: {
        left: 30,
        top: -210,
        marginTop: 30,
        width: 140,
        height: 130,
        backgroundColor: "#6b6b6b",
        borderRadius: 10,
        shadowColor: "#9A9A9A",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 10,     
      },
      boxin6: {
        left: 210,
        top: -370,
        marginTop: 30,
        width: 140,
        height: 130,
        backgroundColor: "#6b6b6b",
        borderRadius: 10,
        shadowColor: "#9A9A9A",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 10,     
      }
      })