function paraAbsoluto(arr) {
  return arr.map((a) => Math.abs(a));
}

const ns = [-2, 3, 5, -15];

const absolutos = paraAbsoluto(ns);

console.log(absolutos);
