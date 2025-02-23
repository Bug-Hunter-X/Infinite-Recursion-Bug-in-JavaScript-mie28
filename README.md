# Infinite Recursion Bug in JavaScript

This repository demonstrates a common error in recursive JavaScript functions: infinite recursion.

## Bug Description

The `foo` function is intended to return `true` if the input is 1, `false` if the input is 2, and recursively calls itself with `x-2` for other inputs.  However, if the input is an odd number greater than 1, the recursion will never reach the base cases (x == 1 or x == 2), leading to a stack overflow.

## Bug Solution

The solution involves adding a check to handle the odd numbers appropriately.