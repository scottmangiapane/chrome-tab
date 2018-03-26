const timeText = document.getElementById('time');
const dateText = document.getElementById('date');

const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const update = () => {
    const datetime = new Date();
    let text;

    // set time

    const hours = datetime.getHours();
    const minutes = datetime.getMinutes();

    text = '';
    if (hours === 0 || hours === 12) {
        text += '12';
    } else {
        text += hours % 12;
    }
    text += ':';
    if (minutes < 10) {
        text += '0';
    }
    text += minutes + ' ';
    if (hours < 12) {
        text += 'AM';
    } else {
        text += 'PM';
    }

    timeText.innerText = text;

    // set date

    const day = datetime.getDay();
    const month = datetime.getMonth();
    const date = datetime.getDate();
    const year = datetime.getFullYear();

    text = '' + dayNames[day] + ', ' + monthNames[month] + ' ' + date + ', ' + year;

    dateText.innerText = text;
};

setInterval(update, 1000);
update();
