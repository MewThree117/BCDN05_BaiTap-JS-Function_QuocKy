function bai2() {
    document.getElementById("lesson__1").style.display = "none";
    document.getElementById("lesson__2").style.display = "block";
    document.getElementById("lesson__3").style.display = "none";
    document.getElementById("lesson__4").style.display = "none";
}

/**
*Khối 1: input 
*nguoiDungDien
*soKw
*giaKw_Dau
*giaKw51_100
*giaKw101_200
*giaKw201_350
*giaTren_350
*
*Khối 2:
*B1: lấy giá trị từ form
*B2: xác định điều kiện và lập công thức
*
*Khối 3: output
*Xuất ra hóa đơn tiền điện
*tienDien
*
 */
const giaKw_Dau = 500;
const giaKw51_100 = 650;
const giaKw101_200 = 850;
const giaKw201_350 = 1100;
const giaTren_350 = 1300;

function tienDien() {
    var nguoiDungDien = document.getElementById("nguoiDungDien").value;
    var soKw = Number(document.getElementById("soKw").value);
    var tienDien = 0;
    if(soKw < 0) {
        alert("Số Kw không hợp lệ. Vui lòng nhập lại một số dương.")
    } else if(soKw >= 0 && soKw <= 50) {
        tienDien = giaKw_Dau*soKw;
    } else if (soKw > 50 && soKw <= 100) {
        tienDien = giaKw_Dau*50 + giaKw51_100*(soKw-50);
    } else if (soKw > 100 && soKw <= 200) {
        tienDien = giaKw_Dau*50 + giaKw51_100*50 + giaKw101_200*(soKw-100);
    } else if (soKw > 200 && soKw <= 350) {
        tienDien = giaKw_Dau*50 + giaKw51_100*50 + giaKw101_200*100 + giaKw201_350*(soKw-200);
    } else {
        tienDien = giaKw_Dau*50 + giaKw51_100*50 + giaKw101_200*100 + giaKw201_350*150 + giaTren_350*(soKw-350);
    }
    document.getElementById("txt__tienDien").innerHTML ="Họ và tên: " + nguoiDungDien + ". Tiền điện tháng này: " + tienDien + " VNĐ";
}