import { browser, by, element, ElementFinder } from 'protractor';
import { timeout } from 'q';
import ElementWrapper from '@utilities/protractor-wrappers/elements';
import ManagementTest from './management-test-page';

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


    public async inputLoginForm(name:string, pass : string): Promise<void> {
        try {
            await this.usernameInput.input(name,5);
            await this.passwordInput.input(pass,5);
        } catch (error) {
            throw new Error(error.message);
        }
    }
    public async getLoginTittle(){
        return this.loginTitle.getText();
    }
    public async submitLoginForm(name:string, pass :string): Promise<ManagementTest>{
        try {
            await this.inputLoginForm(name,pass);
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

