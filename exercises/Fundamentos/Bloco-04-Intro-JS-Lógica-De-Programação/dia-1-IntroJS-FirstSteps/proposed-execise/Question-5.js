let arrAngle= [23,22,135];
let sum = 0;
for(let i = 0; i < arrAngle.length; i++){
  sum += arrAngle[i];}

if(sum === 180){
  console.log(true);}
else if(sum > 0 && sum != 180){
  console.log(false);}
else{
  console.log("ERRO! O ângulo deve ter um valor positivo");}