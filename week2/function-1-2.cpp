// function-1-2.cpp
#include "function-1-2.h"

int is_identity(int array[10][10]) {
    for (int i = 0; i < 10; i++) {
        for (int j = 0; j < 10; j++) {
            // Check if diagonal elements are 1 and non-diagonal elements are 0
            if (i == j && array[i][j] != 1) {
                return 0; // Not an identity matrix
            } else if (i != j && array[i][j] != 0) {
                return 0; // Not an identity matrix
            }
        }
    }
    return 1; // It is an identity matrix
}
