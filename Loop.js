// // for loop example
// for(let i=0; i<5; i++){
//     console.log(`Running loop iteration: ${i+1}`);

// }

// console.log("Loop completed");

// for(let i=5; i>0; i--){
//     console.log(`Running loop iteration: ${i}`);

// }








// // While loop example


// let attempts = 0;
// let sucess = false;
// while(!sucess && attempts < 3)
//     {
//         attempts++;
//     console.log(`Attempt ${attempts}`);

//     if(attempts === 3 ){
//         sucess = true;
//     }
// }
// console.log(`sucess: ${sucess}`);



// // // For...of loop example

// const user = ["Ram", "Shyam", "Sita", "Gita"];

// for( const name of user){
//     console.log(`Checking name for: ${name}`);
// }


// // Break
// for(let i=1; i<100; i++){

//     if(i===3)break;
//     console.log(i);

// }


// FOR IN AND FOR EACH LOOP

// const user={name:"Ram",role:"shyan"};
// for(const key in user){
//     console.log(key);
// }
const students={
    name:"Ram",
    role:"shyan",
    email:"abc@gmail.com",

};
Object.entries(students).forEach(([key,value])=>
    {
    console.log(key +':'+value);
});


