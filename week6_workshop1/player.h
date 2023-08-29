#pragma once
#include <string>

class Player {
protected:
    std::string name;
    int health;
    int damage;

public:
    Player(std::string _name, int _health, int _damage);

    void attack(Player* opponent, int damage);
    void takeDamage(int damage);

    // Getters and setters
    std::string getName() const;
    int getHealth() const;
    void setHealth(int _health);
    int getDamage() const;
    void setDamage(int _damage);
};
