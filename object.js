// const user={
// id:10,
// name:"Rakshya Gyawali",
// address:"kathmandu",
// role:"student"
// };

// //access

// console.log(user.id);
// console.log(user[`role`]);

// //add

// user.tadd="Sankhamul";
// user.address="Pokhara";
// user.active=true;
// user.email='rakshya@gmail.com';
// console.log(user);




// const test=[
//     {id:1, names:'Found', active: false},
//     {id:2,names:"Rakshya",active:true},
//     {id:3,names:"Pass",active:true}
// ];

// // const failed= test.filter(t=> t.active==true);

// const failed = test.filter(t => t.active === true);
// console.log(failed.names);

// const names= test.map(t=>t.names);
// console.log(names);

// //Array destrusting

// const[first,second,...rest]=[10,20,'ram',40];

// console.log(first);
// console.log(rest);





// // object destructing
// const response={
//     statusCode :200,
//     body:{userID:5,token:"abc123"}
// };

// const{statusCode,body:{token}}= response;

// console.log(statusCode);
// console.log(token);



// // Spread:Expand array

// const first=[10,20];
// const Second=[30,'Ram'];
// const array=[...first,...Second];

// console.log(array);




// // copy array
// const first=[10,20];

// const copy=[...first];

// console.log(copy);





// const user={name:'rakshya', age:20};
// const details = {city:'kathmandu',age:20};

// const copy={...user,...details};

// console.log(copy);


