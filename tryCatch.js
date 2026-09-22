function divide(a,b){
    try{
        if(b===0){
            throw new Error('Cannot divide by zero');
        }

        const result =a/b;
        console.log('Result:', result);


    }
    catch(error){

        console.log('Error:',error.message);

    }
}

divide(10,2);
divide(10,0);
