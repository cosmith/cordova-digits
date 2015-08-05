# Digits.com plugin for Cordova

## Installation

```
cordova plugin add https://github.com/cosmith/cordova-digits.git --variable FABRIC_API_KEY=your_api_key --variable FABRIC_API_SECRET=your_api_secret
```

## Usage

There's only one method implemented for now, which shows the authentication screen. Feel free to submit pull requests!


Sample code:

```js
window.plugins.cordovaDigits.authenticate((loginResponse) => {
    var oAuthHeaders = JSON.parse(loginResponse);
    // do something with the headers here
    // see http://docs.fabric.io/android/digits/verify-user.html
}, (error) => {
    console.warn("[Digits]", "Login failed", error);
});
```

