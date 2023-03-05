function weatherAPI(query='Lviv', days =3){
    const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json'
    const API_KEY = '94a040c94bab4dcabf9130808222712'
    fetch( `${BASE_URL}?key=${API_KEY}&q=${query}&days=${days} ` )
    .then(resp => console.log(resp))
}

weatherAPI()