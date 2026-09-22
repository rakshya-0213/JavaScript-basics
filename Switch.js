// // case ==> Condition


// function getBrowserConfig(browser){
//     switch(browser){
//     case"chrome":
//     return{headless:true};
//     break;


//     case"firefox":
//     return{headless:false};
//     break;


//     default:
//         return"Unknown browser";
// }
//     // case "rakshya":
//     // return'Rakshya is here';
//     // break;
    
// }
// console.log(getBrowserConfig("chrome"));
// console.log(getBrowserConfig("firefox"));
// console.log(getBrowserConfig("rakshya"));



function getBrowserConfig(browser) {
    switch (browser) {
        case "chrome":
            return { headless: true };
       
        case "firefox":
            return { headless: false };


        case "rakshya":
            return "Rakshya is here";

            
        default:
            return "Unknown browser";
    }
}

console.log(getBrowserConfig("chrome"));
console.log(getBrowserConfig("firefox"));
console.log(getBrowserConfig("rakshya"));