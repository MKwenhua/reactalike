const flattenArray = (a, b) => {
   return a.concat(Array.isArray(b) ? b.reduce(flatten, []) : b);
}

function flattenIteration(arr, flatArr) {
   flatArr = flatArr || [];

   var length = arr.length | 0;

   for (var index = 0; index < length; index = index + 1) {
      var item = arr[index];
      item.constructor === Array ? flattenIteration(item, flatArr) : flatArr[flatArr.length] = item;
   }

   return flatArr;
}

const smoothNested = (nested) => {
   if (!nested) return []
   return nested.reduce(flattenArray, []).filter((ne) => ne !== null && ne !== undefined);
}

const flatten = (nested) => {
   return nested.reduce(flattenArray, []);
}

const capitalize = (string) => {
   return string.charAt(0).toUpperCase() + string.slice(1);
}

export {
  smoothNested,
  flatten,
  capitalize
}
