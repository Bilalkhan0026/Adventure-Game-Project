import inquirer from "inquirer";
class Hero {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 20;
    }
    increaseHealth() {
        this.health = 100;
    }
}
// For Enemy
class Enemy {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 20;
    }
    increaseHealth() {
        this.health = 100;
    }
}
// part 2
async function main() {
    const { heroName } = await inquirer.prompt([
        {
            type: "input",
            name: "heroName",
            message: "Enter your hero name:",
        }
    ]);
    // Enemy obiject
    const { enemyType } = await inquirer.prompt([
        {
            type: "list",
            name: "enemyType",
            choices: ["alien", "witch", "zombie"],
            message: "Select the enemy you fight with:"
        }
    ]);
    // step 3 battle file
    const hero = new Hero(heroName);
    const enemy = new Enemy(enemyType);
    console.log(`${enemy.name} V/S ${hero.name}`);
    // setp 4 actin
    do {
        const { action } = await inquirer.prompt([
            {
                type: "list",
                name: "action",
                choices: ["Attack", "defend", "rang target", "run"],
                message: "choose the attck type to perform action",
            }
        ]);
        // setp 5 swith case
        switch (action) {
            case "Attack":
                const randomNum = Math.random();
                if (randomNum > 0.5) {
                    hero.decreaseHealth();
                    console.log(`${hero.name} health: ${hero.health}`);
                    console.log(`${enemy.name} health: ${enemy.health}`);
                    if (hero.health <= 0) {
                        console.log("You loss! try again");
                        return;
                    }
                }
                else {
                    enemy.decreaseHealth();
                    enemy.decreaseHealth();
                    console.log(`${hero.name} health: ${hero.health}`);
                    console.log(`${enemy.name} health: ${enemy.health}`);
                    if (enemy.health <= 0) {
                        console.log("Congratulation! you won");
                        return;
                    }
                }
                // enemy
                break;
        }
    } while (true);
    {
    }
}
main();
