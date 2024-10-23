import { Daemon } from "../daemon";

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