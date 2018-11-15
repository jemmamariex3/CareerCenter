// import React, {Component} from 'react'
// import {
//     Text,
//     View,
//     StyleSheet,
//     TextInput,
//     Button,
//     FlatList,
//     Image,
//     TouchableNativeFeedback,
//     ScrollView
// } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome'
// import AWS from 'aws-sdk/dist/aws-sdk-react-native'
// // Set AWS region and cognito creds
// AWS.config.region = 'us-east-1'
// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//     IdentityPoolId: 'us-east-1:136476b1-7160-47d0-b304-ec3ddfcdb3d7',
// })
//
// var lexRunTime = new AWS.LexRuntime()
// var lexUserId = 'cinthy' + Date.now()
// var sessionAttributes = {}
//
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     messages: {
//         justifyContent: 'flex-end',
//         marginTop: 60,
//         marginBottom: 10
//
//     },
//     cinthyMessages: {
//         color: 'black',
//         backgroundColor: 'white',
//         padding: 10,
//         borderBottomLeftRadius: 0,
//         borderBottomRightRadius: 20,
//         borderTopLeftRadius: 20,
//         marginBottom: 0,
//         borderTopRightRadius: 20,
//         alignSelf: 'flex-start',
//         bottom: 23,
//         textAlign: 'left',
//         width: '75%'
//     },
//
//     userMessages: {
//         backgroundColor: '#40AD4D',
//         color: 'white',
//         padding: 10,
//         marginBottom: 10,
//         marginRight: 10,
//         borderBottomLeftRadius: 20,
//         borderBottomRightRadius: 0,
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//         width: '65%',
//         alignSelf: 'flex-end',
//         textAlign: 'left'
//     },
//     backgroundImage: {
//       flex: 1,
//       resizeMode: 'stretch',
//       justifyContent: 'flex-end',
//       width: '100%'
//     },
//     textInput: {
//       flex: 2,
//       paddingLeft: 15
//     },
//     cinthyCircle: {
//       alignSelf: 'flex-end',
//       marginRight: 0,
//       marginBottom: 0,
//     },
//     responseContainer : {
//       flexDirection: 'row',
//       marginTop: 20,
//       marginBottom: 0,
//     },
//     inputContainer: {
//       flexDirection: 'row',
//       backgroundColor: '#EEEFFA',
//     },
//     iconButton: {
//       flex: 1,
//     },
//     onlyButtons: {
//         margin: 2,
//         borderRadius: 5,
//         backgroundColor: 'white',
//         padding: 10,
//
//     },
//     scrollView: {
//         display: 'flex'
//     },
//     cardRow: {
//         display:'flex',
//         flexDirection: 'row',
//         justifyContent: 'flex-start',
//         left: 60,
//         marginBottom: 10,
//         marginTop: -10,
//     },
//     cardContainer: {
//         display: 'flex',
//         backgroundColor: 'white',
//         borderRadius: 10,
//         width:200,
//         justifyContent: 'flex-start'
//     },
//     card : {
//         height: 125,
//         width: 200,
//         marginRight: 10,
//         borderRadius: 10,
//         marginBottom: 0,
//     },
//     divider: {
//         width: 200,
//         marginTop: -5,
//         borderBottomColor: 'grey',
//         borderBottomWidth: 1,
//     },
//     cardTitle: {
//         color: 'black',
//         fontWeight: 'bold',
//         alignSelf: 'center'
//     },
//     cardSubtitle: {
//         fontSize: 12,
//         marginLeft: 8,
//         padding: 3,
//     }
// })
//
//
//
// export class Cinthy extends Component {
//     constructor(props) {
//         super(props)
//
//         this.state = {
//             userInput: '',
//             messages: [],
//             inputEnabled: true,
//         }
//     }
//
//
//
//
//     // Sends Text to the lex runtime
//     handleTextSubmit() {
//         console.log('Text Submitted')
//         let inputText = this.state.userInput.trim()
//         if (inputText !== '')
//           this.showRequest(inputText)
//
//
//     }
//
//     // Populates screen with user inputted message
//     showRequest(inputText) {
//         // Add text input to messages in state
//         var oldMessages = Object.assign([], this.state.messages)
//         oldMessages.push({from: 'user', msg: inputText, responseCard: null})
//         this.setState({
//             messages: oldMessages,
//             userInput: '',
//             inputEnabled: false
//         })
//         this.sendToLex(inputText)
//
//     }
//
//     // Responsible for sending message to lex
//     sendToLex(message) {
//         var params = {
//             botAlias: '$LATEST',
//             botName: 'Cinthy',
//             inputText: message,
//             userId: lexUserId,
//             sessionAttributes: sessionAttributes
//         }
//
//         lexRunTime.postText(params, (err, data) => {
//             if(err) {
//                 console.log(err, err.stack)
//                 // TODO SHOW ERROR ON MESSAGES
//             }
//             if (data) {
//                 sessionAttributes = data.sessionAttributes
//                 this.showResponse(data)
//             }
//         })
//     }
//
//     showResponse(lexResponse) {
//         let lexMessage = lexResponse.message
//         var oldMessages = Object.assign([], this.state.messages)
//         if (lexResponse.responseCard){
//             var { genericAttachments: responseCard } = lexResponse.responseCard
//         }
//         oldMessages[oldMessages.length - 1].responseCard = null
//         oldMessages.push({from: 'cinthy', msg: lexMessage, responseCard})
//         this.setState({
//             messages: oldMessages,
//             inputEnabled: true
//         })
//     }
//
//     renderTextItem(item) {
//         var style,
//             src,
//             imgElement,
//             responseStyle
//         if (item.from === 'cinthy') {
//             style = styles.cinthyMessages
//             // src = require('../img/Self-Exploration.png')
//             imgElement = <Image source={require('../img/cinthy-circle.png')} style={styles.cinthyCircle}/>
//             responseStyle = styles.responseContainer
//         } else {
//             style = styles.userMessages
//             imgElement = null
//             responseStyle = {}
//         }
//         return (
//             <View>
//                 <View style={responseStyle}>
//                     {imgElement}<Text style={style}>{item.msg}</Text>
//                 </View>
//                 {item.responseCard ? this.createResponseCards(item.responseCard): null }
//             </View>
//         )
//     }
//
//     // Responsible for creating response cards with images, buttons, and links
//     createResponseCards(responseCard) {
//         // MAJORITY OF THE CASE
//         if (responseCard.length === 1) {
//             // just set responseCard to its first element
//             [responseCard] = responseCard
//             // check if responseCard contains an image, link, buttons and
//             // whatever combinations of them
//             let buttons
//             let imageUrl
//             let linkUrl
//             let scrollData
//             // ONLY BUTTONS, NO LINK OR IMAGE
//             if (responseCard.buttons && (!responseCard.imageUrl &&
//                 !responseCard.attachmentLinkUrl)) {
//                 scrollData = responseCard.buttons.map((button, i) => (
//                     <TouchableNativeFeedback key={i} onPress={() => {
//                         // remove button options from last response
//                         // then send response back to lex
//                         let messages = this.state.messages
//                         this.setState({
//                             messages
//                         })
//                         this.sendToLex(button.value)
//                     }}>
//                         <View  style={styles.onlyButtons}>
//                             <Text>{button.text}</Text>
//                         </View>
//                     </TouchableNativeFeedback>
//                 ))
//
//                 return (
//                     <ScrollView contentContainerStyle={styles.scrollView} horizontal={true}>
//                         {scrollData}
//                     </ScrollView>
//                 )
//                 // NO BUTTONS & IMAGE URL
//             } else if (!responseCard.buttons && responseCard.imageUrl) {
//                 console.log('No buttons and one image url!!!')
//                 return this.createCard(responseCard)
//             }
//
//         } else {
//             let scrollData = []
//             responseCard.forEach((data) => scrollData.push(this.createCard(data)))
//             return (
//                     <ScrollView contentContainerStyle={styles.scrollView} horizontal={true}>
//                         {scrollData}
//                     </ScrollView>
//                 )
//         }
//     }
//
//     createCard(responseCard) {
//         let infoOrButton
//         if (!responseCard.buttons) {
//             infoOrButton = (
//                 <Text style={styles.cardSubtitle}>{responseCard.subTitle}</Text>
//             )
//         } else {
//             infoOrButton = (
//                 <Button
//                     title={responseCard.buttons[0].text}
//                     onPress={() => console.log(responseCard.buttons[0].value)}
//                 />
//             )
//         }
//         return (
//             <View style={styles.cardRow}>
//                 <View style={styles.cardContainer}>
//                     <Image
//                         style={styles.card}
//                         source={{uri: responseCard.imageUrl}}
//                     />
//                     <Text style={styles.divider}></Text>
//                     <Text style={styles.cardTitle}>{responseCard.title}</Text>
//                     <Text style={styles.divider}></Text>
//                     {infoOrButton}
//                 </View>
//            </View>
//         )
//     }
//
//
//     render(){
//         return(
//               <Image source={require('../img/cinthy-circle.png')}
//                     style={styles.backgroundImage}>
//                 <View style={styles.messages}>
//                   <FlatList
//                     data={this.state.messages}
//                     renderItem={({ item }) => this.renderTextItem(item)}
//                     keyExtractor={(item, index) => index}
//                     extraData={this.state.messages}
//                   />
//                 </View>
//                 <View style={styles.inputContainer}>
//                   <TextInput
//                         onChangeText={(text) => this.setState({userInput: text})}
//                         value={this.state.userInput}
//                         style={styles.textInput}
//                         editable={this.state.inputEnabled}
//                         placeholder={'Type here to talk!'}
//                         autoFocus={true}
//                         onSubmitEditing={this.handleTextSubmit.bind(this)}
//                     />
//                     <Icon.Button name="send"
//                       backgroundColor="#EEEFFA"
//                       color="#40AD4D"
//                       size={25}
//                       onPress={this.handleTextSubmit.bind(this)}
//                       style={styles.iconButton}
//                     />
//                 </View>
//               </Image>
//         )
//     }
// }
//
//
// /*
//
//
// */
import React, {Component} from 'react';
import {Text,StyleSheet} from 'react-native'

export class Cinthy extends Component {
    static navigationOptions = {
        header:null
    };
    render() {
        return (
            <Text style={styles.cinthy}> Cinthy</Text>
        );
    }
}
const styles = StyleSheet.create({
   cinthy:{
       marginTop: 300,
       textAlign:'center'
   }
});
