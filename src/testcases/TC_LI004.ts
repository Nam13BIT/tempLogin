import {LoginPage} from '../page-objects/login-page';
describe('Dashboard log in page', function(){
	it('User can log in with valid account information', async function(){
        //Navigate to login page
        let loginPage:LoginPage=new LoginPage();

        await loginPage.getBrowser();
		
		//input valid username information
		await loginPage.clearUsername();
		
		// input invalid password information
		await loginPage.setPassword('inContact4ever');
		
		// submit login information
		await loginPage.submitLogin();
		
		//VP. User canot log in. Login form displays
		expect(await loginPage.getLoginTittle()).toEqual('Login');
	});
});


