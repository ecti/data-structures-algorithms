/**
 * Given "12 * 4 + 6 * 2 * 3 + 8". Calculate result.
 * 
 * Method 1: split the string by operators with respect to order of operations. * / + -
 * Method 2: using 2 stacks, loop over every character once and process
 */


const calculate1 = (input) => {
    let result = 0;
    const multiplications = input.split('+');

    const additions = multiplications.map((multiplication) => {
        let integers = multiplication.split('*');
        let product = 1;
        integers.forEach((integer) => {
            product *= parseInt(integer, 10);
        });

        return product;
    });

    additions.forEach((addition) => {
        result += addition;    
    });

    return result;
};

const calculate2 = (input) => {
    
};

// Driver Program
(() => {
    const input = '12 * 4 + 6 * 2 * 3 + 8';

    console.log(calculate1(input));
})();