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

// let b = new Being("name", "healthpoints", "at", "df");
// console.log(JSON.stringify(b))

// let c = new CharacterThatFights("ep", "name", "healthpoints", "at", "df");
// console.log(JSON.stringify(c))

// let player1 = new Player("money", "ep", "name", "healthpoints", "at", "df");
// console.log(JSON.stringify(player1))

class Combat {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }
  
  playerIsDead = false;
  enemyIsDead = false;
  
  performRoundOfCombat(){

    if(this.player.attackPoints - this.enemy.defensePoints > 0){
      this.enemy.healthPoints = this.player.attackPoints - this.enemy.defensePoints
    } else if(this.player.attackPoints - this.enemy.defensePoints < 0){
      console.log("this.player.attackPoints - this.enemy.defensePoints < 0")
    }
    checkForDead()

    if(this.enemy.attackPoints - this.player.defensePoints > 0){
      this.player.healthPoints = this.enemy.attackPoints - this.player.defensePoints
    } else if(this.enemy.attackPoints - this.player.defensePoints < 0){
      console.log("this.enemy.attackPoints - this.player.defensePoints < 0")
    }
    checkForDead()

  }

  checkForDead(){
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

