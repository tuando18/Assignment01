console.log("\tBài 01: Tính chu vi hình chữ nhật");

// Cú pháp khai báo hàm có tham số và giá trị trả về
function tenHam(thamSo) {
    let ketQua;
    return ketQua;
}

// 1. Khai báo hàm tính chu vi
function timChuViHcn(thamSoChieuDai, thamSoChieuRong) {
    let ketQua = (thamSoChieuDai + thamSoChieuRong) * 2;

    return ketQua;
}

// 2. Nhập từ bàn phím giá trị chiều dài, chiều rộng
let chieuDai = Number(prompt("Mời bạn nhập vào chiều dài:"));
let chieuRong = Number(prompt("Mời bạn nhập vào chiều rộng:"));


let chuViHCN = timChuViHcn(chieuDai, chieuRong);
console.log("Chu vi hình chữ nhật: ", chuViHCN);