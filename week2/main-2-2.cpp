#include <iostream>

int binary_to_int(int binary_digits[], int number_of_digits) {
    int result = 0;
    for (int i = 0; i < number_of_digits; i++) {
        result = (result << 1) + binary_digits[i];
    }
    return result;
}

bool is_palindrome(int array[], int size) {
    int left = 0;
    int right = size - 1;

    while (left < right) {
        if (array[left] != array[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
int main() {
    int binary_digits1[] = {1, 0, 1};
    int size1 = sizeof(binary_digits1) / sizeof(binary_digits1[0]);
    int decimal1 = binary_to_int(binary_digits1, size1);
    bool palindrome1 = is_palindrome(binary_digits1, size1);

    std::cout << "Binary: 101\nDecimal: " << decimal1 << "\nIs Palindrome: " << std::boolalpha << palindrome1 << std::endl;

    int binary_digits2[] = {1, 2, 0, 0, 2, 1};
    int size2 = sizeof(binary_digits2) / sizeof(binary_digits2[0]);
    int decimal2 = binary_to_int(binary_digits2, size2);
    bool palindrome2 = is_palindrome(binary_digits2, size2);

    std::cout << "\nBinary: 120021\nDecimal: " << decimal2 << "\nIs Palindrome: " << std::boolalpha << palindrome2 << std::endl;

    return 0;
}
