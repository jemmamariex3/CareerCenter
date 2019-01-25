#CAREER CENTER MOBILE APP -- ORGANIZATION

    |-CareerCenter
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

Any small components that will be reused goes into the section directory

- Ex: child components, logos, modals, etc

 Any files that is a page or a &quot;stand alone&quot; goes into the view directory

- Ex: the tab navigation files

Graphics and assets goes in the img directory. Try to organize by creating subdirectories for specific files

- Ex: Cinthy -- contains the chatbot assets

iOS and Android directories contain the native files for Xcode and Android Studio

Navigation related changes or additions belong in App.js

Entry point is in index.js

___
##CAREER CENTER MOBILE APP -- DOCUMENTATION

This documentation will cover all aspects of the career center mobile app. The app runs on react-native-cli.

**INSTALLATION**

Use [Homebrew]([http://brew.sh/](http://brew.sh/)) to install node and watchman.

- brew install node
- brew install watchman
-

Use the package manager [npm]([https://docs.npmjs.com/downloading-and-installing-packages-locally](https://docs.npmjs.com/downloading-and-installing-packages-locally)) to install react-native-cli

- npm install -g react-native-cli

Git clone this repo into your local terminal (Better if in the IDE)

- git clone [https://github.com/jemmamariex3/CareerCenter.git](https://github.com/jemmamariex3/CareerCenter.git)
-

Enter the directory using basic bash commands

- cd CareerCenter

Install all dependencies

- npm install

**START UP**

Once in the main directory run the following in the terminal

- npm start
-

In another terminal tab run the following for iOS - this will open the [iOS simulator]([https://facebook.github.io/react-native/docs/running-on-simulator-ios](https://facebook.github.io/react-native/docs/running-on-simulator-ios)) on your Mac

- npm run ios

or the following for Android - you will need to have an [Andoid emulator]([https://medium.com/@deepak.gulati/running-react-native-app-on-the-android-emulator-11bf309443eb](https://medium.com/@deepak.gulati/running-react-native-app-on-the-android-emulator-11bf309443eb)), possibly with Android studio, on your computer to run this

- npm run android

___
##REQUIRED DEV -- DOCUMENTATION

It is very tedious to write documentation while programming. But trust me, it will save a lot of headache in the long run and will help your teammates understand what your ideas and thought processes are. Our goal is to write a &quot;good&quot; guideline where any future developer can easily understand the app&#39;s structure right away. :)

**HEADER:**

At the top of every new file in a comment block write down a brief description of what the file is for, your progress, date the comment block was written, and your initials. You may use this section to add a TODO list to document what is left. **Please update this section accordingly**

     Ex: CareerCenter > app > views > Users.js
     // Users.js contains the 6 mains buttons. and the modals for the pin and help button.
     // __showModal and __hideModal handles the state of the modals. (determines if they are shown or hidden)
     // the modals are from the reactnativemodal library.
     // toggleModal2 is a function that closes the help modal directly using isModalVisible2 instead of using the __showModal2 and __hideModal2
    
     //Navigation:
     // the  onPress={() => navigate(&#39;...&#39;)} within each TouchableOpacity button is a bit confusing.
     // since these 6 skills are specifically listed within the stack object, they passed down the navigate() function as a prop.
     // once nested, the prop needs to be manually passed through the component. Please read into the react-navigation docs if needed
     // for now there is no need to mess with the navigation structure.
    
     //There are both stylesheet styling and inline styling.
     // JT 1/15/19


**WITHIN FILE:**

add comments above functions that describe how/what the function does. **Update accordingly.**

     Ex: CareerCenter > app > views > Users.js
     //binded function toggleModel2 to constructor.
     //purpose of the function is to help toggle states within the child component, Help (./Help.js)
     //toggleModel2 is passed entirely in the Help component line 87 as an attribute.
     //state is switched in child component and is sent back into the parent component (Users.js) and toggles isModalVisible2 to false
     //isModalVisible2 will close the second modal. JT 1/25/19

##GITHUB

Before making any changes to the code, please make sure to **create a local branch** in your system. We want to try our best to not touch the master branch

Do **git pull** before getting started just to make sure your branch is up to date to any changes to master.

When you finish your task, we will review the changes. Once approved, please do a **git pull request** on github and I will merge your branch into master.

This may get tricky -- we will learn together to make sure we get a routine going :)

THANK YOU THANK YOU !

- Jemma 1/25/19
