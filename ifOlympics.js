var cat = [];
cat.length = 3;
if (cat = 3){
    console.log("is the length");
}
else if (cat > dog){
    console.log("not the same");
} 

var cat = 3;
var dog = 4;

if (cat == dog){
    console.log("Are the same");
}
else{
    console.log("not the same");
}

var person = {
    firstname: "Bobby",
    age: 12,
 displayInfo: function(){
     if (person.age > 18){
         console.log(`${person.firstname} is allowed to go to the movie!!`);
     }
     else {
         console.log(`${person.firstname} is not allowed to go to the movie!!`);
     }
 }

}
person.displayInfo();



