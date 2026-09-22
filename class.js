class Animal{
constructor(name,sound){
    this.name=name;
    this.sound=sound;

    }

speak(){
    console.log(`${this.name} says ${this.sound}`);

    }}
const dog= new Animal('Dog','Woof');
dog.speak();

class Dog extends Animal{
constructor(name){
super(name,'woof');

    }

    fetch(){
        console.log(`${this.name} fetches the ball`);

    }
}

const rex= new Dog('Rex');
rex.speak();
rex.fetch();
