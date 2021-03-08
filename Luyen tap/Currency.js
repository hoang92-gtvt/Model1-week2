var crr_1;
var crr_2;
var ts_1;
var ts_2;
var amount;

function convert(){
    amount=document.getElementById("amount").value;
    crr_1=document.getElementById("crr_1").value;

    crr_2=document.getElementById("crr_2").value;
    alert(crr_1);
    alert(crr_2);
    if(crr_1== "VND"){
        ts_1 = 1;
    }else
        if(crr_1== "USD"){
            ts_1=23000;
        }else
            ts_1=22000;

   alert(ts_1);


    if(crr_2== "VND"){
        ts_2=1;
    }else
        if(crr_2=="USD"){
            ts_2=23000;
        }else
            ts_2=22000;
    alert(ts_2);

    var ketqua= amount + crr_1 +"có giá trị" + amount*(ts_1/ts_2) + crr_2;

    document.getElementById("ketqua").innerHTML = ketqua;

}