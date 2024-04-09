var answer = document.getElementById("result");
// function to limit the digits after decimal 
function limitToThreeDecimals(number) {
   var mulNumber = number * 1000;
   var round = Math.round(mulNumber);
   var result = round / 1000;
   return result;
 }
// to know whether the number is a floating number or not 
function isFloat(n){
     return Number(n) === n && n % 1 !== 0;
 }
// to add number from the buttons 
function addNumber(number){
   answer.value += number ;

}
// to add the operator from the buttons 
function addoperation(operator){
  let  lastChar=answer.value.length-1
  if(answer.value[lastChar] == '-'||answer.value[lastChar] == '+'||answer.value[lastChar] == '/'||answer.value[lastChar] == '*'){
      if(operator=='.'){
        answer.value+=operator;
      }
  }
  else{
        if(operator == '-'||operator == '.'){
        answer.value += operator;
        }
        else if( answer.value == ''){
        answer.value = '';
        }
        else 
       
        answer.value+= operator;
      }
}
// to calculate  and display the result  when '=' button is clicked 
function result(){ 
      let x = answer.value;
      let y = math.evaluate(x);
      // console.log(isFloat(y));
      // console.log(typeof(y));
      if(isFloat(y)){
       answer.value = limitToThreeDecimals(y);
      }
      else{
         answer.value = y ;   
      }
    //  console.log(answer.value.length);
}
// to reset the input  field after when 'reset' is clicked 
function resetScreen() {
  answer.value ='';
}
// deletes the last element of from the string  in the input field  
function deleteLastElement() {
// console.log(typeof(answer.value));
answer.value = answer.value.slice(0, -1);
if (answer.value ==='') {
   resetScreen();
  }

}