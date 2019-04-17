/*
    --  {initialArr.map((prop, key) => { } line 57 is the template that maps through initialArr
    --  (an array of objects that contain the properties needed for the buttons)
    --  Jemma Tiongson January 15, 2019.

    --  Utilizes axios using the same structure as Multimedia.js
    --  The baseURL refers to the hosted website that is to equal the officially deployed site.
    --  Helper functions getMonth, getDate, and getTime adjust the raw DateTime values to the
    --  appropriate display format.
    --  The styling has been reworked to offer a more responsive design to any screen size.
    --  Vicente Figueroa April 11, 2019.

    --  Integrates Event.js modal when selecting an event.
    --  Vicente Figueroa April 16, 2019.

    TODO: Refresh and update event list by command (such as pull down to refresh) or automatically
    TODO: Separate passed events from upcoming events, or have API do it, or manually delete passed events
            or have a focus set to next upcoming event (select calendar button and resets to next event)
*/

import React, {Component} from 'react';
import {Card}  from 'react-native-material-cards';
import {
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Image,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import axios from 'axios';
import {Header} from "../section/Header";
import Modal from "react-native-modal";
import {Event} from "../section/Event";

// TODO: Replace with official deployed events website
const baseURL = 'https://eventsplanner.azurewebsites.net/api/events/';

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
        width: '20%'
    },
    dateMon:{
        fontSize: 14,
        fontWeight: "700"
    },
    dateNum:{
        fontSize: 20,
        fontWeight: "700"
    },
    eventTitle:{
        color:'rgba(208,13,45,1)',
        fontSize: 20,
        fontWeight: "400"
    },
    eventInfo:{
        marginTop: 5,
        width: '65%'
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
        width: 180,
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

    //EVENTS MODAL STYLING

    //Height decreased to accommodate iPhone X
    eventContainer:{
        // alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "#ffffff",
        borderRadius: 18,
        borderColor: "#C0C0C0",
        // marginBottom: 30,
        width: '100%',
        height: '90%',
        overflow: 'hidden'
    },
    exit:{
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'white',
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        width: '100%',
        padding: 20,
        bottom: 0
    },
    scrollContainer:{
        margin: 20
    },
});

export class Events extends Component<props> {
    static navigationOptions = {
        header: null
    };
    _showModal = () => this.setState({ isModalVisible: true });
    _hideModal = () => this.setState({ isModalVisible: false });

    state = {
        isModalVisible: false,
        selectedEvent: "https://busecon.csun.edu/sites/default/files/Resu-MakeOver_Flyer_Website.png",
        isLooping: false,
        fullscreen: true,
        containerMounted: false,
        containerWidth: null,
        eventInfo: [],
    };

    parseEventInfo = (response) => {
        let i = 0;
        let totalEvents = response.length;
        let infoArray = [];
        while(i < totalEvents){
                infoArray[i] = {
                    id: response[i].id,
                    name: response[i].name,
                    desc: response[i].description,
                    startDate: response[i].startDate,
                    endDate: response[i].endDate,
                    startTime: response[i].startDate,
                    endTime: response[i].endDate,
                    location: response[i].location !== "" ? response[i].location : "TBD",
                    img: response[i].thumbUrl !== "" ? response[i].thumbUrl : "https://busecon.csun.edu/sites/default/files/Resu-MakeOver_Flyer_Website.png",
                    flyer: response[i].imageUrl !== "" ? response[i].imageUrl : "https://busecon.csun.edu/sites/default/files/Resu-MakeOver_Flyer_Website.png",
                    rsvp: 'rsvp_link'
                };
            i++;
        }

        infoArray.sort((a,b) => {
            return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
        });
        return infoArray;
    };

    loadEventList = () =>  {
        axios.get(baseURL)
            .then(res => {
                this.setState({
                    eventInfo: this.parseEventInfo(res.data),
                });
            }).catch((error) => {
            console.error(error);
        });
    };

    getMonth = (date) =>  {
        const newDate = new Date(date);
        return newDate.toLocaleString('en-us', { month: 'short' });
    };

    getDate = (date) =>  {
        const newDate = new Date(date);
        return newDate.toLocaleString('en-us', { day: 'numeric' });
    };

    getTime = (start, end) =>  {
        let time;
        const startDate = new Date(start);
        const endDate = new Date(end);
        time = startDate.toLocaleTimeString('en-us',
            { hour12: true , hour: 'numeric', minute: 'numeric' });
        time += " - ";
        time += endDate.toLocaleTimeString('en-us',
            { hour12: true , hour: 'numeric', minute: 'numeric' });
        return time;
    };

    componentDidMount() {
        this.loadEventList();
    }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.logoContainer}>
                    <Header/>
                </View>
                <ScrollView style={styles.container}>
                    {this.state.eventInfo.map((prop) => {
                        return (
                            <Card style={styles.Card} key={prop.id}>
                                <TouchableOpacity
                                    onPress={ () => this.setState({
                                        isModalVisible: true,
                                        selectedEvent: prop
                                    })}
                                    style={styles.imgHolder}>
                                    <Image style={styles.imageDisplay} source={{uri: prop.img }}/>
                                </TouchableOpacity>
                                <View style={styles.infoHolder}>
                                    <View style={styles.date}>
                                        <Text style={styles.dateMon}>{this.getMonth(prop.startDate)}</Text>
                                        <Text style={styles.dateNum}>{this.getDate(prop.startDate)}</Text>
                                    </View>
                                    <View style={styles.eventInfo}>
                                        <View style={styles.infoBox}>
                                            <Text style={styles.eventTitle}>{prop.name}</Text>
                                        </View>
                                        <View style={styles.infoBox}>
                                            <Text style={styles.eventDescription}>{prop.location}</Text>
                                            <Text style={styles.eventDescription}>{this.getTime(prop.startTime,prop.endTime)}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity style={styles.shareIcon}>
                                        <Image style={styles.share} source={require('../img/share.png')}/>
                                    </TouchableOpacity>
                                </View>
                            </Card>
                        );
                    })}
                </ScrollView>
                <Modal
                    isVisible={this.state.isModalVisible}
                    // animationType = "fade"
                    onBackdropPress={() => this._hideModal()}
                    // backdropOpacity={.50}
                    // animationInTiming={200}
                    // animationOutTiming={200}
                >
                    <SafeAreaView style={styles.eventContainer}>
                        <Event
                            name={this.state.selectedEvent.name}
                            desc={this.state.selectedEvent.desc}
                            startDate={this.state.selectedEvent.startDate}
                            endDate={this.state.selectedEvent.endDate}
                            startTime={this.state.selectedEvent.startTime}
                            endTime={this.state.selectedEvent.endTime}
                            location={this.state.selectedEvent.location}
                            flyer={this.state.selectedEvent.flyer}
                            rsvp={this.state.selectedEvent.rsvp}
                        />
                        <TouchableOpacity
                            onPress={() => this._hideModal()}
                            style={styles.exit}>
                                <Text style={styles.eventTitle}>Return To Event List</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                </Modal>
            </SafeAreaView>
        );
    }
}
