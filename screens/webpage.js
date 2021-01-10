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
//import {setCustomText, setCustomTextInput} from 'react-native-global-props';
import VideoContent from './video'
 import DigitalAds from './digitalAds'
 import ContactUs from './contactUs'

export default class HomePage extends React.Component{
  
    render(){
        return(
        <View style={styles.container}>
          <ScrollView style={styles.scroll}>
        <Image source={require("../assets/perfect.jpg")} style={styles.image}/>
         <Text style={styles.header}>Perfect Dystopia</Text>      
         <Text style ={styles.text}>A game engine to embellish your life with games.
         So are you ready?</Text>
      
       <Text style={styles.txt}>About perfect dystopia</Text>

       <Image source={require("../assets/cars.jpg")} style={styles.img}/>

       <Text style={styles.tea}>This game engine helps you to create games for mobile devices and PCs. It will<br/> help users to 
      develop complex games easily and perfectly in different operating systems <br/>like, Mac OS , Windows,Linux and in IOS and android.  
      It is a great video game creating tool <br/> which despite having a huge base with various options,
         allows users to develop  games <br/>in a simple and a perfect way. one unique point of this game engine is that
       it includes a <br/>virtual guide,Guia(Ge-ya) that will give the user a summary of what exactly it does and <br/>
       will take the user to the world of creating games of their choice, where there will be various<br/> operational 
       programs  and the guide will instruct the user all <br/>about  the  variousfunctions of the game engine. <br/><br/>
       • It starts by giving a demonstration and then it allows the user to develop games under <br/> the guidance of the guide <br/><br/>
       • Do’s and don’ts are mentioned in the ABOUT of the game engine.<br/> <br/>
       • The game engine gets updated automatically after every one month and after <br/>
       getting updated the user will get a notification regarding the updation of the game engine.</Text>
        
      <Text style={styles.second}> Our projects</Text>
        <Image
        source={require("../assets/project.png")}
        style = {styles.project}
        />
        <View style={styles.view}>
        <Text style={styles.team}>MINE ASTRA is a video game based on asteroid mining. It is an online multiplayer game
         created with the help of Perfect Dystopia graphics engine.Players get to choose their preffered
         character who has a superpower and an amazing weapon and players also
         get to choose a spaceship of their choice.<br/>
        Players go on a journey in search for asteroids where they can mine valuable minerals <br/> The player who 
        mines the most valuable mineral wins the game.But it is not as easy as you think!<br/>Other players can STEAL 
         minerals from you and can even DESTROY your spaceship or your weapon or harm you!!.<br/> 
         So you have to be very careful.The winner unlocks bonuses and gets multiple benefits.The default character
         is Helvexa and the default spaceship is Comerceuex 3.
         </Text>
        </View>

        <Text style = {styles.heading}>Our other ventures</Text>
        <VideoContent/>
        <DigitalAds/>
        <ContactUs/>
        </ScrollView>
       </View>
            );
        }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#170B3B',
      alignItems: 'center',
      justifyContent: 'center',
      //width : 1500,
      height : 4700
    },
    image : {
      justifyContent: "top",
     // paddingLeft : 6,
      height : 900,
      opacity : '100%',
      marginTop :-20,
      width : 664,
      marginBottom : 30,
      justifyContent : 'left',
      alignContent : 'left',
      marginRight : 880
    },
    header : {
        fontSize : 80,
        fontFamily  : 'Helvetica',
        color : '#F20775', 
        fontWeight : 'bold',
        alignContent : 'right',
        alignItems : 'right',
        marginTop : -700,
        alignSelf : 'right',
        marginLeft : 700,
        fontVariant : 'oldstyle-nums',
        marginRight : -80
    },
    scroll :{
      flex : 1,
    },
    img : {
      height : 500,
      opacity : '100%',
      marginTop :20,
      width : 504,
      marginBottom : 30,
      justifyContent : 'right',
      alignContent : 'right',
      marginLeft : 950
    },
    txt : {
      fontSize : 40,
      fontWeight : 'bold',
      alignContent : 'left',
      alignItems : 'left',
      marginTop : 600,
      alignSelf : 'left',
      marginRight : 700,
      fontVariant : 'oldstyle-nums',
      color : '#EFDCF9',
      marginLeft : 30,
      fontFamily : 'Helvetica'
    },

    text : {
      fontSize : 20,
      color : '#F6EEF0',
      alignSelf : 'right',
      marginLeft : 700,
      fontFamily : 'Inter'
    },
    tea : {
      fontSize : 20,
      color : '#F20775',
      alignSelf : 'left',
      marginRight : 420,
      fontFamily : 'Inter',
      marginTop : -480,
      marginLeft : 20,
      padding : 20
    },
    second : {
      fontSize : 60,
      color : '#b5053b',
      alignSelf : 'left',
      marginRight : 420,
      fontFamily : 'Inter',
      marginTop : 300,
      marginLeft : 20
    },
    project : {
      alignSelf : 'right',
      marginTop : 20,
      justifyContent : 'right',
      alignContent : 'right',
      height : 530,
      width : 300,
      marginLeft : 1150,
      opacity : '110%'
    },
    view : {
      backgroundColor : '#6A1D2F',
      width : '65%',
      height : 350,
     alignContent : 'left',
     marginTop : -480,
      marginLeft : 30,
      borderRadius : 10,
      opacity : '70%',
      marginBottom: 10,
  //  flex : 5   
    },
    team : {
      alignItems : 'flex-end',
      fontSize : 20,
      color : '#FFFFFF',
     justifyContent : 'center',
      fontFamily : 'Inter',
      marginTop : 30,
      marginLeft : 20,
      margin : 10,
    },
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    heading : {
      fontSize : 60,
      fontWeight : 'bold',
      fontFamily : 'Arial',
      justifyContent : 'center',
      alignSelf : 'center',
      color : '#FFFFFF',
      marginTop : 200
    }
  });