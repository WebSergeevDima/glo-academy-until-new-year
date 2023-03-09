const timerForNewYear = () => {

    const greetings = document.getElementById('greetings');
    const today = document.getElementById('today');
    const time = document.getElementById('time');
    const dayForNewYear = document.getElementById('day-for-new-year');

    const timerUpdate = () => {
        const dateNow = new Date();
        const dateNewYear = new Date(`${dateNow.getFullYear() + 1} 1 1`);
        const dayWeek = dateNow.toLocaleDateString('ru-RU', {weekday: 'long'});
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
        today.textContent = dayWeek[0].toUpperCase() + dayWeek.slice(1);
        time.textContent = `${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`;
        dayForNewYear.textContent = daysForNewYear;
    }

    const intervalTimer = setInterval(() => {
        timerUpdate();
    }, 1000);

    timerUpdate();

}

export default timerForNewYear