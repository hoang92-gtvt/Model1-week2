let name;
let pass;

function kiemtra(){

    let name2=document.getElementById("name4");
    name=document.getElementById("name").value;
    pass=document.getElementById("pass").value;
    alert(name2); //tra ve null vì ko tim dc the có id "name"
    alert(name); // tra ve "" khi không nhập gì
    debugger;
    if (name=="Admin") {
        if (pass=="TheMaster") {
            alert("Welcom");
        }else{
            if(pass="") {
                alert("Cancel");
            }
            alert("Worng Password");
        }
    } else {
        if (name == "") {
            alert("Cancel");
        } else {
            alert("I don't know you");
        }
    }

    // } else if (name==""){
    //         alert("Cancel");
    // }else {
    //         alert("I don't know you");
    // }


}

//Diểm khác biệt giữa thẻ input và prompt;
//gia tri để trống cho thẻ input là "";
//giá tri để trống cho thẻ prompt là null;