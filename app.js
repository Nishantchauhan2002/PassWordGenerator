const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"


// selectors
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")

const getRandomData=(dataset)=>{
    return dataset[Math.floor(Math.random()*dataset.length)]
}

const generatePassword=(password="")=>{
    if(upperInput.checked){
        password+=getRandomData(upperSet);
    }
    if(lowerInput.checked){
        password+=getRandomData(lowerSet);
    }
    if(numberInput.checked){
        password+=getRandomData(numberSet);
    }
    if(symbolInput.checked){
        password+=getRandomData(symbolSet);
    }
    if(totalChar.value>password.length){
        return generatePassword(password);
    }
    // console.log(password);
    // console.log(truncate(password,totalChar.value));
    passBox.innerText=truncate(password,totalChar.value);
}

document.getElementById("btn").addEventListener("click",
        function(){
            generatePassword();
        })
// generatePassword();

function truncate(str,num){
    if(str.length>num){
        let substr=str.substring(0,num);
        return substr;
    }
    else{
        return str;
    }
}
