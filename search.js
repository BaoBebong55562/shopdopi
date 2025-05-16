function searchProduct() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const priceFilter = document.getElementById('priceFilter').value;
  const productCards = document.querySelectorAll('.product-card');
  const suggestionsBox = document.getElementById('suggestions');

  suggestionsBox.innerHTML = ''; // Reset gợi ý

  productCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();

    // Ưu tiên lấy giá khuyến mãi nếu có
    const discountPriceEl = card.querySelector('.discounted-price');
    const priceText = discountPriceEl
      ? discountPriceEl.textContent
      : card.querySelector('.price').textContent;

    const price = parseInt(priceText.replace(/[^\d]/g, ''));

    // Lọc theo tên
    const nameMatch = title.includes(input);

    // Lọc theo giá
    let priceMatch = true;
    if (priceFilter === '0-300') priceMatch = price <= 300000;
    else if (priceFilter === '301-500') priceMatch = price > 300000 && price <= 500000;
    else if (priceFilter === '501+') priceMatch = price > 500000;

    // Hiển thị hoặc ẩn sản phẩm
    if (nameMatch && priceMatch) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }

    // Tạo gợi ý nếu khớp
    if (input.length > 0 && nameMatch) {
      const suggestionItem = document.createElement('div');
      suggestionItem.textContent = card.querySelector('h3').textContent;
      suggestionItem.onclick = function () {
        document.getElementById('searchInput').value = suggestionItem.textContent;
        suggestionsBox.innerHTML = '';
        searchProduct(); // Tìm lại
      };
      suggestionsBox.appendChild(suggestionItem);
    }
  });
}
