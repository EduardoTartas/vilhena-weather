const api = {
    key: "36058318179c4e5884a202551252004",
    base: "https://api.weatherapi.com/v1"
}

async function getWeather() {
    return fetch(`${api.base}/current.json?key=${api.key}&q=Vilhena&aqi=no`)
        .then(response => response.json())
        .then(data => {
            wheather = {
                temperature: data.current.temp_c,
                feelslike: data.current.feelslike_c,
                last_updated: data.current.last_updated,
                condition: data.current.condition.text,
                icon: data.current.condition.icon,
                region: data.location.region,
            };
            return wheather;
        })
        .catch(error => console.error('Error on fetching', error));
}   

document.addEventListener('DOMContentLoaded', () => {
    const last_updated = document.querySelector('.lastUp');
    const temperature = document.querySelector('.temperature .temp');
    const condition = document.querySelector('.condition');

    getWeather()
        .then(wheather => {
                console.log(wheather.last_updated);
                last_updated.innerHTML = `Last updated: ${wheather.last_updated}`;
                
                console.log(wheather.temperature);
                temperature.innerHTML = `${wheather.temperature}°`;

                console.log(wheather.condition);
                condition.innerHTML = `${wheather.condition}`;
        })
        .catch(error => console.error('Error updating weather data:', error));
});

   

    