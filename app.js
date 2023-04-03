let buttonall = document.querySelectorAll(".button");
let resetbutton = document.querySelector(".resetb");
let score = document.querySelector(".output");
let usercount = 0;
let computercount = 0;

for(let t of buttonall)
{
  t.addEventListener("click" , scorecalc)
}
resetbutton.addEventListener("click" , resetall);

function scorecalc(event)
{
  let userselection = event.target.innerText;
  let choices = ["head" , "tail"];
  let randomselection = parseInt(Math.random()*choices.length);
  let computerselection = choices[randomselection];
  if(userselection.toUpperCase() === computerselection.toUpperCase())
  {
    console.log("You Won");
    usercount++;
    score.innerText = `User Score :${usercount} : Computer Score : ${computercount}`;
  }
  else
  {
    console.log("You Lost")
    computercount++;
    score.innerText = `User Score :${usercount}  : Computer Score : ${computercount}`;
  }
 
}

function resetall()
{
  usercount=0;
  computercount=0;
  score.innerText = `User Score :${usercount} : Computer Score : ${computercount}`;
}