class Menu {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

let menus = [
    new Menu(0, "Bánh tráng trộn", "10.000 VND"),
    new Menu(1, "Bánh tráng nướng", "10.000 VND"),
    new Menu(2, "Bánh tráng cuốn", "15.000 VND"),
    new Menu(3, "Trứng cút nướng", "10.000 VND"),
    new Menu(4, "Cút rang me", "10.000 VND"),
    new Menu(5, "Xiên que", "5.000 VND"),
    new Menu(6, "Xúc xích", "12.000 VND"),
    new Menu(7, "Bắp xào bơ", "12.000 VND"),
    new Menu(8, "Mỳ spaghetti ý", "25.000 VND"),
    new Menu(9, "Tokbokki", "15.000 VND"),
    new Menu(10, "Gà rán", "25.000 VND"),
    new Menu(11, "Khô gà lá chanh", "20.000 VND"),
    new Menu(12, "Khô bò", "20.000 VND"),
    new Menu(13, "Mực khô", "50.000 VND"),
    new Menu(14, "Gỏi tôm", "23.000 VND"),
    new Menu(15, "Đậu phộng", "5.000 VND"),
    new Menu(16, "Heo quay", '75.000 VND'),
    new Menu(17, "Lẩu cá", '125.000 VND'),
    new Menu(18, "Trân châu đen", '5.000 VND'),
    new Menu(19, "Trân châu trắng", "5.000 VND"),
    new Menu(20, "bánh flan", "10.000 VND"),
    new Menu(21, "Bim bim các loại", "10.000 VND"),
    new Menu(22, "Bật lửa", "3.000 VND"),
    new Menu(23, "Mở bia", "15.000 VND"),
    new Menu(24, "Gạt tàn", "20.000 VND"),
    new Menu(25, "Bia các loại", "10.000 VND"),
    new Menu(26, "Rượu các loại", "25.000 VND"),
    new Menu(27, "Cà phê đen", "12.000 VND"),
    new Menu(28, "Cà phê sữa", "15.000 VND"),
    new Menu(29, "Cà phê tàng hình", "2.000 VND"),
    new Menu(30, "Cà phê bọt biển", "30.000 VND"),
    new Menu(31, "Trà sữa trân châu đường đen", "15.000 VND"),
    new Menu(32, "Trà sữa matcha", "20.000 VND"),
    new Menu(33, "Trà sữa khoai môn", "20.000 VND"),
    new Menu(34, "Trà sữa socola", "15.000 VND"),
    new Menu(35, "Trà đào", "15.000 VND"),
    new Menu(36, "Trà vải", "25.000 VND"),
    new Menu(37, "Trà sữa dâu tây", "18.000 VND"),
    new Menu(38, "Trà sữa trứng gà", "19.000 VND"),
    new Menu(39, "Hồng trà", "35.000 VND"),
    new Menu(40, "Trà sữa nguyên chất", "10.000 VND"),
    new Menu(41, "Trà sữa bịch khủng lồ", "100.000 VND"),
    new Menu(42, "Trà sữa chai khủng lồ", "110.000 VND"),
    new Menu(43, "Nước ngọt đồng giá", "10.000 VND"),
];

function takeOder(id) {
    let a = confirm("bạn có muốn thêm sản phẩm vào đơn hàng ?")
    let infoMenu = document.getElementById("infoMenu");
    let order = menus[id];
    if (a) {
        infoMenu.innerHTML += `
            <tr>
            <td>${order.name}</td>
            <td>1</td>
            <td>${order.price}</td>
            </tr>
            `
        document.getElementById("cartInfo").innerHTML = `Cart(✓)`
    } else {
        alert('đã hủy')
    }
    return total;
};

function deleteProduct() {
    let confirm =  window.confirm("bạn có muốn hủy đơn hàng này ?")
    if (confirm) {
        window.location.reload()
    }
}