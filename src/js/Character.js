export default class Character {
    constructor(name = '', type = '') {
        if (name.length >= 2 && name.length <= 10) this.name = name;
        else throw new Error('Длинна имени должна быть в пределах 2-10 символов');
        if (
            type === 'Bowman' || type === 'Swordsman' || type === 'Magician'
            || type === 'Daemon' || type === 'Undead' || type === 'Zombie'
        ) {
            this.type = type;
        } else {
            throw new Error('Некорректный тип');
        }
        this.health = 100;
        this.level = 1;
    }

    levelUp() {
        if (this.health <= 0) throw new Error('Нельзя повысить уровень умершего');
        this.level++;
        this.health = 100;
        this.defense = (this.defense * 0.2) + this.defense;
        this.attack = (this.attack * 0.2) + this.attack;
    }

    damage(points) {
        if (this.health <= 0) throw new Error('Нельзя получить урон будучи мертвым');
        this.health -= points * (1 - this.defense / 100);
    }
}
