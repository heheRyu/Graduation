const API_KEY="b19b8e120d462f40bf0d0f671dfedc7e"


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    });
}

function onGeoError(){
    alert("당신의 위치를 찾지 못했습니다. 날씨 정보를 불러올 수 없습니다.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);