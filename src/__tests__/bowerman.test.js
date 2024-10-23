import { Bowerman } from "../bowerman";

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