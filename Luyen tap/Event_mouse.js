window.onload =init;
//let a1 = document.getElementById('a1');
//a1.addEventListener('click',aa); //tạo sự kiện cho đối tượng a1 khi click sẽ gọi ham aa;
// gọi hàm dạng aa(); thì function aa luôn thực thi khi chưa tác động;
//gọi hàm dang aa; thì function aa chỉ được thực hiện khi có sự kiện click;
let imgObj;

function init() {
    imgObj = document.getElementById('myImage');// đây là một đối tượng  sẽ có thuộc tính và phương thức
    //nếu "id" không tồn tại sẽ trả về null;
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}
// function aa(){
    alert("aaa")


// }

function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
    alert("Đã sang 10 px");
}


