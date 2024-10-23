import { Magician } from "../magician";

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