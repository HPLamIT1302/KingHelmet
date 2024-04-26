// Function to format the current date
function getCurrentDate() {
    var today = new Date();
    var weekday = today.toLocaleDateString('vi-VN', { weekday: 'long' });
    var day = today.getDate();
    var month = today.toLocaleDateString('vi-VN', { month: 'long' });
    var year = today.getFullYear();

    return weekday + ', ' + day + ' ' + month + ' ' + year;
}

// Update date on page load
window.onload = function () {
    var currentDate = getCurrentDate();
    document.getElementById("dateNow").textContent = currentDate;
};




document.addEventListener('DOMContentLoaded', function() {
    var countdownElement = document.getElementById('countdown');
    var progressBar = document.querySelector('.progress-bar');

    // Lấy thời gian hiện tại
    var currentTime = new Date();

    // Thiết lập thời gian bắt đầu đếm ngược đến giờ mới
    var targetTime = new Date(currentTime);
    targetTime.setHours(currentTime.getHours() + 1, 0, 0, 0); // Thiết lập giờ mới là giờ tiếp theo, phút và giây là 0

    function updateCountdown() {
        var now = new Date();
        var timeRemaining = targetTime - now;

        if (timeRemaining <= 0) {
            progressBar.style.width = "100%";
        } else {
            // Tính toán số giờ, phút, giây còn lại
            var hours = Math.floor(timeRemaining / (1000 * 60 * 60));
            var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            // Hiển thị đồng hồ đếm ngược
            // countdownElement.textContent = `Thời gian: ${hours} giờ ${minutes} phút ${seconds} giây` +`<i class="fa-solid fa-bolt"></i>`;
            countdownElement.innerHTML = `<i class="fas fa-bolt"></i> Thời gian: ${hours} giờ ${minutes} phút ${seconds} giây `;


            // Tính toán % tiến độ
            var progress = (timeRemaining / (60 * 60 * 1000)) * 100; // Tính theo giờ
            progressBar.style.width = `${100 - progress}%`;
        }
    }

    // Gọi hàm updateCountdown ban đầu
    updateCountdown();

    // Cập nhật đồng hồ đếm ngược mỗi giây
    setInterval(updateCountdown, 1000);
});
