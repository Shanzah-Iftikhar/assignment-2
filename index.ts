//object , array and function

//assignment 1 = building a friend list
interface Friend{
    firstName: string;
    lastName :string;
    city:string;
    age:number;
}
interface People{ 
    friends:Friend[];
}

const people:People = {
    friends:[]
};


const friend1:Friend={
    firstName:"sheeza",
    lastName: "saleem",
    city:"karachi",
    age:18
};
 
const friend2 ={
    firstName:"unaiza",
    lastName: "bilal",
    city:"lahore",
    age:19
};

const friend3 ={
    firstName: "nabiha",
    lastName : "zaheer",
    city:"karachi",
    age:18
};
people.friends.push (friend1,friend2,friend3);
console.log(people);

//assignment 2 =maniuplating an Array OR rearranging an Array

const scrambledArray =["student", "of" , true , 903 , "an" , "a" , "GIAIC" , "S"];

scrambledArray.splice(2,2)
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray[1]= "am"
scrambledArray[2]="a"
scrambledArray[3] = "student"
scrambledArray[4]="of"
scrambledArray[5]="GIAIC"

const sentence = scrambledArray.join("");
console.log(sentence);

 
//assignment 3 = company product catalog

type Product ={
    name:string;
    price:number;
    durability:string;

}
let inventory :Product[]=[];

let product1:Product={
    name:"refrigerator",
    price:12000,
    durability:"2Years"
};
let product2:Product={
    name:"airConditioner",
    price:124000,
    durability:"5Years"
};
let product3:Product={
    name:"oven",
    price:12900,
    durability:"4Years"
}
inventory.push(product1,product2,product3);
console.log(inventory);
console.log(inventory[2].durability);
console.log(inventory[0].price);
console.log(inventory[1].name);


//Assignment 4 = student list organizer
type Student ={
    name:string;
    senior:boolean;
    completedAssignment:boolean;
}
const student1:Student={
    name:"munazza",
    senior:true,
    completedAssignment:false
}
const student2:Student={
    name:"irfa",
    senior:false,
    completedAssignment:false
}
const student3:Student={
    name:"mehak",
    senior:true,
    completedAssignment:true
}
const students : Student[]=[
    student1,student2,student3
];
console.log(students);





