import { browser, by, element, ElementFinder } from 'protractor';
import { timeout } from 'q';
export class LoginPage {
    private nameInput = element(by.xpath("//input[@id='Username']"));
    private passwordInput = element(by.xpath("//input[@id='Password']"));
    private loginTitle = element(by.xpath("//span[@class='align-middle']"));
    private loginButton = element(by.xpath("//button[@id='logIn']"));
    private registerButton = element(by.xpath("//button[contains(text(),'Don't have an account? Click here.')]"));

    async getBrowser() {
        await browser.get('http://192.168.171.191:4200/#/login');
    }


    setName = async (name) => {
        await this.nameInput.sendKeys(name);
    };

    setPassword = async (password) => {
        await this.passwordInput.sendKeys(password,10);
    };

    getLoginTittle = async () => {
        return this.loginTitle.getText();
    };

    submitLogin = async () => {
        await this.loginButton.click();
    }
    clearUsername = async() =>{
         await this.nameInput.clear();
    };
    clearPassword = async() =>{
        await this.passwordInput.clear();
   };
}

