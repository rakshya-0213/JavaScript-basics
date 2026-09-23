"use strict";
class LoginPage {
    email = '';
    construstor(email) {
        this.email = email;
    }
    async fillCredentails(email) {
        console.log(`Filling email:${email}`);
    }
}
const loginPage = new LoginPage("test@123.com");
loginPage.fillCredentails('test@123.com');
