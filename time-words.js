const timeWords = str =>{
    if (str === '00:00') {
        return 'midnight';
    }

    if (str === '12:00'){
        return 'noon'
    }

    let amPm = 'am'
    let hourVal = parseInt(str.split(':')[0]);
    let minuteVal = parseInt(str.split(':')[1]);

    if (hourVal > 11) {
        amPm = 'pm'
    }

    hourVal %= 12;

    return `${timeArray[0][hourVal]} ${timeArray[1][minuteVal]} ${amPm}`
}

const buildTimeWords=() => {
    const hourWords = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven']
    const minuteWords = ["o'clock", 'oh one', 'oh two', 'oh three', 'oh four', 'oh five', 'oh six', 'oh seven', 'oh eight', 'oh nine', 'ten']

    return [hourWords, minuteWords];
}

const timeArray = buildTimeWords();
console.log('00:00 =>', timeWords('00:00'));
console.log('12:00 =>', timeWords('12:00'));
console.log('06:03 =>', timeWords('06:03'));