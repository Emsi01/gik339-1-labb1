// Hämtar variabler 
const checkBox = document.getElementById("divstyle");
const textField = document.getElementsByClassName("textfield"); 
const myButton =  document.getElementsByTagName("button");
const myDiv = document.querySelector(".myDiv");

// fördefinerad funktion för inputfälten
function klickadeInput(e) {
    console.log(e.target);
    console.log(e.target.name);
    if (e.target = textField[1]) {
        myDiv.innerHTML = textField[1].value
    }
}


// Iterera över textfält och eventlyssnare för textfälten 
for (let i = 0; i < textField.length; i++) {
    textField[i].addEventListener('keypress', klickadeInput);
}



// Anonym funktion 
const klickadeBox = function() {
    console.log('checkBox clicked, eventobjekt')
    myDiv.style.backgroundColor = textField[0].value;
    myButton[0].style.backgroundColor = textField[0].value;
    
}


// eventlyssnare för checkBox 
checkBox.addEventListener('change', klickadeBox); {
}; 

// Anonym funktion
const klickadeKnapp = function() {
    console.log('myButton clicked, eventobjekt')
    myDiv.remove();
}


// eventlyssnare till knappen
myButton[0].addEventListener('click', klickadeKnapp); {
};

