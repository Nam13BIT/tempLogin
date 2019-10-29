import { browser, by, element, ElementFinder } from 'protractor';
import { timeout } from 'q';
import ElementWrapper from '../utilities/protractor-wrappers/elements';

export default class ManagementTest{
    private static _managementTest: ManagementTest;
    protected userDroplist(username: string): ElementWrapper {
       return new ElementWrapper(by.xpath(`//*[@id='navbardrop' and contains(text(),'Hi, ${username}')]`));   
    }

    public static getInstance(): ManagementTest {
        this._managementTest = new ManagementTest();
        return this._managementTest;
    }

    public async getHiUserText(name:string): Promise<string>{
        return await this.userDroplist(name).getText();
    }
    public async getManagementTestPageTiitle(): Promise<string>{
        return browser.getTitle();
    }

    public async clickHiUser(name:string): Promise<void>{
        this.userDroplist(name).singleLeftClick();
    }
}