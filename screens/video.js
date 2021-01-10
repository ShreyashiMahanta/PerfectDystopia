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
import VideoComponent from './toggleTheme';

export default class VideoContent extends React.Component{
    render(){
        return(
            <View style={styles.view}>
                <VideoComponent
                style = {{
                    marginLeft : 30,
                    marginTop : 30
                }}
                />
                
                <Text style = {styles.header}>Show the world your vision</Text> 
                <Text style = {styles.header2}>through our videos</Text>
                
                <Text style = {styles.head}>Videos speak louder than words -  </Text>
                
               <Text style = {styles.txt}>The best visual content creating app in the game is EDICIÓN.</Text> 
               <Text style = {styles.text}> Why? <br/>
                Because it not only provides excellent service but also comes equipped with our very own virtual guide,Guia(Ge-ya),
                created by using Artificial Intelligence.Guia makes your work easier and increases productivity to get the best result.
                So, take the best decision and download EDICIÓN!
               </Text>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view : {
        backgroundColor : '#303437',
        marginTop : 50,
        borderRadius : 10,
        borderRadius : 20
    },
    header : {
        fontSize: 50,
        alignSelf : 'right',
      //marginLeft : 700,
      fontFamily : 'sans-serif',
      color : '#AE8B70',
      alignSelf : 'right',
      marginTop : -310,
      marginLeft : 800
    },
    header2 : {
      fontSize: 50,
      alignSelf : 'right',
      marginLeft : 700,
      fontFamily : 'Helvetica',
      color : '#AE8B70',
      alignSelf : 'right',
      marginLeft : 890
    },
    text : {
        fontSize: 25,   
        alignSelf : 'right',
       fontFamily : 'sans-serif',
       marginTop : 100,
       color : '#D9CED6',
       marginLeft : 50,
       margin : 10,
       marginBottom : 100
    },
    img : {
        width : 300,
        height : 200,
        alignSelf : 'right',
        borderRadius :  15
    },
    txt : {
          fontSize: 25,   
            alignSelf : 'right',
           fontFamily : 'sans-serif',
         //  marginTop : 100,
           color : '#D9CED6',
           marginLeft : 700,
           margin : 10,
           
    },
    head : {
        color : '#D9CED6',
        fontFamily : 'sans-serif',
        fontSize : 30,
        fontWeight : 100,
        marginLeft : 700,
        marginTop : 80,
    }
})