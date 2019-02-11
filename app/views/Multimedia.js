/* 
    --  Multimedia.js contains the template to display the specified playlist from the Career Center YouTube channel. 
    --  An HTTP Request calls the YouTube API and pulls a JSON object containg the information about the PlayList.
    --  To see how data is structured and what information is available, the FULL URL can be entered in a browser. 
    --  Search results are restricted to retrieve 20 vidoes, but can be changed in the baseURL where &maxResults=20.
    --  Timothy Spengler Febuary 7, 2019.
*/

import React, {Component} from 'react';
import {Card, CardTitle,}  from 'react-native-material-cards';
import { StyleSheet, ScrollView, PixelRatio, SafeAreaView, } from 'react-native';
import YouTube from 'react-native-youtube';
import axios from 'axios';
//import Icon from 'react-native-vector-icons/FontAwesome';

const apiKey = '&key=AIzaSyD9l7K52vdaFGn2MRf24TI_j4A0ZT-2WCU';  //change to CSUN apiKey
const playlistId = '&playlistId=PLloTSYt_DRvg8VaqjH_lBFfbpScf7BitM';
const baseURL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20';

export class Multimedia extends Component {
    static navigationOptions = {
        header: null
    };

  state = {
    isLooping: false,
    fullscreen: true,
    containerMounted: false,
    containerWidth: null,
    playListInfo: [],
  };

  parsePlayListInfo = (response) => {
    let i = 0;
    let totalVideos = parseInt(response.pageInfo.totalResults);
    let infoArray = [];
    while(i < totalVideos){
      infoArray[i] = {
        videoId: response.items[i].snippet.resourceId.videoId, 
        videoTitle: response.items[i].snippet.title,
      };
      console.log(infoArray[i].videoId);
      i++;
    }
    return infoArray;
  }

  loadYouTubePlaylist = () =>  {
    axios.get(baseURL+playlistId+apiKey)
          .then(res => {
              this.setState({
                playListInfo: this.parsePlayListInfo(res.data),
              });
          }).catch((error) => {
            console.error(error);
          });
  }

  componentDidMount() {
    this.loadYouTubePlaylist();
  } 
 
  render() {
    const { navigate } = this.props.navigation;

    return (
      <SafeAreaView>
        <ScrollView
          style={styles.container}
          onLayout={({
            nativeEvent: {
              layout: { width },
            },
          }) => {
            if (!this.state.containerMounted)
              this.setState({ containerMounted: true });
            if (this.state.containerWidth !== width)
              this.setState({ containerWidth: width });
          }}>
        {this.state.playListInfo.map((prop) => {
            return (
              <Card style={styles.Card} key={prop.videoId}>
                <YouTube 
                  ref={component => {
                    this._youTubeRef= component;
                  }} 
                  videoId={prop.videoId}
                  style={[
                        {
                          height: PixelRatio.roundToNearestPixel(
                          this.state.containerWidth / (16 / 9)
                          ),
                        },
                        styles.player,
                      ]}
                />
                <CardTitle 
                  title={prop.videoTitle}>
                </CardTitle>
              </Card>
              );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
 

//----------------------------------------------------------------------------------------------------------------------

/* // As of this time, this is the template that will display the rendered nultimedia videos.
// Please update this documentation section when there is new code added to this page.
// JT 1/15/19

//TODO: Render the multimedia videos from youtube
//TODO: use this template and adjust styling sizes.
//TODO: Update the documentation for this file.

import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, Text, View, ScrollView, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export class Multimedia extends Component<Props> {
    static navigationOptions = {
        header: null
    };
    render(){
        const { navigate } = this.props.navigation;

        return(
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.description}>
                    <View style={styles.textBox}>
                        <View style={styles.imgHolder}>
                            <Icon name="play-circle-o" size={50} color={'#ffffff'} style={styles.play}/>
                        </View>
                        <View style={styles.infoHolder}>
                            <View style={styles.eventInfo}>
                                <View style={styles.infoBox}>
                                    <Text style={styles.eventTitle}>Looking for a Job?</Text>
                                </View>
                                <View style={styles.infoBox}>
                                    <Text style={styles.eventDescription}>
                                        RSVP via Sunlink for workshop
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.shareIcon}>
                                <Image style={styles.share} source={require('../img/share.png')}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.textBox}>
                        <View style={styles.imgHolder}>
                            <Icon name="play-circle-o" size={50} color={'#ffffff'} style={styles.play}/>
                        </View>
                        <View style={styles.infoHolder}>
                            <View style={styles.eventInfo}>
                                <View style={styles.infoBox}>
                                    <Text style={styles.eventTitle}>Looking for a Job?</Text>
                                </View>
                                <View style={styles.infoBox}>
                                    <Text style={styles.eventDescription}>
                                        RSVP via Sunlink for workshop
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.shareIcon}>
                                <Image style={styles.share} source={require('../img/share.png')}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.textBox}>
                        <View style={styles.imgHolder}>
                            <Icon name="play-circle-o" size={50} color={'#ffffff'} style={styles.play}/>
                        </View>
                        <View style={styles.infoHolder}>
                            <View style={styles.eventInfo}>
                                <View style={styles.infoBox}>
                                    <Text style={styles.eventTitle}>Looking for a Job?</Text>
                                </View>
                                <View style={styles.infoBox}>
                                    <Text style={styles.eventDescription}>
                                        RSVP via Sunlink for workshop
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.shareIcon}>
                                <Image style={styles.share} source={require('../img/share.png')}/>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        position: 'relative',
        backgroundColor:'rgba(222,228,242,.30)'

    },
    description:{
        width: 400,
        height: 550,
        backgroundColor:'rgba(222,228,242,.30)'

    },
    date:{
        top: 165,
        justifyContent:'center',
        alignItems:'center',
    },
    dateMonth:{
        fontSize: 14
    },
    dateNum:{
        fontSize: 20

    },
    eventTitle:{
        fontSize: 20
    },
    eventInfo:{
        top: 165,

    },
    shareIcon:{
        top: 165,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        width: 40,
        height: 40,
    },
    share:{
        justifyContent:'center',
        width: '70%',
        height: '70%',
    },
    textBox:{
        width: 300,
        height:235,
        margin: 10,
        left: 30,
        borderRadius:20,
        backgroundColor: '#ffffff',
        shadowOpacity: 0.05,
        shadowRadius: 1,
        shadowOffset: {
            height: 6,
            width: 6
        },

    },
    infoHolder:{
        flexDirection:'row',
        justifyContent: 'space-around'
    },
    infoBox:{
        width: 180,
    },
    imgHolder:{
        position:'absolute',
        width: 300,
        height:160,
        borderRadius:20,
        backgroundColor: '#d9d9d9'
    },
    play:{
        position: 'absolute',
        left: '43%',
        top: '35%'
    }
}) */
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
  
    Card: {
      margin: 20,
      borderRadius: 10,
      shadowOpacity: 0.5,
      elevation: 3,
      shadowRadius: 2,
      shadowOffset: {
          height: 6,
          width: 1,
      },
    },
  
    player: {
      alignSelf: 'stretch',
      borderRadius: 10,
    },
  })