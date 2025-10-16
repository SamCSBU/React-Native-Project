import { StyleSheet, Text, View, Image } from 'react-native'
import {Link} from 'expo-router'
import ProfileCard from '../components/ProfileCard'

export default function ProfileCardScreen() {
  return (
    <View style={styles.container}>
        <ProfileCard />
    </View>
 
  )
}

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
    },
   card: {
      backgroundColor: '#eee',
      padding: 20,
      borderRadius: 5,
      boxShadow: '4x 4x rgba(0,0,0,0.1)',
    },   
})