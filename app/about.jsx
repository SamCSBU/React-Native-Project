import { StyleSheet, Text, View, Image } from 'react-native'
import { Link} from 'expo-router'

const About = () => {
  return (
    <View style={styles.container}>
        <Text>About</Text>
        <Link href={"/"} styles={styles.link}>Home</Link>
    </View>
  )
}

export default About

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