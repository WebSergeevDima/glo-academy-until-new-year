const TimerForNewYear = (year) => {

    const greetings = document.getElementById('greetings');
    const today = document.getElementById('today');
    const time = document.getElementById('time');
    const dayForNewYear = document.getElementById('day-for-new-year');
    const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];

    const intervalTimer = setInterval(() => {
        const dateNewYear = new Date(`${year} 1 1`);
        const dateNow = new Date();
        const hours = dateNow.getHours();
        const msForNewYear = +dateNewYear.getTime() - +dateNow.getTime();
        const daysForNewYear= Math.floor(msForNewYear / 1000 / 60 / 60 / 24);
        let greetingsText = 'Доброй ночи!';

        if(hours >= 18) {
            greetingsText = 'Добрый вечер!';
        } else if (hours >= 12) {
            greetingsText = 'Добрый день!';
        } else if (hours >= 6) {
            greetingsText = 'Доброе утро!';
        }

        greetings.textContent = greetingsText;
        today.textContent = days[dateNow.getDay()];
        time.textContent = `${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`;
        dayForNewYear.textContent = daysForNewYear;

    }, 1000);


}

export default TimerForNewYear