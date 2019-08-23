
const player = {
                name: null,
                energy: 100,
                lives: 3,
                loseEnergy: function (damage) {
                    this.energy - damage > 0 ? this.energy -= damage : this.loseLife();
                },
                recoverEnergy: function (damage) {
                    if (this.energy + damage <= 100) 
                        this.energy += damage;
                                       
                },
                loseLife: function () {
                    this.lives--;
                },
                recoverLife: function () {
                    if (this.lives + 1 <= 99) 
                        this.lives++;                                           
                },
}
player.name = 'Gloria';
player.loseLife();
player.loseEnergy(10);
player.loseEnergy(5);
player.loseEnergy(15);
player.loseEnergy(20);
player.recoverEnergy(10);
player.loseEnergy(30);
player.loseEnergy(40);
player.loseLife();
player.recoverLife();
player.recoverLife();

console.log(`The player ${player.name} has ${player.energy} energy % and  ${player.lives} lifes`);

