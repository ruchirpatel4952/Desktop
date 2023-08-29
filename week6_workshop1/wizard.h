#pragma once
#include "Player.h"

class Wizard : public Player {
private:
    int mana;

public:
    Wizard(std::string _name, int _health, int _damage, int _mana);

    void castSpell(Player* opponent);

    // Getter and setter for mana
    int getMana() const;
    void setMana(int _mana);
};
