#include "Wizard.h"
#include <iostream>

Wizard::Wizard(std::string _name, int _health, int _damage, int _mana)
    : Player(_name, _health, _damage), mana(_mana) {}

void Wizard::castSpell(Player* opponent) {
    if (mana >= damage) {
        mana -= damage;
        opponent->takeDamage(damage);
        std::cout << name << " casts a spell on " << opponent->getName() << " for " << damage << " damage.\n";
    } else {
        std::cout << name << " doesn't have enough mana to cast a spell!\n";
    }
}

int Wizard::getMana() const {
    return mana;
}

void Wizard::setMana(int _mana) {
    mana = _mana;
}
