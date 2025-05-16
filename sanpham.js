document.addEventListener("DOMContentLoaded", function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  // Lấy thông tin sản phẩm
  const products = [
    { id: 1, name: "ets2", price: 500000, image: "game1.jpg" },
    { id: 2, name: "modxe khach", price: 400000, image: "game2.jpg" },
    { id: 3, name: "modphukien", price: 350000, image: "game3.jpg" },
    { id: 4, name: "xetaihino2", price: 350000, image: "game3.jpg" },
    { id: 5, name: "com1lqm", price: 350000, image: "game3.jpg" },
    { id: 6, name: "coinmasterkh", price: 350000, image: "game3.jpg" },
    { id: 7, name: "scb45", price: 350000, image: "game3.jpg" },
    { id: 8, name: "minecr1", price: 350000, image: "game3.jpg" },
    { id: 9, name: "tonghop", price: 350000, image: "game3.jpg" },
    { id: 10, name: "tocchien10", price: 350000, image: "game3.jpg" },
    { id: 11, name: "lmht11", price: 350000, image: "game3.jpg" },
    { id: 12, name: "pubgm12", price: 350000, image: "game3.jpg" },
    { id: 13, name: "fbclone13", price: 350000, image: "game3.jpg" },
    { id: 14, name: "Nhắn tin qua tele để lấy mod", price: 350000, image: "game3.jpg" },
    { id: 15, name: "Mã 1 giờ - 1HSTP _ Mã 5 giờ - 5H273 _ Mã 24 giờ - 24HJPZO", price: 350000, image: "game3.jpg" },
    { id: 16, name: "", price: 350000, image: "game3.jpg" },
    { id: 17, name: "Game 3", price: 350000, image: "game3.jpg" },
    { id: 18, name: "Game 3", price: 350000, image: "game3.jpg" },
    { id: 19, name: "Game 3", price: 350000, image: "game3.jpg" },
    { id: 20, name: "Game 3", price: 350000, image: "game3.jpg" },
    { id: 21, name: "Game 3", price: 350000, image: "game3.jpg" },
    { id: 22, name: "Game 3", price: 350000, image: "game3.jpg" },
    { id: 23, name: "Game 3", price: 350000, image: "game3.jpg" },
    { id: 24, name: "Game 3", price: 350000, image: "game3.jpg" }  
  ];

  // Hàm thêm sản phẩm vào giỏ hàng
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const productId = button.closest('.product-card').getAttribute('data-id');
      const product = products.find(p => p.id === parseInt(productId));

      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Kiểm tra nếu sản phẩm đã có trong giỏ
      const existingProduct = cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      // Lưu giỏ hàng vào localStorage
      localStorage.setItem('cart', JSON.stringify(cart));

      // Thông báo thành công bằng SweetAlert2
      Swal.fire({
        title: 'TẠO ĐƠN THÀNH CÔNG ! VUI LÒNG COPY MÃ VÀ LIÊN HỆ CHO ADMIN ĐỂ NHẬN MOD',
        text: `${product.name} `,
        icon: 'success',
        confirmButtonText: 'OK'
      });
    });
  });
});
