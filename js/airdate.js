
//календарь в мобилке
$(document).on('click', '.for-date-range', function (e) {
    e.stopPropagation();
});

let airButton = {
    content: 'Применить',
    className: 'air-date-btn',
}

new AirDatepicker('.for-date-range-input', {
    inline: true,
    range: true,
    multipleDatesSeparator: ' - ',
    buttons: [airButton, 'today', 'clear'],
});

$('.air-datepicker-buttons').find('.air-datepicker-button:nth-child(2)').addClass('air-date-today');
$('.air-datepicker-buttons').find('.air-datepicker-button:last-child').addClass('air-date-clear');


//календарь напоминание в уведомлении
new AirDatepicker('#reminder', {
    multipleDates: true,
    toggleSelected: false,
    selectedDates: ['2021-10-31',],
});
