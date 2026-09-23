// type Locator=string|RegExp;

// const selector: Locator='#login';
// const pattern: Locator= 'login';

// console.log('String Locator', selector);
// console.log('String Locator', pattern);


// interface User{

//     email:string;
//     password: string;
//     role:'admin'|'viewer';

// }
// const user: User={
//     email:'abc@gmail.com',
//     password: 'rakshya@123',
//     role:'admin'

// };

// console.log(user);

class LoginPage{
    private email='';

construstor(email:string){
    this.email= email;

}

async fillCredentails(email:string):promise<void>{
    console.log(`Filling email:${email}`);
}
}

const loginPage= new LoginPage("test@123.com");
loginPage.fillCredentails('test@123.com');
