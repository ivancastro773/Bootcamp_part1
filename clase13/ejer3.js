let arr = ["foo", "bar", "baz", "qux", "origin"];
let word = "baz";
let i = 0;
let len = arr.length;
for (; i < len; i++) {
    const element = arr[i];
    (word == arr[i])? console.log(arr[i]):false;
}
