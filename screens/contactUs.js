import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

export default class ContactUser extends React.Component{
    render(){
        return(
            <View>
                <Text style={styles.header}>Contact Us</Text>
                <a href="https://www.facebook.com">
                <Image source = {require('../assets/facebook.jpg')}
                style={styles.img}
                /></a>
                <Text style={styles.text}>Facebook</Text>
                <a href = 'https://www.gmail.com/'>
                <Image source = {require('../assets/gmail.jpg')}
                style={styles.img}/>
                </a>
                <Text style={styles.text}>Gmail</Text>

                <a href = 'https://www.twitter.com/'>
                <Image source = {require('../assets/twitter.jpg')}
                style={styles.img}
                
                /></a>
                <Text style={styles.text}>Twitter</Text>
                

                <a href = 'https://www.instagram.com/'>
                <Image source = {require('../assets/insta.jpg')}
                style={styles.img}
                
                /></a>
                <Text style={styles.text}>Instagram</Text>
                

                <a href = 'https://www.pinterest.com/'>
                <Image source = {require('../assets/pinterest.jpg')}
                style={styles.img}
                
                /></a>
                <Text style={styles.text}>Pinterest</Text>
                
            </View>
            )
    }
}

const styles = StyleSheet.create({
    header: {
        color : '#FFFFFF',
        fontFamily : 'inter',
        fontSize : 50,
        marginLeft : 230,
        marginTop : -80
    },
    img: {
        alignSelf : 'baseline',
        marginTop : 40,
        justifyContent : 'left',
        alignContent : 'left',
        height : 60,
        width : 60,
        marginLeft : 230,
        borderRadius : 40,
    
    },
    text : {
     //   alignSelf : 'baseline',
        marginTop : -50,
        justifyContent : 'left',
        alignContent : 'left',
        marginLeft : 530,
        fontSize : 30,
        fontFamily : 'Helvetica',
        color : 'white',
      //  marginBottom : 30
    }
})