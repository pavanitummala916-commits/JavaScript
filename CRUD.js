//createion of object
let student = {
    id:1,
    name:"pavani",
    branch:"cds",
}
//creating individual Item
console.log(student.branch);
console.log(student["name"]);

//adding an Item to existing object
student.marks = 95;
console.log(student);

//updating an Ite to existing 
student.name = "jaya";
console.log(student);

//deleting the item




//for - in loop
for(int Key in student) {
    console.log(`{$key} => &student[key]`)
}

