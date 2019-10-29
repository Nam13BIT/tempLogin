import BrowserWrapper from "../utilities/protractor-wrappers/browser";
import LoginPage from "./login-page";
export default class BasePage{
    private static _basePage: BasePage;
    
    public static getInstance(): BasePage {
        this._basePage = new BasePage();
        return this._basePage;
    }
    public async goToLoginPage(): Promise<LoginPage>{
        try {
            
            return await LoginPage.getInstance();
        } catch (error) {
            
        }
    }

}