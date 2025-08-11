// TIM A vs TIM B
// Nama Hero, HP, Damage
const team = [
  { name: 'Miya', hp: 100, damage: 25 },
  { name: 'Layla', hp: 100, damage: 45 },
  { name: 'Zilong', hp: 100, damage: 30 },
];

const enemy = [
  { name: 'Moskov', hp: 100, damage: 25 },
  { name: 'Kadita', hp: 100, damage: 45 },
  { name: 'Eudora', hp: 100, damage: 30 },
];

// fungsi menampung serangan baik itu tim ke enemy, atau enemy ke tim
// pass by reference...
const attack = (attacker, defender) => {
  defender.hp -= attacker.damage;
  if (defender.hp < 0) defender.hp = 0;
};
// siapkan fungsi bertarung
const battle = (team, enemy) => {
  // simulasi nyerang baik itu team dan lawan
  // manfaatkan looping untuk iterasi anatara tim dan lawan
  // stopper:
  let round = 1;
  while (team.length > 0 && enemy.length > 0) {
    console.log('====Rounde:', round);

    // TIM menyerang musuh
    // manfaatkan looping modern
    team.forEach((hero, i) => {
      if (hero.hp <= 0) return;

      if (i < enemy.length) {
        attack(hero, enemy[i]);
        console.log(
          `Hero tim ${hero.name} menyerang ${enemy[i].name} - HP ${enemy[i].hp}`
        );
      }
    });

    enemy = enemy.filter((h) => h.hp > 0);

    // ENEMY menyerah tim
    enemy.forEach((hero, i) => {
      if (hero.hp <= 0) return;

      if (i < team.length) {
        attack(hero, team[i]);
        console.log(
          `Hero enemy ${hero.name} menyerang ${team[i].name} - HP ${team[i].hp}`
        );
      }
    });

    team = team.filter((h) => h.hp > 0);

    round++;
  }
};

battle(team, enemy);

console.log();

if (team.length > 0) {
  console.log('TIM memenangkan pertandingan');
} else if (enemy.length > 0) {
  console.log('Musuh memenangkan pertandingan');
} else {
  console.log('Wah seri nih boss...');
}
