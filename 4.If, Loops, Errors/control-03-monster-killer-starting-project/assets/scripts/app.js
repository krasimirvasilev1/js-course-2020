const PLAYER_NORMAL_ATTACK_VALUE = 10;
const PLAYER_STRONG_ATTACK_VALUE = 17;
const PLAYER_HEAL_VALUE = 14;
const MONSTER_ATTACK_VALUE = 14;

const victoryMessage = 'You won!';
const defeatMessage = 'You lost!';
const drawMessage = 'Draw!';
const bonusLifeMessage = 'You was lucky and your bonus life saved you !';
let finalResult = 'Game ended! ';

let choosenMaxHealth = 100;
let hasBonusLife = true;
let currentPlayerHealth = choosenMaxHealth;
let currentMonsterHealth = choosenMaxHealth;

adjustHealthBars(100);

function reset() {
  currentPlayerHealth = choosenMaxHealth;
  currentMonsterHealth = choosenMaxHealth;

  resetGame(choosenMaxHealth);
}

function normalAttackHandler() {
  evaluateAttackRound(PLAYER_NORMAL_ATTACK_VALUE);
}

function strongAttackHandler() {
  evaluateAttackRound(PLAYER_STRONG_ATTACK_VALUE);
}

function healHandler() {
    let initialPlayerHealth = currentPlayerHealth;
    increasePlayerHealth(PLAYER_HEAL_VALUE);
    currentPlayerHealth += PLAYER_HEAL_VALUE;

    monsterHits();
    checkGameStatus(initialPlayerHealth);
}

function evaluateAttackRound(playerTypeOfAttack) {
    let initialPlayerHealth = currentPlayerHealth;
    playerHits(playerTypeOfAttack);
    monsterHits();

    checkGameStatus(initialPlayerHealth);
}

function playerHits(playerTypeOfAttack) {
  const playerDealtDamage = dealMonsterDamage(playerTypeOfAttack);
  currentMonsterHealth -= playerDealtDamage;
}

function monsterHits() {
  const monsterDealtDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= monsterDealtDamage;
}

function checkGameStatus(initialPlayerHealth) {
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    currentPlayerHealth = initialPlayerHealth;
    removeBonusLife();
    alert(bonusLifeMessage);
    setPlayerHealth(initialPlayerHealth);
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert(victoryMessage);
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert(defeatMessage);
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert(drawMessage);
  }

  // Check if the game ended with some result - win, lose or draw and reset the game
  if (
    (currentMonsterHealth <= 0 && currentPlayerHealth > 0) ||
    (currentPlayerHealth <= 0 && currentMonsterHealth > 0) ||
    (currentPlayerHealth <= 0 && currentMonsterHealth <= 0)
  ) {
    reset();
    alert(`${finalResult}`);
  }
}

attackBtn.addEventListener('click', normalAttackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healHandler);
