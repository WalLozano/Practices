// api key c34626f8d4b31ca611e2e98a25562be1

const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');


// To test this app need to change the APIkey

search.addEventListener('click', () => {
    const APIKey = 'c34626f8d4b31ca611e2e98a25562be1'
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then
        (json => {

            if(json.cod === '404') {
                container.style.height = '404px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }



            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const feels = document.querySelector('.weather-box .feels');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span')
            const wind = document.querySelector('.weather-details .wind span')
            const name = document.querySelector('.weather-box .name');
            const min = document.querySelector('.weather-details .min-max .min span')
            const max = document.querySelector('.weather-details .min-max .max span')


            switch (json.weather[0].main){
                case 'Clear':
                    image.src = 'images/clear.png' 
                    break;

                    case 'Rain':
                    image.src = 'images/rain.png' 
                    break;

                    case 'Snow':
                    image.src = 'images/snow.png' 
                    break;

                    case 'Clouds':
                    image.src = 'images/cloud.png' 
                    break;

                    case 'Haze':
                    image.src = 'images/mist.png' 
                    break;

                    default:
                        image.src = '';

            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>ºC</span>`;
            feels.innerHTML = `Feels like ${parseInt(json.main.feels_like)}<span>ºC</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`
            name.innerHTML = `${json.name}`
            min.innerHTML = `${parseInt(json.main.temp_min)}<span>ºC</span>`
            max.innerHTML = `${parseInt(json.main.temp_max)}<span>ºC</span>`


            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '730px';

        })
})