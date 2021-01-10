import * as React from 'react';
import { StyleSheet, Text, View, Dimensions,Animated } from 'react-native';
import { Video } from 'expo';
import {Component} from 'react';
import ReactPlayer from 'react-player';
export default class VideoComponent extends Component {


    render () {
        return(
          <View>
       <ReactPlayer
       url = 'https://www.youtube.com/watch?v=wvPSsImDtiU'
       controls
       style={styles.backgroundVideo}
       />
       </View>
      )
  }
  
}

// Later on in your styles..
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    marginTop: 20,
    marginLeft: 30,
    bottom: 0,
    right: 0,
  },
});
