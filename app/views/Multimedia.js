/*
    --  Events.js contains the template to display the specified playlist from the Career Center YouTube channel.
    --  An HTTP Request calls the YouTube API and pulls a JSON object containing the information about the Playlist.
    --  To see how data is structured and what information is available, the FULL URL can be entered in a browser.
    --  Search results are restricted to retrieve 20 videos, but can be changed in the baseURL where &maxResults=20.
    --  Timothy Spengler February 7, 2019.

    --  Readjusted styling to match the Events.js layout, defined by the prototype designed by AJ.
    --  Removes some unused screen resizing values to set the new responsive design.
    --  Vicente Figueroa April 11, 2019.
*/

import React, {Component} from 'react';
import {Card}  from 'react-native-material-cards';
import {StyleSheet, ScrollView, SafeAreaView, Image, View, TouchableOpacity, Text} from 'react-native';
import YouTube from 'react-native-youtube';
import axios from 'axios';
import {Header} from "../section/Header";
//import Icon from 'react-native-vector-icons/FontAwesome';

// const apiKey = '&key=#';  // TODO: change to CSUN CC apiKey
const playlistId = '&playlistId=PLloTSYt_DRvg8VaqjH_lBFfbpScf7BitM';
const baseURL = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20';

const styles = StyleSheet.create({
    container: {
        backgroundColor:'rgba(222,228,242,.30)',
        marginBottom: 60
    },

    logoContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
        zIndex: 5,
        height: 30
    },
    cclogo:{
        width: 250,
        height: 25,
    },
    description:{
        backgroundColor:'rgba(222,228,242,.30)'
    },
    date:{
        marginTop: 2,
        paddingLeft: 15,
        paddingRight: 10,
        justifyContent:'center',
        alignItems:'center',
    },
    dateMon:{
        fontSize: 14,
        fontWeight: "700"
    },
    dateNum:{
        fontSize: 20,
        fontWeight: "700"
    },
    videoTitle:{
        padding: 20,
        color:'rgba(208,13,45,1)',
        fontSize: 25,
        fontWeight: "400"
    },
    player: {
        alignSelf: 'stretch',
        height: '100%'
    },
    shareIcon:{
        justifyContent:'center',
        padding: 6,
        top: 15,
        height: 40,
        width: '15%'
    },
    share:{
        justifyContent:'center',
        height: 25,
        width: 25,
        overflow: 'visible'
    },
    Card:{
        marginHorizontal: 30,
        marginVertical: 10,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        shadowOpacity: 0.05,
        shadowRadius: 1,
        shadowOffset: {
            height: 6,
            width: 6
        },
    },
    infoHolder:{
        height: 70,
        width: '100%',
        flexDirection:'row',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    infoBox:{
        width: '85%',
    },
    imgHolder:{
        width: '100%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        height: 200,
        overflow: 'hidden',
    },
    imageDisplay:{
        position: 'absolute',
        width: '100%',
        height: '125%',
    },
});

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
    };

    loadYouTubePlaylist = () =>  {
        axios.get(baseURL+playlistId+apiKey)
            .then(res => {
                this.setState({
                    playListInfo: this.parsePlayListInfo(res.data),
                });
            }).catch((error) => {
            console.error(error);
        });
    };

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
                <ScrollView style={styles.container}>
                    {this.state.playListInfo.map((prop) => {
                        return (
                            <Card style={styles.Card} key={prop.videoId}>
                                <View style={styles.imgHolder}>
                                    <YouTube
                                        ref={component => {
                                            this._youTubeRef= component;
                                        }}
                                        videoId={prop.videoId}
                                        style={styles.player}
                                    />
                                </View>
                                <View style={styles.infoHolder}>
                                    <View style={styles.infoBox}>
                                        <Text style={styles.videoTitle}>{prop.videoTitle}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.shareIcon}>
                                        <Image style={styles.share} source={require('../img/share.png')}/>
                                    </TouchableOpacity>
                                </View>
                            </Card>
                        );
                    })}
                </ScrollView>
            </SafeAreaView>
        );
    }
}
