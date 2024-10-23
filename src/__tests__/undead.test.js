import { Undead } from "../undead";

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