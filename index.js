let cookieName = prompt("What should we name your cookie: ");
let multiplier = 1;
let cookieCountObj =  document.querySelector('.count');
let upgradeCostObj = document.querySelector('.cost');
document.querySelector('.name').innerHTML = cookieName;


function addCookie(){
  let count = Number(cookieCountObj.innerHTML);
  cookieCountObj.innerHTML = count + (multiplier * 1);
  canUpgrade();
}
function updateColor(color){
  upgradeCostObj.style.color = color;
}

function canUpgrade(){
  let count = Number(cookieCountObj.innerHTML);
  let cost = Number(upgradeCostObj.innerHTML);
  if(count >= cost){
    updateColor('#B4FF29');
    return true;
  } else {
    updateColor('red')
    return false;
  }
}
function buyUpgrade(){
  if(canUpgrade()){
    multiplier *= 2;
    cookieCount = Number(cookieCountObj.innerHTML);
    upgradeCost = Number(upgradeCostObj.innerHTML);

    cookieCountObj.innerHTML = cookieCount - upgradeCost;
    upgradeCostObj.innerHTML = upgradeCost * 4;

    //reset color of cost if neccessary
    updateColor('red');
  }else {
    alert("You need more cookies for this upgrade");
  }
}
