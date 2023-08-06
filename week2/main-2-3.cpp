#include <iostream>

bool is_palindrome(int integers[], int length) {
    if (length <= 0) {
        return false;
    }

    int left = 0;
    int right = length - 1;

    while (left < right) {
        if (integers[left] != integers[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

int sum_array_elements(int integers[], int length) {
    if (length <= 0) {
        return -1;
    }

    int sum = 0;
    for (int i = 0; i < length; i++) {
        sum += integers[i];
    }
    return sum;
}

int sum_if_palindrome(int integers[], int length) {
    if (length <= 0) {
        return -1;
    }

    bool palindrome = is_palindrome(integers, length);
    if (palindrome) {
        return sum_array_elements(integers, length);
    } else {
        return -2;
    }
}
int main() {
    int array1[] = {1, 2, 3, 4, 5};
    int length1 = sizeof(array1) / sizeof(array1[0]);
    int result1 = sum_if_palindrome(array1, length1);

    std::cout << "Array: {1, 2, 3, 4, 5}\nResult: " << result1 << std::endl;

    int array2[] = {1, 2, 3, 2, 1};
    int length2 = sizeof(array2) / sizeof(array2[0]);
    int result2 = sum_if_palindrome(array2, length2);

    std::cout << "\nArray: {1, 2, 3, 2, 1}\nResult: " << result2 << std::endl;

    return 0;
}
