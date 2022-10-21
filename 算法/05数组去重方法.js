let arr = [1, 1, 2, 3, 3, 4];

//方式一
function f1() {
  let newArr = [];
  arr.forEach((item) => {
    if (newArr.indexOf(item) == -1) {
      newArr.push(item);
    }
  });
  return newArr;
}

let newArr = f1(arr);
console.log(newArr);

// 方式二 使用set数据结构
let s = new Set(arr);
let newArr1 = [...s];
let newArr2 = Array.from(s); //接受一个可迭代对象
console.log(newArr1);
console.log(newArr2);
