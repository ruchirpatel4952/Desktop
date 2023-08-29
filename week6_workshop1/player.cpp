#include "Player.h"
#include <iostream>

Player::Player(std::string _name, int _health, int _damage)
    : name(_name), health(_health), damage(_damage) {}

void Player::attack(Player* opponent, int damage) {
    opponent->takeDamage(damage);
}

void Player::takeDamage(int damage) {
    health -= damage;
    std::cout << name << " takes " << damage << " damage. Remaining health: " << health << "\n";
}

std::string Player::getName() const {
    return name;
}

int Player::getHealth() const {
    return health;
}

void Player::setHealth(int _health) {
    health = _health;
}

int Player::getDamage() const {
    return damage;
}

void Player::setDamage(int _damage) {
    damage = _damage;
}
