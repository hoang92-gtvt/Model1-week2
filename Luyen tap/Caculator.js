var giatri1;
var giatri2;
var ketqua;


function add() {
    giatri1 = parseFloat(document.getElementById("input1").value);
    giatri2 = parseFloat(document.getElementById("input2").value);
    //alert(giatri1);
   // alert(giatri2);
    ketqua = giatri1 + giatri2;
    document.getElementById("kq").innerHTML="Kết quả phép cộng là: "+ketqua;

}
function subtr(){
    giatri1 = parseFloat(document.getElementById("input1").value);
    giatri2 = parseFloat(document.getElementById("input2").value);
    //alert(giatri1);
    //alert(giatri2);
    ketqua=giatri1-giatri2;
    document.getElementById("kq").innerHTML="Kết quả phép trừ là: "+ketqua;
}

function mutipli(){
    giatri1 = parseFloat(document.getElementById("input1").value);
    giatri2 = parseFloat(document.getElementById("input2").value);
   // alert(giatri1);
   // alert(giatri2);
    ketqua=giatri1*giatri2;
    document.getElementById("kq").innerHTML="Kết quả phép nhân là: "+ketqua;
}
function chia(){
    giatri1 = parseFloat(document.getElementById("input1").value);
    giatri2 = parseFloat(document.getElementById("input2").value);
    //alert(giatri1);
   // alert(giatri2);
    ketqua=giatri1/giatri2;
    document.getElementById("kq").innerHTML="Kết quả phép chia là: "+ketqua;

}
