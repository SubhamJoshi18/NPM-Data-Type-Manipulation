export const firstLetterOfString = (str) => {
  if (typeof str === "string") {
    return str.substring(0, str.length - 1);
  }
};

export const checkString = (str) => {
  return typeof str === "string" ? true : false;
};

export const capitalizeFirstLetter = (str) => {
  return str[0].toUpperCase() + str.substring(1);
};

export function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

//Array
export const checkArrayLength = (array) => {
  return typeof array === "object" ? array.length : undefined;
};

export const linearSearch = (array, key) => {
  const keyToSearch = key;
  let found = false;
  array.forEach((data) => {
    if (data === keyToSearch) {
      found = true;
    }
  });
  return found;
};

export const sortArrayInAscending = (array) => {
  let arrayToSort = array;
  let i, j;
  for (i = 0; i < arrayToSort.length; i++) {
    for (j = 0; j < arrayToSort.length; j++) {
      if (arrayToSort[j] > arrayToSort[j + 1]) {
        let temp = arrayToSort[j];
        arrayToSort[j] = arrayToSort[j + 1];
        arrayToSort[j + 1] = temp;
      }
    }
  }
  return arrayToSort;
};

export const sortArrayDescending = (array) => {
  let arrayToSort = array;
  let i, j;
  for (i = 0; i < arrayToSort.length; i++) {
    for (j = 0; j < arrayToSort.length; j++) {
      if (arrayToSort[j] < arrayToSort[j + 1]) {
        let temp = arrayToSort[j];
        arrayToSort[j] = arrayToSort[j + 1];
        arrayToSort[j + 1] = temp;
      }
    }
  }
  return arrayToSort;
};

//Numbers

export const checkNumber = (number) => {
  return typeof number === "number" ? true : falses;
};

export const numberToString = (number) => {
  return number.toString();
};

//Object

export const allKeys = (object) => {
  return Object.keys(object);
};

export const checkKeyInObject = (object, targetKey) => {
  for (const [key, value] of Object.entries(object)) {
    if (key === targetKey) {
      return key;
    }
  }
};

export const getValueInObject = (object, targetValue) => {
  for (const [key, value] of Object.entries(object)) {
    if (value === targetValue) {
      return value;
    }
  }
};
