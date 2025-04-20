const api = {
    key: "36058318179c4e5884a202551252004",
    base: "http://api.weatherapi.com/v1"
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
            };
            return wheather;
        })
        .catch(error => console.error('Error on fetching', error));
}   

getWeather()
    .then(wheather => {
        console.log(wheather);
    })