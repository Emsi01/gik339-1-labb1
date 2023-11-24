// Hämtar variabler 
const checkBox = document.getElementById("divstyle");
const textField = document.getElementsByClassName("textfield"); 
const myButton =  document.getElementsByTagName("button");
const myDiv = document.querySelector(".myDiv");

// fördefinerad funktion för inputfälten
function klickadeInput(e) {
    console.log('Inputfält klickad, eventobjekt', e);
    const name = e.target.name;
    const value = e.target.value;

    const html = '<p> Fältet ' + name + ' har värdet ' + value + '</p>';

    myDiv.insertAdjacentHTML('afterbegin', html);
}

// Iterera över textfält och eventlyssnare för textfälten 
for (let i = 0; i < textField.length; i++) {
    textField[i].addEventListener('input', klickadeInput);
}



// Anonym funktion 
const klickadeBox = function(e) {
    console.log('checkBox clicked, eventobjekt', e)
}
// eventlyssnare för checkBox 
checkBox.addEventListener('click', klickadeBox); {
}; 

