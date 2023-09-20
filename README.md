[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11971934&assignment_repo_type=AssignmentRepo)
# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.


### Answer
A more directly helpful invariant would be that the last element in the array is the fibonacci value for the last index in of the array at that moment.  We start with the array \[0\].  Using the last index in the array, 0, we find that 0 is in fact the correct fibonacci value.  We then use the following case of \[0, 1\].  Using the last index, 1, we can find that the fibonacci value is in fact 1.  In every other following case, the program adds the previous two values in the array together, following the pattern of the fibonacci sequence.  We can see that \[0, 1, 1\] gives us the correct value of 1 for the index 2, and \[0, 1, 1, 2\] gives the proper value of 2 for the index 3, and so on.  This means that no matter the length of the list, the last value will always be the appropriate fibonacci value for the index.