import Character from '../Character';
import Bowerman from '../Bowerman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Undead from '../Undead';
import Zombie from '../Zombie';
import Daemon from '../Daemon';

test('should return type', () => {
    const character = new Character('asd', 'Magician');
    expect(character.type).toBe('Magician');
});

test('should return name error', () => {
    expect(() => new Character('d', 'Daemon')).toThrow('Длинна имени должна быть в пределах 2-10 символов');
});

test('should return type error', () => {
    expect(() => new Character('abc', 'test')).toThrow('Некорректный тип');
});

test('should return bowman', () => {
    const bowman = new Bowerman('asd');
    expect(bowman.type).toBe('Bowman');
});

test('should return magician', () => {
    const magician = new Magician('qwe');
    expect(magician.type).toBe('Magician');
});

test('should return undead', () => {
    const undead = new Undead('asd');
    expect(undead.type).toBe('Undead');
});

test('should return swordsman', () => {
    const sword = new Swordsman('asd');
    expect(sword.type).toBe('Swordsman');
});

test('should return daemon', () => {
    const daemon = new Daemon('asd');
    expect(daemon.type).toBe('Daemon');
});

test('should return zombie', () => {
    const zombie = new Zombie('asd');
    expect(zombie.type).toBe('Zombie');
});

test('attack after level up', () => {
    const magician = new Magician('tester');
    magician.levelUp();
    expect(magician.attack).toBe(12);
});

test('should return current health after level up', () => {
    const magician = new Magician('tester');
    magician.health = 55;
    magician.levelUp();
    expect(magician.health).toBe(100);
});

test('should return health after taking damage', () => {
    const undead = new Undead('tester');
    undead.damage(50);
    expect(undead.health).toBe(62.5);
});
