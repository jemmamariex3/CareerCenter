import React, {Fragment, Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image} from 'react-native'

import Modal from "react-native-modal";

export class Pin extends Component {
    state = {
        visible: false
    };

    openModal = () => this.setState({ modalVisible: true });
    closeModal = () => this.setState({ modalVisible: false });

    static navigationOptions = {
        header:null
    };
    render() {
        return (
            <Fragment>
                <Modal
                    isVisible={this.state.visible}
                    backdropOpacity={0.1}
                    swipeDirection="left"
                    onSwipe={this.closeModal}
                    onBackdropPress={this.closeModal}
                >
                    <SafeAreaView style={styles.container}>
                        <Text style={styles.title}>Location</Text>
                        <Text>Bayramian Hall 413</Text>
                        <Text>18111 Nordhoff St. </Text>
                        <Text>Northridge, CA 91330-8241</Text>
                        <Text>Telephone: (818) 677-287</Text>

                        <View style={styles.spacer}/>

                        <Text style={styles.title}>Hours</Text>
                        <Text>Monday-Thursday</Text>
                        <Text>9:00 am - 5:00 pm</Text>
                        <Text>Friday:</Text>
                        <Text>9:00 am - 4:00 pm</Text>

                        <View style={styles.spacer}/>

                        <Text style={styles.title}>Closed</Text>
                        <Text>Nov 12th</Text>
                        <Text>Campus Closed</Text>

                        <View style={styles.spacer}/>

                        <Text>Nov 14th</Text>
                        <Text>PLCSE</Text>

                        <View style={styles.spacer}/>
                        <Text>Nov 14th</Text>
                        <Text>Thanksgiving</Text>

                        <View style={styles.spacer}/>
                        <Text style={styles.title}>Fall Drop-Ins</Text>
                        <Text>Monday - Thursday:</Text>
                        <Text>1:00pm - 3:45pm</Text>
                        <Text>Friday:</Text>
                        <Text>9:00am - 10:45am</Text>

                        <View style={styles.spacer}/>
                        <Text>*Please call us for further information about our hours.*</Text>
                    </SafeAreaView>
                </Modal>
                <TouchableOpacity onPress={this.openModal}><Image style={styles.pin} source={require("../img/pin.png")}/></TouchableOpacity>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: '#ffffff'
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DCDCDC",
        borderRadius: 4,
        borderColor: "#C0C0C0",
        borderWidth: 2,
        marginHorizontal: 40,
        marginVertical: 80
    },
    spacer:{
        marginBottom: 20
    },
    title:{
        fontWeight: 'bold',
        color:'#5b4d90',
        textTransform: 'uppercase',
        fontSize:14
    },
    Text:{
        color: '#E84C37'
    },
    pin:{
        width: 25,
        height: 25
    },
});
