// function-1-3.cpp
#include "function-1-3.h"
#include <iostream>
#include <map>

void count_digits(int array[4][4]) {
    std::map<int, int> digitCount;

    // Initialize the map with counts of all digits from 0 to 9 as 0
    for (int i = 0; i < 10; i++) {
        digitCount[i] = 0;
    }

    // Count the occurrences of each digit in the matrix
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            int digit = array[i][j];
            digitCount[digit]++;
        }
    }

    // Print the results in the specified format
    for (int i = 0; i < 10; i++) {
        std::cout << i << ":" << digitCount[i];
        if (i < 9) {
            std::cout << ";";
        }
    }
    std::cout << std::endl;
}
