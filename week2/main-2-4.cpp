#include <iostream>

int array_min(int integers[], int length) {
    if (length <= 0) {
        return -1;
    }

    int min_value = integers[0];
    for (int i = 1; i < length; i++) {
        if (integers[i] < min_value) {
            min_value = integers[i];
        }
    }
    return min_value;
}

int array_max(int integers[], int length) {
    if (length <= 0) {
        return -1;
    }

    int max_value = integers[0];
    for (int i = 1; i < length; i++) {
        if (integers[i] > max_value) {
            max_value = integers[i];
        }
    }
    return max_value;
}

int sum_min_max(int integers[], int length) {
    if (length <= 0) {
        return -1;
    }

    int min_value = array_min(integers, length);
    int max_value = array_max(integers, length);

    return min_value + max_value;
}
int main() {
    int array1[] = {1, 2, 3, 4, 5};
    int length1 = sizeof(array1) / sizeof(array1[0]);
    int result1 = sum_min_max(array1, length1);

    std::cout << "Array: {1, 2, 3, 4, 5}\nResult: " << result1 << std::endl;

    int array2[] = {-5, 10, 3, 2, -8};
    int length2 = sizeof(array2) / sizeof(array2[0]);
    int result2 = sum_min_max(array2, length2);

    std::cout << "\nArray: {-5, 10, 3, 2, -8}\nResult: " << result2 << std::endl;

    return 0;
}
