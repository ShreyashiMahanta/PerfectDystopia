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
import RFValue from 'react-native-responsive-fontsize';

export default class DigitalAds extends React.Component{
    render(){
        return(
            <View style={styles.view}>
               <Image source={require("../assets/ads.png")} style = {styles.img}/>
                <Text style={styles.text}>From Netflix,Nike to Puma<br/>Your advertisement destination is Ajooba
                </Text>
                <Text style={styles.headtext}>
                Allow us to lend hands to help 
                    </Text>
                <Text style={styles.bullet}>
                -	To understand our customers is our first priority. <br/><br/>
                -	We provide our users the best version of what we develop.

                </Text>

                <Text style = {styles.headText}>Choose the best marketing strategy</Text>
                <Text style = {styles.bullets}>
                -	Our team of market analysts will help choose the best way<br/> to attract customers. <br/><br/>
                -	Be the best in the game with the perfect marketing strategy. 
                </Text>
            </View>
            )
    }
}

const styles = StyleSheet.create({
    img: {
        alignSelf : 'right',
        marginTop : 20,
        justifyContent : 'right',
        alignContent : 'right',
        height : 630,
        width : 300,
        marginLeft : 1230
    },
    view: {
        //marginTop : 100,
        backgroundColor : '#101010',
        marginBottom : 200
    },
    text : {
        color : '#DFD6D1',
        fontFamily : 'inter',
        fontSize : 40,
        marginLeft : 380,
        marginTop : -400,
        marginBottom : 400
    },
    headtext : {
        color : '#C0DCEC',
        fontFamily : 'sans-serif',
        fontSize : 30,
        fontWeight : 100,
        marginLeft : 40,
        marginTop : -300,
        marginBottom : 40 
    },
    bullet : {
        color : '#E57F84',
        fontFamily : 'sans-serif',
        fontSize : 20,
        fontWeight : 100,
        marginLeft : 30,
     //   marginTop : -300,
        marginBottom : 400  
    },
    headText : {
        color : '#C0DCEC',
        fontFamily : 'sans-serif',
        fontSize : 30,
        fontWeight : 100,
        marginLeft : 650,
        marginTop : -540,
        marginBottom : 40 
    },
    bullets : {
        color : '#E57F84',
        fontFamily : 'sans-serif',
        fontSize : 20,
        fontWeight : 100,
        marginLeft : 30,
        marginLeft : 650,
        marginBottom : 200,
    }
})