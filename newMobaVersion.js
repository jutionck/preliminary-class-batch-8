// modifkasi dari file moba.js
// 2 grup: TIM vs ENEMY

const team = {
  gold: [2000, 10500, 9800, 11000, 11200],
  hp: [80, 35, 25, 60, 90],
  kill: 40,
};

const enemy = {
  turret: 2,
  kill: 28,
};

const sum = (arr) => arr.reduce((a, b) => a + b, 0);
const avg = (arr) => sum(arr) / arr.length;

const decideStrategy = (team, enemy) => {
  const totalGold = sum(team.gold);
  const avgHP = Math.round(avg(team.hp));
  const totalTeamKill = team.kill - enemy.kill;

  if (avgHP < 40) {
    console.log('HP tim di bawah 40, mundur saja dan recall dulu...');
    return;
  }

  if (totalGold >= 50000 && enemy.turret <= 3) {
    console.log('Serang lord....');
    return;
  }

  if (totalTeamKill >= 10) {
    console.log('Push semua lane....');
    return;
  }

  console.log('Farming aja dulu...');
};

console.log('===Total Gold===');
console.log(sum(team.gold));
console.log('===Rata-rata HP===');
console.log(Math.round(avg(team.hp)));
console.log('===Strategi===');
decideStrategy(team, enemy);
