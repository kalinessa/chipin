


//VARIABLES
var currentScreen = "mainMenuScreen1";
var amount = 0;
var date = Date();
var pastDonationsText = "";
date = date.substring(4, 15);

// MAIN MENU SCREEN BUTTONS

// arrows
onEvent("nextScreenButton1.1", "click", function( ) {
  currentScreen = "mainMenuScreen2";
  setScreen("mainMenuScreen2");
});
onEvent("nextScreenButton1.2", "click", function( ) {
  currentScreen = "mainMenuScreen3";
  setScreen("mainMenuScreen3");
});
onEvent("previousScreenButton1.2", "click", function( ) {
  currentScreen = "mainMenuScreen1";
  setScreen("mainMenuScreen1");
});
onEvent("previousScreenButton1.3", "click", function( ) {
  currentScreen = "mainMenuScreen2";
  setScreen("mainMenuScreen2");
});

// switch to hurricane ian info page
onEvent("ENM1image", "click", function( ) {
  currentScreen = "causeInfoScreen";
  setScreen("causeInfoScreen");
});
onEvent("ENM1text1", "click", function( ) {
  currentScreen = "causeInfoScreen";
  setScreen("causeInfoScreen");
});
onEvent("ENM1text2", "click", function( ) {
  currentScreen = "causeInfoScreen";
  setScreen("causeInfoScreen");
});

// go to user settings
onEvent("userIcon1.1", "click", function( ) {
  hideElement("goBackButton5");
  hideElement("goBackButton5.1");
  setScreen("UserSettingsScreen5");
});
onEvent("userIcon1.2", "click", function( ) {
  hideElement("goBackButton5");
  hideElement("goBackButton5.1");
  setScreen("UserSettingsScreen5");
});
onEvent("userIcon1.3", "click", function( ) {
  hideElement("goBackButton5");
  hideElement("goBackButton5.1");
  setScreen("UserSettingsScreen5");
});


// CAUSE INFO SCREEN BUTTONS

// arrows
onEvent("nextScreenButton/2.1", "click", function( ) {
  currentScreen = "causeInfoScreen2";
  setScreen("causeInfoScreen2");
});
onEvent("previousScreenButton/2.2", "click", function( ) {
  currentScreen = "causeInfoScreen";
  setScreen("causeInfoScreen");
});

// go to red cross info
onEvent("organizatonButtonD1/2.2", "click", function( ) {
  currentScreen = "organizationScreen1";
  setScreen("organizationScreen1");
});

//go to main menu
onEvent("mainMenuButton/2.1", "click", function( ) {
  currentScreen = "mainMenuScreen1";
  setScreen("mainMenuScreen1");
});
onEvent("mainMenuButton/2.2", "click", function( ) {
  currentScreen = "mainMenuScreen1";
  setScreen("mainMenuScreen1");
});

//go to user settings screen
onEvent("userIcon/2.1", "click", function( ) {
  setScreen("UserSettingsScreen5");
});


// ORGANIZATION SCREEN BUTTONS

//up and down arrows
onEvent("nextScreenButton/3.1", "click", function( ) {
  currentScreen="organizationScreen2";
  setScreen("organizationScreen2");
});
onEvent("previousScreenButton/3.2", "click", function( ) {
  currentScreen="organizationScreen1";
  setScreen("organizationScreen1");
});
//return to info button
onEvent("mainMenuButton/3.1", "click", function( ) {
  currentScreen="causeInfoScreen2";
  setScreen("causeInfoScreen2");
});
//go to user settings
onEvent("userIcon/3.1", "click", function( ) {
  setScreen("UserSettingsScreen5");
});
onEvent("userIcon/3.2", "click", function( ) {
  setScreen("UserSettingsScreen5");
});

// go donation screen
onEvent("donateButton/3.1", "click", function( ) {
  currentScreen = "donationProcessScreen4";
  setScreen("donationProcessScreen4");
});

// main menu
onEvent("mainMenuButton4.2", "click", function () {
  currentScreen = "mainMenuScreen1";
  setScreen("mainMenuScreen1");
});

// DONATION PROCESS SCREEN BUTTONS

// record amount of money donated
onEvent("donationInput", "change", function( ) {
  amount = getNumber("donationInput");
});

// complete transaction, update records, say thank you
onEvent("completeTransactionButton", "click", function( ) {
  playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3", false);
  setText("contributionText", "You have successfully donated $" + amount + " to the Red Cross organization!");
  
  pastDonationsText = date + ": Red Cross ... $" + amount + "\n" + pastDonationsText;
  setText("pastDonationsText", pastDonationsText);
  setScreen("thankYouScreen");

});

// go back to organization screen
onEvent("goBackButton4", "click", function( ) {
  currentScreen = "organizationScreen1";
  setScreen("organizationScreen1");
});

// go back to main menu
onEvent("mainMenuButton4", "click", function( ) {
  currentScreen = "mainMenuScreen1";
  setScreen("mainMenuScreen1");
});

// go to user settings
onEvent("userIcon4", "click", function( ) {
  setScreen("UserSettingsScreen5");
});

// USER SETTING SCREEN BUTTONS


// go back to screen you were on
onEvent("goBackButton5", "click", function( ) {
  setScreen(currentScreen);
});
onEvent("goBackButton5.1", "click", function( ) {
  setScreen(currentScreen);
});

// go main menu
onEvent("mainMenuButton5", "click", function( ) {
  currentScreen="mainMenuScreen1";
  setScreen("mainMenuScreen1");
  showElement("goBackButton5");
  showElement("goBackButton5.1");
});
onEvent("mainMenuButton5.1", "click", function( ) {
  currentScreen="mainMenuScreen1";
  setScreen("mainMenuScreen1");
  showElement("goBackButton5");
  showElement("goBackButton5.1");
});

// arrows
onEvent("nextScreenButton5", "click", function( ) {
  setScreen("userSettingScreen5.1");
});
onEvent("previousScreenButton5.1", "click", function( ) {
  setScreen("UserSettingsScreen5");
});


// THANK YOU SCREEN BUTTONS

onEvent("mainMenuButton6.1", "click", function( ) {
  currentScreen = "mainMenuScreen1";
  setScreen("mainMenuScreen1");
});

onEvent("userIcon6.1", "click", function( ) {
  setScreen("UserSettingsScreen5");
  hideElement("goBackButton5");
  hideElement("goBackButton5.1");
});


