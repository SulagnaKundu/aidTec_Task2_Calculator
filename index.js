console.log("Welcome to calculator lite");

let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenvalue = ' ';

for(button of buttons){
    button.addEventListener('click',(e)=>{
        let buttontext=e.target.innerText;
        //console.log(buttontext);
        if(buttontext == 'X'){
            buttontext = '*';
            screenvalue += buttontext;
            screen.value=screenvalue;
        }
        else if(buttontext == 'C'){
            screenvalue=' ';
            screen.value=screenvalue;
        }
        else if(buttontext == '='){
            screen.value = eval(screenvalue);
        }
        else{
            screenvalue +=buttontext;
            screen.value=screenvalue;
        }
    })
}