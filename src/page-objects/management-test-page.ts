import { browser, by, element, ElementFinder } from 'protractor';
import { timeout } from 'q';
import ElementWrapper from '../utilities/protractor-wrappers/elements';
import { UserDataObject } from '@data-objects/user';

export default class ManagementTest{
    private static _managementTest: ManagementTest;
    protected userDroplist(username: string): ElementWrapper {
       return new ElementWrapper(by.xpath(`//*[@id='navbardrop' and contains(text(),'Hi, ${username}')]`));   
    }

    public static getInstance(): ManagementTest {
        this._managementTest = new ManagementTest();
        return this._managementTest;
    }

    public async getHiUserText(user: UserDataObject): Promise<boolean>{
        let text = await this.userDroplist(user.username).getText()
        if(text.indexOf(user.username)!= null){
            return true;
        }
    }
    public async getManagementTestPageTitle(): Promise<string>{
        return browser.getTitle();
    }

    public async clickHiUser(name:string): Promise<void>{
        this.userDroplist(name).singleLeftClick();
    }
}