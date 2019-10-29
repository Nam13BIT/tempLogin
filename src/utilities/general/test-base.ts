import { PageName } from "@test-data/page-url";
import BrowserWrapper from "@utilities/protractor-wrappers/browser";


export default class TestBase {

    public static async scheduleTestBase(webPage: PageName = PageName.DASH_BOARD_LOGIN) {
        beforeEach(async () => {
            await this.navigateToWebPage(webPage);
        })
    };

    public static async navigateToWebPage(url: string) {
        await BrowserWrapper.navigateTo(url);
    };
}