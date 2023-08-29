#include "Warrior.h"
#include <iostream>

Warrior::Warrior(std::string _name, int _health, int _damage, std::string _weapon)
    : Player(_name, _health, _damage), weapon(_weapon) {}

void Warrior::swingWeapon(Player* opponent) {
    opponent->takeDamage(damage);
    std::cout << name << " swings their " << weapon << " at " << opponent->getName() << "!\n";
}

std::string Warrior::getWeapon() const {
    return weapon;
}

void Warrior::setWeapon(std::string _weapon) {
    weapon = _weapon;
}
