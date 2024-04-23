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
