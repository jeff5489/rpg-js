class Being { 
  constructor(name, healthPoints, attackPoints, defensePoints) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPoints = attackPoints;
    this.defensePoints = defensePoints;
  }
}

class CharacterThatFights extends Being{
  constructor(experiencePoints, name, healthPoints, attackPoints, defensePoints){
    super(name, healthPoints, attackPoints, defensePoints);
    this.experiencePoints = experiencePoints;
  }
  attack(){
    return this.attackPoints;
  }
  defend(){
    return this.defensePoints;
  }
}

class Enemy extends CharacterThatFights {
  constructor(money, experiencePoints, name, healthPoints, attackPoints, defensePoints){
    super(experiencePoints, name, healthPoints, attackPoints, defensePoints);
    this.money = money;
  }
}

class Player extends CharacterThatFights {
  constructor(money, experiencePoints, name, healthPoints, attackPoints, defensePoints){
    super(experiencePoints, name, healthPoints, attackPoints, defensePoints);
    this.money = money;
  }
  restoreHealth(amount){
    this.healthPoints = this.healthPoints + amount;
  }
}

function combatObject(player, enemy){
  const obj = {};
  obj.player = player
  obj.enemy = enemy
  obj.performRoundOfCombat = function () {
    if(player.attackPoints - enemy.defensePoints > 0){
      enemy.healthPoints = enemy.healthPoints - (player.attackPoints - enemy.defensePoints)
      console.log("Enemy HP: " + enemy.healthPoints)
    } else if(player.attackPoints - enemy.defensePoints < 0){
      console.log("player.attackPoints - enemy.defensePoints < 0")
    }
    checkForDead()

    if(enemy.attackPoints - player.defensePoints > 0){
      player.healthPoints = player.healthPoints - (enemy.attackPoints - player.defensePoints)
      console.log("Player HP: " + player.healthPoints)
    } else if(enemy.attackPoints - player.defensePoints < 0){
      console.log("enemy.attackPoints - player.defensePoints < 0")
    }
    checkForDead()
    
  }
  obj.checkForDead() = function () {
    if(this.enemy.healthPoints < 0){
      this.enemyIsDead = true;
      this.player.experiencePoints += this.enemy.experiencePoints
      this.player.money += this.enemy.money

      console.log("Enemy is dead\n" +
      this.enemy.experiencePoints + ": Experience Points added\n" +
      this.enemy.money + ": Experience Points money\n"
      )
    }
    if(this.player.healthPoints < 0){
      this.playerIsDead = true;
      this.player.money -= this.enemy.money
    }
  }

}

class Combat {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }
  
  playerIsDead = false;
  enemyIsDead = false;
  
  performRoundOfCombat(){

    if(this.player.attackPoints - this.enemy.defensePoints > 0){
      this.enemy.healthPoints = this.enemy.healthPoints - (this.player.attackPoints - this.enemy.defensePoints)
      console.log("Enemy HP: " + this.enemy.healthPoints)
    } else if(this.player.attackPoints - this.enemy.defensePoints < 0){
      console.log("this.player.attackPoints - this.enemy.defensePoints < 0")
    }
    this.checkForDead()

    if(this.enemy.attackPoints - this.player.defensePoints > 0){
      this.player.healthPoints = this.player.healthPoints - (this.enemy.attackPoints - this.player.defensePoints)
      console.log("Player HP: " + this.player.healthPoints)
    } else if(this.enemy.attackPoints - this.player.defensePoints < 0){
      console.log("this.enemy.attackPoints - this.player.defensePoints < 0")
    }
    this.checkForDead()

  }

  checkForDead(){
    if(this.enemy.healthPoints <= 0){
      this.enemyIsDead = true;
      this.player.experiencePoints += this.enemy.experiencePoints
      this.player.money += this.enemy.money

      console.log("Enemy is dead\n" +
      this.enemy.experiencePoints + ": Experience Points added\n" +
      this.enemy.money + ": Experience Points money\n"
      )
    }
    if(this.player.healthPoints <= 0){
      this.playerIsDead = true;
      this.player.money -= this.enemy.money
    }
  }

}

class CombatInstance {
  // constructor(player, enemy) {
  //   this.player = player;
  //   this.enemy = enemy;
  // }

  createCombat(player, enemy){
    let currentEnemy = new Enemy(2, 10, "Basic Enemy", 20, 5, 0)
    let currentPlayer = new Player(0, 0, "Player", 100, 10, 0)
    let combat = new Combat(currentPlayer, currentEnemy)
  }
}