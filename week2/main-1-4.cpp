// main-1-4.cpp
#include "function-1-4.h"

int main() {
    int scale = 3;
    int threebythree[3][3] = {
        {0, 1, 2},
        {3, 4, 5},
        {6, 7, 8}
    };

    print_scaled(threebythree, scale);

    return 0;
}
