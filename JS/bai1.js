function bai1() {
    document.getElementById("lesson__1").style.display = "block";
    document.getElementById("lesson__2").style.display = "none";
    document.getElementById("lesson__3").style.display = "none";
    document.getElementById("lesson__4").style.display = "none";
}

/**
 * Khối 1: input 
 * diemChuan
 * khuVuc
 * doiTuong
 * num1
 * num2
 * num3
 * 
 * Khối 2:
 * B1: lấy giá trị từ form
 * B2: xác định điều kiện và lập công thức
 * diemTong = num1 + num2 + num3 + diemKhuVuc + diemDoiTuong;
 * 
 * Khối 3: output
 * xuất ra kết quả tổng điểm và đậu hay rớt.
 * 
 */

function ketQua() {
    var diemChuan = Number(document.getElementById("diemChuan").value);
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var num3 = Number(document.getElementById("num3").value);
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = document.getElementById("doiTuong").value;
    switch(khuVuc) {
        case "":
            diemKhuVuc = 0;
            break;
        case "X":
            diemKhuVuc = 0;
            break;
        case "A":
            diemKhuVuc = 2;
            break;
        case "B":
            diemKhuVuc = 1;
            break;
        case "C":
            diemKhuVuc = 0.5;
            break;
        default:
    }
    switch(doiTuong) {
        case "":
            diemDoiTuong = 0;
            break;
        case "0":
            diemDoiTuong = 0;
            break;
        case "1":
            diemDoiTuong = 2.5;
            break;
        case "2":
            diemDoiTuong = 1.5;
            break;
        case "3":
            diemDoiTuong = 1;
            break;
        default:
    }
    var diemTong = num1 + num2 + num3 + diemKhuVuc + diemDoiTuong;
    if(diemTong < diemChuan || num1 == 0 || num2 == 0 || num3 == 0) {
        document.getElementById("txt__result").innerHTML = "Tổng điểm: " +diemTong+ ". Bạn đã thi trượt. Chúc bạn may mắn lần sau."
    } else {
        document.getElementById("txt__result").innerHTML = "Tổng điểm: " +diemTong+ ". Chúc mừng bạn đã thi đỗ vào trường."
    }
}

