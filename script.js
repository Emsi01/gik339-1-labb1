// Hämtar variabler 
const checkBox = document.getElementById("divstyle");
const textField = document.getElementsByClassName("textfield"); 
const myButton =  document.getElementsByTagName("myButton");
const myDiv = document.querySelector(".myDiv");


// fördefinerad funktion 
function getvalue (e) {
    console.log('checkBox clicked, eventobjekt', e)
}

checkBox.addEventListener('click', getvalue); {
}; 


function handleBlur(e) {
    console.log('handleBlur, eventobjekt', e);
    const name = e.target.name;
    const value = e.target.value;

    const html = '<p> fältet ' + name + ' har värdet ' + value + '</p>';

    myDiv.insertAdjacentHTML('afterbegin',html ); 
}
