// function-1-5.cpp
#include "function-1-5.h"
#include <iostream>

void print_summed(int array1[3][3], int array2[3][3]) {
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            int sum = array1[i][j] + array2[i][j];
            std::cout << sum;
            if (j < 2) {
                std::cout << " ";
            }
        }
        std::cout << std::endl;
    }
}
