// main-1-1.cpp
#include <iostream>
#include "function-1-1.h"

int main() {
    int array[4][4] = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12},
        {13, 14, 15, 16}
    };

    int diagonal_sum = sum_diagonal(array);
    std::cout << "The sum of elements along the main diagonal is: " << diagonal_sum << std::endl;

    return 0;
}
