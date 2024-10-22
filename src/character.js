export class Character {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = 0;
        this.defence = 0;

        let types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if(!types.includes(type)) {
            throw new Error('Не верный тип')
        }

        if(typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть строкой длиной от 2 до 10 символов');
        }
    }

    levelUp() {
        if(!this.health === 0) {
            this.level += 1;
            this.attack += 1.2;
            this.defence += 1.2;
            this.health = 100;
        } else {
            throw new Error('нельзя повысить левел умершего');
        }
    }

//меняет внутреннее состояние объекта (points - это урон, наносимый персонажу)
    damage(points) {
        if(this.health >= 0) {
            this.health -= points * (1 - this.defence / 100)
        }
    }
}