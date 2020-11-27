// let infoDivText = document.querySelector("#infoDiv").textContent
document.getElementById("infoDiv").textContent = "get Element By Id worked"
// let infoDivText = document.getElementById("infoDiv").textContent
// infoDivText = "queryselector worked"

// console.log("click functionality reached")

function startCombat(){
  let currentEnemy = new Enemy(2, 10, "Basic Enemy", 20, 5, 5)
  let currentPlayer = new Player(0, 0, "Player", 100, 10, 10)
  let combat = new Combat(currentPlayer, currentEnemy)
  combat.performRoundOfCombat();
}