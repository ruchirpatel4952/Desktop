#include <iostream>
#include <string>
#include <bitset>

void print_binary_str(std::string decimal_number) {
    int decimal_value = std::stoi(decimal_number);

    // Convert decimal_value to binary representation
    std::bitset<32> binary_representation(decimal_value);

    // Find the first '1' in the binary representation
    int first_one = 31;
    while (first_one >= 0 && !binary_representation.test(first_one)) {
        first_one--;
    }

    // Print the binary representation after the first '1'
    for (int i = first_one; i >= 0; i--) {
        std::cout << binary_representation.test(i);
    }

    std::cout << std::endl;
}
int main() {
    print_binary_str("0");
    print_binary_str("789");
    print_binary_str("123456789");
    return 0;
}
