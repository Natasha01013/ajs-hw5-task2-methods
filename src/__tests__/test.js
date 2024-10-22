import { Character } from "../character";
import { Bowerman } from "../bowerman";
import { Swordsman } from "../swordsman";
import { Magician } from "../magician";
import { Daemon } from "../daemon";
import { Undead } from "../undead";
import { Zombie } from "../zombie";

test("error in name", () => {
    expect(() => new Character('A', 'Swordsman')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
});

test("error in type", () => {
    expect(() => new Character('Andrey', 'Sword')).toThrow('Не верный тип');
});

test("check method levelUp", () => {
    let character = new Character('Andrey', 'Bowerman');
    const level = character.levelUp();
    const result = {
        name: 'Andrey',
        type: 'Bowerman',
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
    };
    expect(level).toEqual(result);
});
test("check method levelUp if health 0", () => {
    expect(() => {
        const zombie = new Zombie('Olga');
        zombie.health = 0;
        zombie.levelUp();
    }).toThrow('нельзя повысить левел умершего');
});

test("check method damage", () => {
    let undead = new Undead('Sergey');
    undead.damage(10);
    expect(undead.health).toBe(92);
});

test("check Bowerman", ()=> {
    const b = new Bowerman('Ivan');
    const result = {
        name: 'Ivan',
        type: 'Bowerman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(b).toEqual(result);
});

test("check Swordsman", ()=> {
    const s = new Swordsman('Oleg');
    const result = {
        name: 'Oleg',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    expect(s).toEqual(result);
});

test("check Magician", ()=> {
    const m = new Magician('Anton');
    const result = {
        name: 'Anton',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    expect(m).toEqual(result);
});

test("check Daemon", ()=> {
    const d = new Daemon('Andrey');
    const result = {
        name: 'Andrey',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    expect(d).toEqual(result);
});

test("check Undead", ()=> {
    const u = new Undead('Sergey');
    const result = {
        name: 'Sergey',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(u).toEqual(result);
});

test("check Zombie", ()=> {
    const z = new Zombie('Olga');
    const result = {
        name: 'Olga',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    expect(z).toEqual(result);
});