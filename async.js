
// Async/Await:reads top to bottom

async function run(){
const user= await Promise.resolve({id:1, name:'rakshya', });


console.log(user);
const oders= await Promise.resolve(['order1', 'order2']);
console.log(oders);


return oders.length;

}
run().then(result=> console.log(result));



// 
Promise.resolve({id:1, name:'rakshya'})
.then(user=>{
    console.log(user);
    return Promise.resolve(['order1', 'order2']);

})

.then(orders=>{
    console.log(orders);
    return orders.length;
})

.then(result=>console.log(result));
