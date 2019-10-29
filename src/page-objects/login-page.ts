import { browser, by, element, ElementFinder } from 'protractor';
import { timeout } from 'q';
import ElementWrapper from '@utilities/protractor-wrappers/elements';
import ManagementTest from './management-test-page';
import { User, UserDataObject } from '@data-objects/user';

export default class LoginPage {
    private static _loginPage: LoginPage;

    protected usernameInput = new ElementWrapper(by.xpath("//input[@id='Username']"));
    protected passwordInput = new ElementWrapper(by.xpath("//input[@id='Password']"));
    protected loginTitle = new ElementWrapper(by.xpath("//span[@class='align-middle']"));
    protected loginButton = new ElementWrapper(by.xpath("//button[@id='logIn']"));
    protected registerButton = new ElementWrapper(by.xpath("//button[contains(text(),'Don't have an account? Click here.')]"));
    protected loadingScreen = new ElementWrapper(by.xpath(`//*[@id="loading-screen-container"]`));
    
    public static getInstance(): LoginPage {
        this._loginPage = new LoginPage();
        return this._loginPage;
    }


    public async inputLoginForm(user: UserDataObject): Promise<void> {
        try {
            await this.usernameInput.input(user.username,5);
            await this.passwordInput.input(user.password,5);
        } catch (error) {
            throw new Error(error.message);
        }
    }
    public async getLoginTittle(){
        return this.loginTitle.getText();
    }
    public async submitLoginForm(user: UserDataObject): Promise<ManagementTest>{
        try {
            await this.inputLoginForm(user);
            await this.loginButton.singleLeftClick();
            await this.loadingScreen.waitForVisible();
            await this.loadingScreen.waitForInvisible();
            return ManagementTest.getInstance();
        } catch (error) {
            throw new Error(error.message);
        }
    }
    public async clickLoginButton(){
        await this.loginButton.singleLeftClick();
    }
    public async waitForLoadingScreen(): Promise<void>{
        await this.loadingScreen.isDisplayed();
    }
}

