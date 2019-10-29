import { ElementFinder, Locator, by, element, browser, protractor } from "protractor";
import BrowserWrapper from "./browser";
import Clock from "../general/clock";
import { async } from "q";
export default class ElementWrapper {
    private _by: Locator;
    private _element: ElementFinder;
    
    constructor(locator : Locator){
        this._by = locator;
        this._element = BrowserWrapper.getDriverInstance().element(this._by);
    }

    public async singleLeftClick(timer:number = 5): Promise<this> {
        if(timer >0){
            let clock = new Clock();
            clock.tickTock();
            await this._element.click().then(async (result) => {
                // console.log(result)
            }).catch(async (error) => {
                if (error.message.includes("Other element would receive the click") || error.message.includes("element is not attached to the page document")) {
                    await this.singleLeftClick(clock.getTimeLeftInSecond(timer));
                }
                else {
                    throw new Error(error.message);
                }
            });
        }
        return this;
    }
    
    public async input(data: any, timer: number = 5): Promise<this> {
         if (timer > 0) {
             let clock = new Clock();
             clock.tickTock();
             await this._element.clear();
             await BrowserWrapper.getDriverInstance().actions().mouseMove(this._element).perform();
             await this._element.sendKeys(data)
             await browser.sleep(5);
            }
         else {
            throw new Error("Time out in input information");
        }
        return this;
    }

    public async getText(): Promise<string> {
        try {
            return await this._element.getText();
        } catch (error) {
            throw new Error(error.message);
        }
    } 

    public async isDisplayed(timer: number = 5): Promise<boolean> {
        let isDisplayed: boolean = false;
        if (timer > 0) {
            let clock = new Clock();
             clock.tickTock();
            await this._element.isDisplayed().then(async () => {
                isDisplayed = true;
            }).catch(async (err) => {
                if (err.message.includes("No element found using locator") || err.message.includes("Index out of bound")) {
                    isDisplayed = false;
                }
                else {
                    return await this.isDisplayed(clock.getTimeLeftInSecond(timer));
                }
            })
        }
        else {
            throw new Error("Time out");
        }
        return isDisplayed;
    }
    public async waitForVisible(timeout: number = 5000): Promise<any> {
        try {
            return await browser.wait(protractor.ExpectedConditions.visibilityOf(this._element), timeout);
        } catch (err) {
            throw new Error(err.message)
        }
    }

    public async waitForInvisible(timeout: number = 5000): Promise<any> {
        try {
            return await browser.wait(protractor.ExpectedConditions.invisibilityOf(this._element), timeout);
        } catch (err) {
            throw new Error(err.message)
        }
    }

}
