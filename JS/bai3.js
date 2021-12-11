function bai3() {
    document.getElementById("lesson__1").style.display = "none";
    document.getElementById("lesson__2").style.display = "none";
    document.getElementById("lesson__3").style.display = "block";
    document.getElementById("lesson__4").style.display = "none";
}

/**
 * Khối 1: input 
 * nguoiNopThue
 * thuNhapNam
 * soNguoi
 * 
 * Khối 2: 
 * B1: lấy giá trị từ form
 * B2: xác định điều kiện và lập công thức
 * 
 * Khối 3: output
 * xuất ra thuế thu nhập cá nhân phải trả
 * 
 */

const thue60 = 0.05;
const thue60_120 = 0.1;
const thue120_210 = 0.15;
const thue210_384 = 0.2;
const thue384_624 = 0.25;
const thue624_960 = 0.3;
const thueTren960 = 0.35;

function tienThue() {
    var nguoiNopThue = document.getElementById("nguoiNopThue").value;
    var thuNhapNam = document.getElementById("thuNhapNam").value;
    var soNguoi = document.getElementById("soNguoi").value;
    var thuNhapChiuThue = thuNhapNam - 4e+6 - soNguoi*1.6e+6;
    var tienThue = 0;

    if(thuNhapChiuThue < 0){
        alert("Bạn không cần nộp thuế")
    } else if(thuNhapChiuThue <= 60e+6) {
        tienThue = thuNhapChiuThue * thue60;
    } else if(thuNhapChiuThue <= 120e+6) {
        tienThue = thue60*60e+6 + thue60_120*(thuNhapChiuThue-60e+6);
    } else if(thuNhapChiuThue <= 210e+6) {
        tienThue = thue60*60e+6 + thue60_120*60e+6 + thue120_210*(thuNhapChiuThue-120e+6);
    } else if(thuNhapChiuThue <= 384e+6) {
        tienThue = thue60*60e+6 + thue60_120*60e+6 + thue120_210*90e+6 + thue210_384*(thuNhapChiuThue-210e+6);
    } else if(thuNhapChiuThue <= 624e+6) {
        tienThue = thue60*60e+6 + thue60_120*60e+6 + thue120_210*90e+6 + thue210_384*174e+6 + thue384_624*(thuNhapChiuThue-384e+6);
    } else if(thuNhapChiuThue <= 960e+6) {
        tienThue = thue60*60e+6 + thue60_120*60e+6 + thue120_210*90e+6 + thue210_384*174e+6 + thue384_624*240e+6 + thue624_960*(thuNhapChiuThue-624e+6);
    } else {
        tienThue = thue60*60e+6 + thue60_120*60e+6 + thue120_210*90e+6 + thue210_384*174e+6 + thue384_624*240e+6 + thue624_960*336e+6 + thueTren960*(thuNhapChiuThue-624e+6);
    }
    document.getElementById("txt__tienThue").innerHTML = "Họ và tên: " + nguoiNopThue + ". Tiền thuế tháng này: " + Intl.NumberFormat('vn-VN', { maximumSignificantDigits: 3 }).format(tienThue) + " VNĐ.";
}
