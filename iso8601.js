/**
    ISO 8601

    Function for getting {Date} in ISO 8601 format. 

    YYYY-MM-DD

*/

function format(date) {
    //Return as ISO date string YYYY-MM-DD
    var d = new Date(date),
        year    = d.getFullYear(),
        month   = d.getMonth() + 1,
        day     = d.getDate(),
        s = [];
    s.push(year);
    s.push(month < 10 ? '0' + month : month);
    s.push(day < 10 ? '0' + day : day);
    return s.join("-");
}

exports.format = format;

exports.today = function () {
    //Returns today's date
    return format(new Date());
};

exports.yesterday = function () {
    //Returns yesterday's date
    var d = new Date();
    d.setDate(d.getDate() - 1);
    return format(d);
};


exports.monthago = function (x) {
    // Returns the date one month ago
    var d = new Date();
    x = x || 1;
    if (d.getMonth() === 0) {
        // Current month is January
        d.setMonth(12 - x);
        d.setYear(d.getFullYear() - 1);
    } else {
        // Feb - Dec
        d.setMonth(d.getMonth() - x);
    }
    return format(d);
};

exports.daysago = function (x) {
    // Returns the date X days ago
    var d = new Date();
    d.setDate(d.getDate() - x);
    return format(d);
};

exports.firstDayOfWeek = function (date) {
    //Returns date of first day of the week, for grouping by week
    var d = new Date(date);
    d.setDate(d.getDate() - d.getDay());
    return format(d);
};


exports.range = function (start, end) {
    //Returns an array of all dates between start and end
    var startDate = new Date(start),
        endDate = new Date(end),
        days = Math.ceil((endDate - startDate) / (1000 * 3600 * 24)),
        dateRange = [],
        i,
        d;

    for (i = 0; i < days; i++) {
        d = new Date(startDate);
        d.setDate(d.getDate() + i);
        dateRange.push(format(d));
    }
    return dateRange;
};

exports.delta = function (start, end) {
    //Returns the number of days between start and end
    return Math.round((end - start) / 1000 / 3600 / 24);
};
