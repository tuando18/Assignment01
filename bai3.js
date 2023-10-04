console.log("\tBài 03: Khai báo mảng object");

// 1. Khai báo mảng object
let danhSachDiemLop12A = [
    {
        ten: "Nguyễn Mai Phương",
        diemToan: 8,
        diemVan: 8
    },
    {
        ten: "Nguyễn Hoàng My",
        diemToan: 10,
        diemVan: 7
    },
    {
        ten: "Đỗ Mỹ Linh",
        diemToan: 8,
        diemVan: 9
    }
]

console.log("1. In ra thông tin điểm lớp 12A");
for (let ten of danhSachDiemLop12A) {
    // In đẹp
    console.log("Tên học sinh: " + ten.ten);
    console.log("Điểm toán: " + ten.diemToan);
    console.log("Điểm văn: " + ten.diemVan);
    console.log("----------------------------------");
}

console.log("2. In ra màn hình thông tin điểm lớp 12A sau khi cộng điểm");

console.log("4. Nhập thêm điểm toán và văn cho học sinh Vũ Hương Giang");
// nhap them ten vao danh sanh diem
let diemToanCuaGiang = Number(prompt("Nhập điểm toán cho Vũ Hương Giang:"))
let diemVanCuaGiang = Number(prompt("Nhập điểm văn cho Vũ Hương Giang:"))

let mang = {
    ten: "Vũ Hường Giang",
    diemToan:diemToanCuaGiang,
    diemVan:diemVanCuaGiang
}
danhSachDiemLop12A.push(mang);
for (let ten of danhSachDiemLop12A) {
    // In đẹp
    console.log("Tên học sinh: " + ten.ten);
    console.log("Điểm toán: " + ten.diemToan);
    console.log("Điểm văn: " + ten.diemVan);
    console.log("----------------------------------");
}