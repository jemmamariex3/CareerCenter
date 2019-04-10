
import React, {Component} from 'react';
import {TouchableOpacity, PixelRatio,StyleSheet, Text, SafeAreaView,View, Image, Button, ScrollView, Dimensions} from 'react-native';
import {MainLogo} from "../img/career_center_logo.png";
import Modal from 'react-native-modal';
import {Pin} from "../section/Pin";
import {Help} from "../section/Help";
import iPhoneSize from '../src/helper/utils'

const {width} = Dimensions.get('window').width * PixelRatio.get();
const {height} = Dimensions.get("window").height * PixelRatio.get();

const size = iPhoneSize();
let logoWidth = 220;
let logoHeight = 22;

if(size === 'medium'){
    logoWidth = 260;
    logoHeight = 27;
}else if(size === 'large'){
    logoWidth = 300;
    logoHeight = 30;
}

export class Header extends Component<Props> {
    static navigationOptions = {
        header:null
    };

    constructor(props) {
        super(props);
        this.state = {
            isModalVisible1: false,
            isModalVisible2: false
        }
        this.toggleModal2 = this.toggleModal2.bind(this)
    }
    _showModal1 = () => this.setState({ isModalVisible1: true })
    _hideModal1 = () => this.setState({ isModalVisible1: false })

    _showModal2 = () => this.setState({ isModalVisible2: true })

    toggleModal2(){
        this.setState({
            isModalVisible2: false
        })
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={this._showModal1}><Image style={styles.pin} source={require("../img/pin.png")}/></TouchableOpacity>
                    <Image style={styles.cclogo} source={require('../img/CC_logo.png')}/>
                    <TouchableOpacity onPress={this._showModal2}><Image style={styles.help} source={require("../img/help.png")}/></TouchableOpacity>
                </View>
                <Modal
                    isVisible={this.state.isModalVisible1}
                    animationType = "fade"
                    onBackdropPress={() => this.setState({ isVisible1: false })}
                    backdropOpacity={.50}
                    animationInTiming={200}
                    animationOutTiming={200}
                >
                    <SafeAreaView style={styles.pinContainer}>
                        <ScrollView style={styles.scrollContainer}>
                            <Pin/>
                        </ScrollView>
                        <Button
                            title="Return to Menu"
                            onPress={this._hideModal1}
                            style={styles.exit}
                        />
                    </SafeAreaView>

                </Modal>

                <Modal
                    isVisible={this.state.isModalVisible2}
                    animationType = "fade"
                    onBackdropPress={() => this.setState({ isVisible2: false })}
                    backdropOpacity={.50}
                    animationInTiming={200}
                    animationOutTiming={200}
                >
                    <SafeAreaView style={styles.helpContainer}>
                        <Help toggleModal2 = {this.toggleModal2}/>
                    </SafeAreaView>
                </Modal>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft: 10,
        marginRight: 10,
        backgroundColor:'rgba(222,228,242,.30)',
    },
    cclogo:{
        width: logoWidth,
        height: logoHeight,
    },
    header:{
        display:'flex',
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        margin: 'auto'  
    },

    // HELP MODAL STYLING
    help:{
        width: 23,
        height: 23,
        marginLeft: 10
    },
    helpContainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DCDCDC",
        borderColor: "#C0C0C0",
        borderWidth: 2,
        width: width,
        height: height,
    },
    //PIN MODAL STYLING
    pinContainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DCDCDC",
        borderRadius: 18,
        borderColor: "#C0C0C0",
        borderWidth: 2,
        marginHorizontal: 15,
        marginVertical: 10,
        width: 310,
        height:480,
    },
    pin:{
        width: 25,
        height: 25,
        marginRight: 10
    },
    scrollContainer:{
        margin: 20
    },
    exit:{
        marginLeft: 50,
        padding: 0,
        width: 20,
        height: 20
    },

});
