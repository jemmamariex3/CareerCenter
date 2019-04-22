# MOBILE_APP_STRUCTURE
<ins>CAREER CENTER MOBILE APP -- ORGANIZATION</ins>



CareerCenter

  |--android
  |--app
  |--data
  |--img
  |--section
    |--skillsContent
    |--Event.js
    |--LogoTitle.js
    |--StackNav.js
    |--TabNav.js
  |--views
    |--Cinthy.js
    |--Events.js
    |--Help.js
    |--Multimeda.js
    |--Pin.js
    |--Users.js
  |--ios
  |--App.js
  |--index.js

We will work directly with the app directory.

Any small components that will be reused goes into the <ins>section directory</ins>

Ex: child components, logos, modals, etc

 Any files that is a page or a "stand alone" goes into the <ins>view directory</ins>

Ex: the tab navigation files

Graphics and assets goes in the<ins> img directory</ins>. Try to organize by creating subdirectories for specific files

Ex: Cinthy -- contains the chatbot assets

iOS and Android directories contain the native files for Xcode and Android Studio

Navigation related changes or additions belong in App.js

Entry point is in index.js



<ins>SPLASH SCREEN</ins>

This feature is done in Xcode. (open the project in xcode in order to make any changes)

Tutorial: [https://medium.com/handlebar-labs/how-to-add-a-splash-screen-to-a-react-native-app-ios-and-android-30a3cec835ae](https://medium.com/handlebar-labs/how-to-add-a-splash-screen-to-a-react-native-app-ios-and-android-30a3cec835ae)



<ins>CAREER CENTER MOBILE APP -- DOCUMENTATION</ins>

This documentation will cover all aspects of the career center mobile app. The app runs on react-native-cli.



<ins>**INSTALLATION**</ins>

Use [Homebrew]([http://brew.sh/](http://brew.sh/)) to install node and watchman.

brew install node

brew install watchman 



Use the package manager [npm]([https://docs.npmjs.com/downloading-and-installing-packages-locally](https://docs.npmjs.com/downloading-and-installing-packages-locally)) to install react-native-cli

npm install -g react-native-cli



Git clone this repo into your local terminal (Better if in the IDE)

git clone [https://github.com/jemmamariex3/CareerCenter.git](https://github.com/jemmamariex3/CareerCenter.git)



Enter the directory using basic bash commands

cd CareerCenter 



Install all dependencies

npm install



**START UP**

Once in the main directory run the following in the terminal

npm start 



In another terminal tab run the following for iOS - this will open the [iOS simulator]([https://facebook.github.io/react-native/docs/running-on-simulator-ios](https://facebook.github.io/react-native/docs/running-on-simulator-ios)) on your Mac

npm run ios



or the following for Android - you will need to have an [Andoid emulator]([https://medium.com/@deepak.gulati/running-react-native-app-on-the-android-emulator-11bf309443eb](https://medium.com/@deepak.gulati/running-react-native-app-on-the-android-emulator-11bf309443eb)), possibly with Android studio, on your computer to run this

npm run android



<ins>REQUIRED DEV -- DOCUMENTATION</ins>

It is very tedious to write documentation while programming. But trust me, it will save a lot of headache in the long run and will help your teammates understand what your ideas and thought processes are. Our goal is to write a "good" guideline where any future developer can easily understand the app's structure right away. :)



**HEADER:**

At the top of every new file in a comment block write down a brief description of what the file is for, your progress, date the comment block was written, and your initials. You may use this section to add a TODO list to document what is left. **Please update this section accordingly**



Ex: CareerCenter > app > views > Users.js

<sup><sub>// Users.js contains the 6 mains buttons. and the modals for the pin and help button.</sub></sup>

<sup><sub>// _showModal and _hideModal handles the state of the modals. (determines if they are shown or hidden)</sub></sup>

<sup><sub>// the modals are from the react-native-modal library.</sub></sup>

<sup><sub>// toggleModal2 is a function that closes the help modal directly using isModalVisible2 instead of using the _showModal2 and _hideModal2</sub></sup>



<sup><sub>//Navigation:</sub></sup>

<sup><sub>// the  onPress={() => navigate('...')} within each TouchableOpacity button is a bit confusing.</sub></sup>

<sup><sub>// since these 6 skills are specifically listed within the stack object, they passed down the navigate() function as a prop.</sub></sup>

<sup><sub>// once nested, the prop needs to be manually passed through the component. Please read into the react-navigation docs if needed</sub></sup>

<sup><sub>// for now there is no need to mess with the navigation structure.</sub></sup>



<sup><sub>//There are both stylesheet styling and inline styling.</sub></sup>

<sup><sub>// JT 1/15/19</sub></sup>



**WITHIN FILE:**

add comments above functions that describe how/what the function does. **Update accordingly.**

Ex: CareerCenter > app > views > Users.js

<sup><sub>//binded function toggleModel2 to constructor.</sub></sup>

<sup><sub>//purpose of the function is to help toggle states within the child component, Help (./Help.js)</sub></sup>

<sup><sub>//toggleModel2 is passed entirely in the Help component line 87 as an attribute.</sub></sup>

<sup><sub>//state is switched in child component and is sent back into the parent component (Users.js) and toggles isModalVisible2 to false</sub></sup>

<sup><sub>//isModalVisible2 will close the second modal. JT 1/25/19</sub></sup>



<ins>GITHUB</ins>

Before making any changes to the code, please make sure to **create a local branch** in your system. We want to try our best to not touch the master branch



Do **git pull** before getting started just to make sure your branch is up to date to any changes to master.



When you finish your task, we will review the changes. Once approved, please do a **git pull request** on github and I will merge your branch into master.



This may get tricky -- we will learn together to make sure we get a routine going :)



<ins>ANIMATION</ins>

Animation for both iOS and Android are powered by Lottie. As of today (April 4th, 2019) Lottie is in the process of updating their library specifically for the different platforms. I've been having problems with getting all the masking features that these after effect files are manipulating. So hopefully those get fixed.



COCOA PODS ALWAYS BREAK THE APP! I learned the hard way. So the this article helped with getting around cocoa pods: [https://medium.com/react-native-training/lottie-react-native-tutorial-162d91840720](https://medium.com/react-native-training/lottie-react-native-tutorial-162d91840720)



<ins>Responsive UI Design and Platform Support</ins>

Pixel sizing depends on the device's screen size: px = dp * scaleFactor

But the biggest problem is that 'dp' cannot be used for responsive design

[https://medium.com/react-native-training/build-responsive-react-native-views-for-any-device-and-support-orientation-change-1c8beba5bc23](https://medium.com/react-native-training/build-responsive-react-native-views-for-any-device-and-support-orientation-change-1c8beba5bc23)



Work Around: For Users.js view

I made the baseline responsiveness sizing for iphone 5s. (320dp)

There is a helper function that determines the size of the screen

(app/src/helper/utils.js)



Help, onBoarding, Pin, Users, and Header.js have if statements that take the value of the helper function and adjusts the margins for the ui. Its not a very efficient way to make the mobile responsive but this is the only way for now :/



Organization and efficiency can be cleaned up by using props and states.



<ins>Android Support (as per Vicente)</ins>

App should have that main build to 3.2.0

Everyone's min, target, and compile sdk should be 26

Bottom one should be 27.1.1 and wherever also it uses it

Lottie should be version 2.6.0 (not on react just on android)



THANKS !

- Jemma 4/5/19



