import { Character } from "../character";
import { Zombie } from "../zombie";
import { Undead } from "../undead";
import { Bowerman } from "../bowerman";

test("error in name", () => {
    expect(() => new Character('A', 'Swordsman')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
});

test("error in type", () => {
    expect(() => new Character('Andrey', 'Sword')).toThrow('Не верный тип');
});

test("check method levelUp", () => {
    let bowerman = new Bowerman('Andrey');
    bowerman.levelUp();
    const result = {
        name: 'Andrey',
        type: 'Bowerman',
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
    };
    expect(bowerman).toEqual(result);
});

test("check method levelUp if health 0", () => {
    expect(() => {
        const zombie = new Zombie('Olga');
        zombie.health = 0;
        zombie.levelUp();
    }).toThrow('Нельзя повысить уровень умершего');
});

test("check method damage if health < 0", () => {
    expect(() => {
        let undead = new Undead('Sergey');
        undead.health = -1;
        undead.damage(10);
    }).toThrow('Вы мертвы');
});

test("check method damage", () => {
    let undead = new Undead('Sergey');
    undead.damage(10);
    expect(undead.health).toBe(92.5);
});