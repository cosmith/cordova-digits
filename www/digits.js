(function(cordova) {
    function Digits() {};

    Digits.prototype.authenticate = function (successCallback, failureCallback) {
        return cordova.exec(successCallback, failureCallback, "DigitsPlugin", "authenticate", []);
    }

    Digits.install = function() {
        if (!window.plugins) {
            window.plugins = {};
        }
        window.plugins.cordovaDigits = new Digits();
    };

    cordova.addConstructor(Digits.install);

})(window.cordova || window.Cordova || window.PhoneGap);
