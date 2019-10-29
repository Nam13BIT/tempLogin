
import { browser } from 'protractor';
import { async } from 'q';

import LoginPage from '@page-objects/login-page';
import TestBase from '@utilities/general/test-base';
import { PageName } from '@test-data/page-url';
import ManagementTest from '@page-objects/management-test-page';
import { UserDataObject, User } from '@data-objects/user';
import { PageTitle } from '@test-data/page-title';
describe('Dashboard log in page', async () =>{
	TestBase.scheduleTestBase(PageName.DASH_BOARD_LOGIN);
	let loginPage:LoginPage;
	let managementPage: ManagementTest;
	let user: UserDataObject;
	beforeEach(async () => {
		user = User.validUser();
		loginPage = new LoginPage();
		managementPage = new ManagementTest();
	  });
	it('Log in with valid account information ', async () => {
		//navigate to LoginPage
		await LoginPage.getInstance();
		
		//submit valid account information 
		managementPage = await loginPage.submitLoginForm(user);
		
		//Welcome message with correct user is display on top menu of manage tests page
		expect(await managementPage.getManagementTestPageTitle()).toEqual(PageTitle.MANAGEMENT_TEST, 'Management page is not displayed.');
		expect(await managementPage.getHiUserText(user)).toBe(true, "Wrong user")

		
	  });  
});


