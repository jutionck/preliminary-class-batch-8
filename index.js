// var, let, const
// Nama, -= name, alamat -= address, camelCase, const BESAR_SEMUA

// [number, string, boolean] (x)
// --> comnbine --> object { key: value } --> [ { number }, { string } ]

// 2 Jenis --> PRIMITIVE (number, string, boolean, ....) | NON PRIMITIVE (array, object)
// value ==> "PASS BY VALUE" | "PASS BY REFERENCE"

// let x = 10;
// let y = x; // y = 10

// console.log('x:', x);
// console.log('y:', y);

// x = 20;
// // y = 15;

// console.log('x:', x);
// console.log('y:', y);

// let x = [10, 15, 20, 25];
// let y = x; // [10, 15, 20, 25]; // ambil referensi memori

// console.log('x:', x);
// console.log('y:', y);

// x[0] = 11;
// x[1] = 16;

// console.log('x:', x);
// console.log('y:', y);

// MUTABLE (dapat diubah) dan IMMUTABLE (tidak diubah)
// array dan object itu bisa di IMMUATABLE...
// --> shallow clone (duplicate 1 tingkat) [...] spread operator | deep clone ...

// let x = [1, 2, 3, 4, 5];
// let y = [...x]; // [1, 2, 3, 4, 5]; // shallow

// console.log('x:', x);
// console.log('y:', y);

// y[0] = 11;
// y[1] = 22;

// console.log('x:', x);
// console.log('y:', y);

// Simulasi Pass By Reference dan Pass By Value x Moba
let gold = 5000;
let inventories = ['Sepatu', 'Lari Kencang'];

// Pass by value
const addGold = (g) => {
  g += 1000; // g = g + 1000
  console.log('Gold di dalam function addGold:', g);
};

console.log('===SEBELUM===');
console.log('gold diluar function:', gold);

addGold(gold);

console.log('===SESUDAH===');
console.log('gold diluar function:', gold);

// Pass by reference
const addInvt = (invt) => {
  // invt.push('Menghilang');
  const invtCopy = [...invt];
  invtCopy.push('Menghilang');
  console.log('Inventory di dalam function addInvt:', invtCopy);
};

console.log('===SEBELUM===');
console.log('invetories di luar function:', inventories);

addInvt(inventories);

console.log('===SESUDAH===');
console.log('invetories di luar function:', inventories);
