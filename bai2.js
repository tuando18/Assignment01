console.log("\tBài 02: Vòng lặp từ 1 đến n");

console.log("1. Nhập vào số nguyên dương 'n' bất kì");
// Khai báo vòng lặp từ 1 đến n
// 1. Tìm n nhập vào từ bàn phím
let n = Number(prompt("Mời bạn nhập n:"));

for (let i = 1; i <= n; i++) {
    // Log ra giá trị của i
    console.log("i = " + i);
}

console.log("2. In ra số chẵn từ 1 đến n");
// 3. In ra số chẵn từ 1 đến n
let soChanArr = [];
for (let i = 1; i <= n; i++) {
    // Tìm số chẵn và in ra giá trị
    if (i%2 === 0) {
        soChanArr.push(i);
    }
}
console.log("Danh sách số chẵn là: " + soChanArr.join(", "));

console.log("3. In ra các số chia hết cho 4");
let soChiaHet4Arr = [];
for (let i = 4; i < n; i+=4) {
    if (i%4 === 0) {
        soChiaHet4Arr.push(i);
    }
}
console.log("Danh sách số chia hết cho 4 là: " + soChiaHet4Arr.join(", "));