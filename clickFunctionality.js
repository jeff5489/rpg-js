// constructor(money, experiencePoints, name, healthPoints, attackPoints, defensePoints)
let currentEnemy = new Enemy(2, 10, "Basic Enemy", 20, 5, 0)
let currentPlayer = new Player(0, 0, "Player", 100, 10, 0)
let combat = new Combat(currentPlayer, currentEnemy)

document.querySelector("#infoDiv").textContent = "text content worked"

document.querySelector("#performCombat").addEventListener('click',function (){
  performRoundOfCombat()
}); 

function performRoundOfCombat(){
  combat.performRoundOfCombat();
}

// function createCombatObject(){
//   let currentEnemy = new Enemy(2, 10, "Basic Enemy", 20, 5, 0)
//   let currentPlayer = new Player(0, 0, "Player", 100, 10, 0)
//   let co = new combatObject(currentPlayer, currentEnemy)

// }





// create object that hold all of current players state
// create function that saves players state into save file

// new combatInstance
// ci.round of combat
// ci.
