import React from 'react'
import { StyleSheet, Text, SafeAreaView, Image, Dimensions } from 'react-native'
import { Button } from '../components/Button'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import wateringImg from '../assets/watering.png'



export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </Text>

      <Image source={wateringImg} style={styles.image} resizeMode="contain" />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas {'\n'}
        plantas. Nós cuidamos de lembrar você {'\n'}
        sempre que precisar.
      </Text>

      <Button />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 38
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 10,
    color: colors.heading,
    fontFamily: fonts.text
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 56,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
})
