function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2] as T[];
}

const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];

// The following line will now throw an error because the types are incompatible.
// const combinedArray = combineArrays(arr1, arr2);

const arr3 = [1,2,3];
const arr4 = [4,5,6];
const combinedArray2 = combineArrays(arr3, arr4); //This will work correctly
console.log(combinedArray2) 