import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from '../assets/favicon.png'
import {Link} from 'expo-router'


const home = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'linktophoto'}}/>
      <Image source={Logo} style={styles.img}/>
      <Text style={[styles.title, {color: 'purple'}]}>The number 1</Text>
      <Text style={styles.title}>Reading List App</Text>

    <Link href="/about" style={styles.link}>About</Link>
    <Link href="/profileCard" style = {styles.link}>Profile Card</Link>

    </View>
  )
}

export default home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    tagLine: {
      marginTop: 10,
      marginBottom: 10,
    },
    img: {
      marginVertical: 10,
    },

    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    }
    
})