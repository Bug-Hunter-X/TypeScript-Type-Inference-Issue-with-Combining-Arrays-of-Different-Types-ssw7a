# TypeScript Type Inference Issue with Combining Arrays of Different Types

This repository demonstrates a type inference issue in TypeScript when combining arrays of different types using the spread syntax.  The problem occurs when the compiler infers a union type ('string | number' in this example) instead of a more restrictive type, leading to type errors.

## Bug Description

The `combineArrays` function aims to combine two arrays of any type (`T`). However, when called with arrays of different types, the compiler infers the combined array's type as a union of those types, which may not be the desired outcome.

## Solution

The solution involves using type guards to explicitly check for the types of the arrays being combined or using type assertions if you are certain about the types involved.  The provided example shows a solution that uses a type assertion, acknowledging that the arrays passed will always be of compatible types. Note: Using type assertions without understanding the implications is risky and should be avoided if possible. 