function bai4() {
    document.getElementById("lesson__1").style.display = "none";
    document.getElementById("lesson__2").style.display = "none";
    document.getElementById("lesson__3").style.display = "none";
    document.getElementById("lesson__4").style.display = "block";
}

/**
 * Khối 1: input 
 * loaiKhachHang
 * maKhachHang
 * soKenhCaoCap
 * soKetNoi
 * phiHoaDon_NhaDan
 * phiDichVu_NhaDan
 * thueKenhCaoCap_NhaDan
 * phiHoaDon_DoanhNghiep
 * phiDichVu_DoanhNghiep
 * thueKenhCaoCap_DoanhNghiep
 * 
 * Khối 2:
 * B1: lấy giá trị từ form
 * B2: xác định điều kiện và lập công thức
 * 
 * Khối 3: output
 * Xuất ra hóa đơn tiền cáp
 * tienCap
 * 
 */

function chooseCustomer() {
    var x = document.getElementById("loaiKhachHang").value;
    if(x == "doanhNghiep") {
        document.getElementById("soKetNoi_wrap").style.display = "block";
    } else {
        document.getElementById("soKetNoi_wrap").style.display = "none";
    }
}

const phiHoaDon_NhaDan = 4.5;
const phiDichVu_NhaDan = 20.5;
const thueKenhCaoCap_NhaDan = 7.5;
const phiHoaDon_DoanhNghiep = 15;
const phiDichVu_DoanhNghiep = 75;
const thueKenhCaoCap_DoanhNghiep = 50;
function tienCap() {
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var maKhachHang = document.getElementById("maKhachHang").value;
    var soKenhCaoCap = document.getElementById("soKenhCaoCap").value;
    var soKetNoi = document.getElementById("soKetNoi").value;
    var tienCap = 0;
    if(loaiKhachHang == "danThuong" && soKenhCaoCap >= 0) {
        tienCap = phiHoaDon_NhaDan + phiDichVu_NhaDan + thueKenhCaoCap_NhaDan * soKenhCaoCap;
    } else if(loaiKhachHang == "danThuong" && soKenhCaoCap < 0) {
        alert("Số kênh cao cấp không hợp lệ.");
    } else if(loaiKhachHang == "doanhNghiep" && soKenhCaoCap < 0 || loaiKhachHang == "doanhNghiep" && soKetNoi < 0) {
        alert("Số kênh cao cấp hoặc số kết nối không hợp lệ.");
    } else if(loaiKhachHang == "doanhNghiep" && soKetNoi > 10) {
        tienCap = phiHoaDon_DoanhNghiep + phiDichVu_DoanhNghiep + 5*(soKetNoi-10) + soKenhCaoCap * thueKenhCaoCap_DoanhNghiep;
    }  else if(loaiKhachHang == "doanhNghiep" && soKetNoi <= 10) {
        tienCap = phiHoaDon_DoanhNghiep + phiDichVu_DoanhNghiep + soKenhCaoCap * thueKenhCaoCap_DoanhNghiep;
    } else {
        alert("Vui lòng chọn loại khách hàng.")
    }
    document.getElementById("txt__tienCap").innerHTML = "Mã Khách Hàng: " + maKhachHang + ". Tiền cáp: $" + tienCap;
}
