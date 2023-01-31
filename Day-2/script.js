let progresscircle = document.getElementById('progress-circle')
// console.log(progresscircle);


function changeprogress() {
    let inputvalue = (document.getElementById('inputvalue').value)*3.60
    // console.log(inputvalue);

    if (inputvalue<=360) {
        progresscircle.style.backgroundImage = 
        `radial-gradient(white 50%, transparent 51%),
        conic-gradient(transparent 0deg ${inputvalue}deg, gainsboro ${inputvalue}deg 360deg),
        conic-gradient(skyblue 0deg, skyblue 90deg, skyblue 270deg, skyblue)`    
    } else {
        alert("Enter between value 1-100");
    }
}