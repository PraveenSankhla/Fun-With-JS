// JavaScript source code

    let changevalue = document.getElementById('prog1');
    let changevalue2 = document.getElementById('prog2');
    //console.log(changevalue2)

function getvalue(){
        let marks1 = document.getElementById('chemistry').value;
        let marks2 = document.getElementById('physics').value;
      //  console.log(marks1)
        
        changevalue.setAttribute('value', `${marks1}`)
        changevalue2.setAttribute('value', `${marks2}`)  
}

let c_changevalue = document.getElementsByClassName('c_one');
let c_changevalue_h1 = document.getElementById('c_one_heading');

function getvalue2(){
    let c_onevalue = Number(document.getElementById('chemistry2').value);


    c_changevalue_h1.innerHTML = `${c_onevalue}`;
if(c_onevalue>0 && c_onevalue<=25){
    c_changevalue.style= "border-bottom-color: white; border-left-color:white; border-top-color:cadetblue;  border-right-color:white;"
}
else if(c_onevalue>25 && c_onevalue<=50){
    c_changevalue.style = "border-bottom-color: white; border-left-color:white; border-top-color:cadetblue;  border-right-color:cadetblue;"
}
else if(c_onevalue>50 && c_onevalue <=75){
    c_changevalue.style = "border-bottom-color: cadetblue; border-left-color:white; border-top-color:cadetblue;  border-right-color:cadetblue;"
} if(c_onevalue>75 && c_onevalue <=100){
    c_changevalue.style = "border-bottom-color: cadetblue; border-left-color:skyblue; border-top-color:cadetblue;  border-right-color:cadetblue;"
}else{
alert('Enter a valid details')
}
}