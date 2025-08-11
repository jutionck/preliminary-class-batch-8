let teamGold = [2000, 10500, 9800, 11000, 11200];
let enemyTurret = 2;
let teamHP = [80, 35, 25, 60, 90];
let teamKill = 40;
let enemyKill = 28;

const sum = (arr) => arr.reduce((a, b) => a + b, 0);
const avg = (arr) => sum(arr) / arr.length;

const decideStrategy = (teamGold, enemyTurret, teamHP, teamKill, enemyKill) => {
  // TOTAL GOLD
  const totalGold = sum(teamGold);
  // AVG HP
  const avgHP = Math.round(avg(teamHP)); // 0,000000000
  // TEAM KILL
  const totalTeamKill = teamKill - enemyKill;

  //CEK HP
  if (avgHP < 40) {
    console.log('HP tim di bawah 40, mundur saja dan recall dulu...');
    return;
  }

  // cek lainnya di bawah ini...
  if (totalGold >= 50000 && enemyTurret <= 3) {
    console.log('Serang lord....');
    return;
  }

  if (totalTeamKill >= 10) {
    console.log('Push semua lane....');
    return;
  }
};

console.log('===Total Gold===');
console.log(sum(teamGold));
console.log('===Rata-rata HP===');
console.log(Math.round(avg(teamHP)));
console.log('===Strategi===');
decideStrategy(teamGold, enemyTurret, teamHP, teamKill, enemyKill);
