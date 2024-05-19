function formatArrayStrings(strArray, numArray) {
    return strArray.map((str, i) => {
      if (numArray[i] % 2 === 0) {
        return str.toUpperCase();
      } else {
        return str.toLowerCase();
      }
    });
  }