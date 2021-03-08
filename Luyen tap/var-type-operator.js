
var diem_ly;
var diem_hoa;
var diem_sinh;
var diem_tb;
var Ten_hs;

Ten_hs= prompt("Nhập tên học sinh");
diem_ly= parseInt(prompt("Nhap diem lý"));
diem_hoa= parseInt(prompt("Nhap diem hóa"));
diem_sinh= parseInt(prompt("Nhap diem sinh"));


diem_tb=(diem_ly + diem_hoa + diem_sinh)/3;
document.getElementById("diemly").innerHTML=diem_ly;
document.getElementById("diemhoa").innerHTML=diem_hoa;
document.getElementById("diemsinh").innerHTML =diem_sinh;
alert("điểm trung bình là : " + diem_tb);
alert("Tổng các điểm là " + (diem_sinh+ diem_hoa + diem_ly));



var input_C;
var output_F;
function change() {

    input_C = document.getElementById("inputC").value;
    output_F = input_C * 9 / 5 + 32;
    document.getElementById("inputF").value = output_F;
    }


var ban_kinh;
var dien_tich;
var chu_vi;
function caculation() {

    ban_kinh = document.getElementById("radius").value;
    dien_tich = 3.14*Math.pow(ban_kinh,2);
    chu_vi =3.14*2*ban_kinh;
    document.getElementById("area").value = dien_tich;
    document.getElementById("premeter").value = chu_vi;
    }








