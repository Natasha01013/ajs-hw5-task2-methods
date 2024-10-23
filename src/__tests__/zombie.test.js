import { Zombie } from "../zombie";

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