#pragma once
#include "Player.h"

class Warrior : public Player {
private:
    std::string weapon;

public:
    Warrior(std::string _name, int _health, int _damage, std::string _weapon);

    void swingWeapon(Player* opponent);

    // Getter and setter for weapon
    std::string getWeapon() const;
    void setWeapon(std::string _weapon);
};
