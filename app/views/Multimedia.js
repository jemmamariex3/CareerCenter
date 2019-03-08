/*
    --  Multimedia.js contains the template to display the specified playlist from the Career Center YouTube channel.
    --  An HTTP Request calls the YouTube API and pulls a JSON object containg the information about the PlayList.
    --  To see how data is structured and what information is available, the FULL URL can be entered in a browser.
    --  Search results are restricted to retrieve 20 vidoes, but can be changed in the baseURL where &maxResults=20.
    --  Timothy Spengler Febuary 7, 2019.
*/

import React, {Component} from 'react';
import {Card, CardTitle,}  from 'react-native-material-cards';
import { StyleSheet, ScrollView, PixelRatio, SafeAreaView, Image, View} from 'react-native';
import YouTube from 'react-native-youtube';
import axios from 'axios';
import {Header} from "../section/Header";
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
          <View style={styles.logoContainer}>
            <Header/>
          </View>
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

const styles = StyleSheet.create({
    container: {
        backgroundColor:'rgba(222,228,242,.30)',
    },

    Card: {
        margin: 40,
        marginBottom: -10,
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
    logoContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom:-20,
        zIndex: 5,
        height: 30
    },
    cclogo:{
        width: 250,
        height: 25,
    },
  })
