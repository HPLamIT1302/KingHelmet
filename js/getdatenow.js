
    function getCurrentDate() {
        var today = new Date();
        var weekdays = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
        var months = ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"];
        
        var weekday = weekdays[today.getDay()];
        var day = today.getDate();
        var month = months[today.getMonth()];
        var year = today.getFullYear();

        return weekday + ', ' + day + ' ' + month + ' ' + year;
    }

    // Update date on page load
    window.onload = function() {
        var currentDate = getCurrentDate();
        document.getElementById("dateNow").innerHTML = currentDate;
    };
