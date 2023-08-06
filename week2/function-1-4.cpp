// function-1-4.cpp
#include "function-1-4.h"
#include <iostream>

void print_scaled(int array[3][3], int scale) {
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            std::cout << array[i][j] * scale;
            if (j < 2) {
                std::cout << " ";
            }
        }
        std::cout << std::endl;
    }
}
