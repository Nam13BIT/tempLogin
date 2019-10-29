"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../test-data/user");
var utility_1 = require("../utilities/general/utility");
var UserDataObject = /** @class */ (function () {
    function UserDataObject() {
    }
    return UserDataObject;
}());
exports.UserDataObject = UserDataObject;
;
var User = /** @class */ (function () {
    function User() {
    }
    User.validUser = function () {
        try {
            this.user = JSON.parse(JSON.stringify(user_1.userData));
            return this.user;
        }
        catch (err) {
            throw new Error(err.message);
        }
    };
    User.generateRandomUser = function () {
        try {
            return this.user = {
                username: utility_1.Utility.randomString(10) + '@logigear.com',
                password: utility_1.Utility.randomString(10),
            };
        }
        catch (err) {
            throw new Error(err.message);
        }
    };
    return User;
}());
exports.User = User;
