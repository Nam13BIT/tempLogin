import { userData } from "../test-data/user";
import { Utility } from "../utilities/general/utility";

export class UserDataObject {
    username: string;
    password: string;
};

export class User {

    private static user: UserDataObject;

    public static validUser(): UserDataObject {
        try {
            this.user = JSON.parse(JSON.stringify(userData));
            return this.user;
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    public static generateRandomUser(): UserDataObject {
        try {
            return this.user = {
                username: Utility.randomString(10) + '@logigear.com',
                password: Utility.randomString(10),
            };
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
}
