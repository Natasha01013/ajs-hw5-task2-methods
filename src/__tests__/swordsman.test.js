import { Swordsman } from "../swordsman";

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