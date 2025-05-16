document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("paymentForm");
  const bankInfo = document.getElementById("bankInfo");
  const transferContent = document.getElementById("transferContent");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const gameCode = document.getElementById("gameCode").value.trim();
    const username = document.getElementById("username").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!gameCode || !username || !phone) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    // Tạo nội dung chuyển khoản
    const content = `${gameCode} + ${username}`;
    transferContent.textContent = content;

    // Ẩn form và hiện thông tin chuyển khoản
    form.style.display = "none";
    bankInfo.style.display = "block";
  });
});
