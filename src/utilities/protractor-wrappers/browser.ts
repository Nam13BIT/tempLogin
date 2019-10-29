import { protractor, ProtractorBrowser } from 'protractor';
export default class BrowserWrapper {
    private static _presentBrowser: ProtractorBrowser;
    private  static readonly _browserName: ProtractorBrowser[] = new Array();
    public static getDriverInstance(): ProtractorBrowser {
        try {
            if (BrowserWrapper._browserName.length == 0) {
                BrowserWrapper._presentBrowser = protractor.browser;
                BrowserWrapper._browserName.push(BrowserWrapper._presentBrowser);
                return BrowserWrapper._presentBrowser;
            } else {
                return BrowserWrapper._presentBrowser;
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
    public static async navigateTo(url: string) : Promise<void>{
        try{
            let presentBrowser: ProtractorBrowser = await BrowserWrapper.getDriverInstance();
            presentBrowser.waitForAngularEnabled(false);
            await presentBrowser.get(url).then(async (result) => {
                // await console.log(result);
            }).catch(async (err) => {
                throw new Error(err.message);
            });
        }
        catch(error){
            throw new Error(error.message);
        }
    }
    public static async closeBrowser(): Promise<void>{
        try {
            let presentBrowser: ProtractorBrowser = await BrowserWrapper.getDriverInstance();
            await presentBrowser.close();
        } catch (error) {
            throw new Error(error.message);
        }
    }
    public static async getPageTitle(): Promise<void>{
        try {
            let presentBrowser: ProtractorBrowser = await BrowserWrapper.getDriverInstance();
            await presentBrowser.getTitle();
        } catch (error) {
            throw new Error(error.message);            
        }
    }
    public static async setPageLoadTimeout(timeoutInSecond: number = 30): Promise<void> {
        await BrowserWrapper.getDriverInstance().manage().timeouts().pageLoadTimeout(timeoutInSecond * 1000).then(async (result) => {
        }).catch(async (err) => {
            throw new Error(err.message);
        });
    }
}