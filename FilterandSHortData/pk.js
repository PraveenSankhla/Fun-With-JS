let teacher = ["rahul", "vijay", "aarti", "sakshi", "rohan"]

let students = [
    {
        firstName: 'Ritesh',
        lastName: 'Pandey',
        age: 20,
    },

    {
        firstName: 'Annya',
        lastName: 'Solanki',
        age: 19,
    },

    {
        firstName: 'Aakansha',
        lastName: 'Kumari',
        age: 22,
    },

    {
        firstName: 'Raju',
        lastName: 'Deshpandey',
        age: 26
    },

    {
        firstName: 'Pooja',
        lastName: 'Yadav',
        age: 21
    },

    {
        firstName: 'Jyoti',
        lastName: 'Udaniya',
        age: 18,
    }
];


// students ------------------>
// sort by age --------------->
console.log('Students List :-');
console.log('sort by age :-');
console.log("");
students.sort((a,b) =>{
    return a.age - b.age;
});

students.forEach((e) =>{
    console.log(`${e.firstName} ${e.lastName} ${e.age}`);
});

console.log("=========================================");


// sort by first name --------------->
console.log('Sort by First Name :-');
console.log("");
students.sort(function(a, b){
    if(a.firstName < b.firstName) { return -1; }
    if(a.firstName > b.firstName) { return 1; }
    return 0;
})
students.forEach((e)=>{
    console.log(`${e.firstName} ${e.lastName} ${e.age}`);
})

console.log("==========================================");


// sort by lastname -------------->
console.log('Sort by Last Name :-');
console.log("");
students.sort(function(a, b){
    if(a.lastName < b.lastName) { return -1; }
    if(a.lastName > b.lastName) { return 1; }
    return 0;
})
students.forEach((e)=>{
    console.log(`${e.firstName} ${e.lastName} ${e.age}`);
})

console.log("==========================================");


// teacher list ---->
console.log('Teachers :-');
console.log('');
// sort by name ascending order ------->
console.log('sort by ascending order using name :-');
teacher.sort();
teacher.forEach((e) => {
    console.log(`${e}`);    
});
console.log("===========================================");

// sort by name decending order -------->
console.log('sort by descending order using name :-');
teacher.sort();
teacher.reverse();
teacher.forEach((e)=>{
    console.log(`${e}`);
})




//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
function valueGet() {

let value = document.getElementById('sort').value
// console.log(value);
// console.log(typeof(value));

let showdata = document.getElementById('data')
// console.log(showdata);


if (value == "1") {
    showdata.innerHTML = ""
    students.sort(function(a, b){
        if(a.firstName < b.firstName) { return -1; }
        if(a.firstName > b.firstName) { return 1; }
        return 0;
    })

    students.forEach((e)=>{
        let parnode = document.createElement('p');
        showdata.appendChild(parnode);
        parnode.innerHTML = `${e.firstName} ${e.lastName} ${e.age}`;
    })
}


 if(value == "2"){
    showdata.innerHTML = ""
    students.sort(function(a, b){
        if(a.lastName < b.lastName) { return -1; }
        if(a.lastName > b.lastName) { return 1; }
        return 0;
    })

    students.forEach((e)=>{
        let parnode = document.createElement('p');
        showdata.appendChild(parnode);
        parnode.innerHTML = `${e.firstName} ${e.lastName} ${e.age}`;
    })
}

 if (value == "3"){
    showdata.innerHTML = ""
    students.sort((a,b) =>{
        return a.age - b.age;
    });  

    students.forEach((e)=>{
        let parnode = document.createElement('p');
        showdata.appendChild(parnode);
        parnode.innerHTML = `${e.firstName} ${e.lastName} ${e.age}`;
    })
}
}

valueGet();
