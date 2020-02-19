//-------------first  java testing script-------------------------------------

//under the name of john russelle domingo
//console.log('test this string');

//window.alert("hi");


function funcNames() {

  var hello="hello world";
  return hello;
} 
//console.log(funcNames());




//---------------js calculator--------------------------------------------------------


function calC(){
  //to get the value of string and convert to integer with parseInt();
var a = parseInt(document.querySelector('#num1').value);
//querySelector() used to get the id in html .value for value
var b = parseInt(document.querySelector('#num2').value);
//since its not integer we dont use parseInt() to convert value
var comp = document.querySelector('#comp').value;
var calculate;

    if (comp == 'add') {
      calculate = a+b;
    } else if (comp == 'subt') {
      calculate = a - b;
    } else if (comp == 'mult') {
      calculate = a*b;
    } else if (comp == 'div') {
      calculate = a/b;
    } else{
    //  calculate = a-b;
    } 

    for (var i = 1; i <10; i++) {
     //console.log(calculate +"<br>"+i);
      //write(i);
    }

    //--------------different types of output------------------------------


    document.querySelector('#hd1').innerHTML = calculate;
   //document.querySelector('#hd1').innerHTML = calculate + Math.random()*5;
    // document.querySelector('#res2').innerHTML = calculate+"<br>"+i;
      //document.getElementById('hd1').innerHTML = calculate+"<br>"+i;
    }



//document.write(calculate).innerHTML;
function numV(){
    for (var i = 1; i <5; i++) {
     console.log(i);
    }

}




//----------arrays experiments---------------------------------


//this is how to create arrays
var namesss = ["'dan'","'jan'","'wan'"];


//this is how to create object in javascript
let personage = {power:'superstrength',mobility:'super speed',class:'power'};

//this is how to call index in array in js
document.getElementById('check').innerHTML = namesss[0];

//this is how to call object and its property in js
document.getElementById('check').innerHTML = personage.mobility;
//console.log(namesss[]);
//alert(namesss);



//------------conditional statements---------------------------------


//old way of conditional statement testing
function conditionOld(){
  
  let conditionsiones = Math.floor(Math.random()*100); 
  console.log(conditionsiones);
if (conditionsiones >=50){
 document.getElementById('condi').innerHTML = 'the condition is true';
 console.log('true condition');
  } else {
  document.getElementById('condi').innerHTML = 'the condition is false';
  }
}


//-----------------------------------------------------------------------------


//new way to conditional statement/ ternary operation
//as you can see the variables and condition is the same but different construction

//create function
function conditionNew(){

  //create variable
  let conditionsiones = Math.floor(Math.random()*100);
  //console the variable to see its random value
  console.log(conditionsiones);
  //if statement that check if variable is eqaual to something
   conditionsiones >= 50?
   //if true this will execute
   document.getElementById('condi').innerHTML = 'the condition is true' 
  //else statement using :   
   :
   document.getElementById('condi').innerHTML = 'the condition is false';

}
//function conditionOld() and function conditionNew() does the same thing






//-------------looping samples------------------------------------------------------------



//for loops testing/sample codes
let datas = "";


//------loops for arrays----------------
/*
for(let i=0;i<namesss.length;i++){ //this will run if still true
  
//thos will spit out data vertically using html <br> tag
  //datas = datas +'<br>'+ i;

//this will spit out data horizontally 
    // datas = datas+"<br>"+i  ;

// this is to spitout data in array
    datas += namesss[i]+'<br>';
  
   
}

*/ 

//-----------loops for numbers--------


for(let i=0;i<20;i++){ //this will run if still true
 
  datas += i;

    if(i>=5){
      datas += i+'<br>';
      continue;
    }
      
     
  
  
  }
//  if(i>=10){
  //  datas += i;
  
   //}


// to call the datas variable
document.getElementById('datas').innerHTML = datas ;


//----key reminders- to use the ()=> you need to declare with  (const)-----


//------how to simplify your codes using ()=> -------
let changePwdstats = false;
const changePwdView = () =>{  
let passChange = document.getElementById('passWord');
 changePwdstats === false?
 passChange.setAttribute('type','text'):
 
  
 passChange.setAttribute('type','password');
 changePwdstats =true;
}

//====================================================================
//more object details
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below

//to change color property in spaceship
spaceship.color = 'glorious gold';

//to add numEngines in property
spaceship.numEngines = 5;

//to delete some properties.
delete spaceship['Secret Mission'];



//ways to access property

//spaceship[color];
//spaceship.color;

//=====================================================