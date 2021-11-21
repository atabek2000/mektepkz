// Одиночный календарь
$('.date-single').daterangepicker({
    opens: 'right',
    minYear: '1990',
    maxYear: '2070',
    singleDatePicker: true,
    linkedCalendars: false,
    locale: {cancelLabel: 'Сбросить', applyLabel: 'Применить', format: 'DD.MM.YYYY'},
    showDropdowns: true,
    autoUpdateInput: false,
});

$('.date-single').on('show.daterangepicker', function() {
    $(this).closest('.select-date').addClass('form-label-focus');
});

$('.date-single').on('hide.daterangepicker', function() {
    $(this).closest('.select-date').removeClass('form-label-focus');
});

$('.date-single').on('apply.daterangepicker', function(ev, picker) {
    $(this).val(picker.startDate.format('DD.MM.YYYY'));
    $(this).closest('.select-date').removeClass('form-label-focus');
    $(this).closest('.select-date').addClass('form-label-done');
    if ($(this).val().length === 0) {
        $(this).closest('.select-date').removeClass('form-label-focus');
        $(this).closest('.select-date').removeClass('form-label-done');
    }
});

$('.date-single').on('cancel.daterangepicker', function() {
    $(this).val('');
    $(this).closest('.select-date').removeClass('form-label-done');
});

// календарь период
$('.date-range').daterangepicker({
    opens: 'right',
    minYear: '1990',
    maxYear: '2070',
    linkedCalendars: false,
    locale: {cancelLabel: 'Сбросить', applyLabel: 'Применить', format: 'DD.MM.YYYY'},
    showDropdowns: true,
    autoUpdateInput: false,
});

$(document).on('click', '.date-range', function (e) {
    e.stopPropagation();
});

$(document).on('click', '.daterangepicker', function (e) {
    e.stopPropagation();
});

$('.date-range-form').on('show.daterangepicker', function() {
    $(this).closest('.select-date').addClass('form-label-focus');
});

$('.date-range-form').on('hide.daterangepicker', function() {
    $(this).closest('.select-date').removeClass('form-label-focus');
});

$('.date-range-form').on('apply.daterangepicker', function(ev, picker) {
    $(this).val(picker.startDate.format('DD.MM.YYYY') + ' - ' + picker.endDate.format('DD.MM.YYYY'));
    $(this).closest('.select-date').removeClass('form-label-focus');
    $(this).closest('.select-date').addClass('form-label-done');
    if ($(this).val().length === 0) {
        $(this).closest('.select-date').removeClass('form-label-focus');
        $(this).closest('.select-date').removeClass('form-label-done');
    }
});

$('.date-range-form').on('cancel.daterangepicker', function(ev, picker) {
    $(this).val('');
    $(this).closest('.select-date').removeClass('form-label-done');
});