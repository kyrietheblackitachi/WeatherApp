

export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6a89c01df2msh1ef1d4936ffde17p1a03d4jsna2fdc86d2f1b',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};
export const fetchWeather = async(url,options)=>{
    const response = await fetch(url,options)
    const weather = await response.json();
    return weather
}

export const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6a89c01df2msh1ef1d4936ffde17p1a03d4jsna2fdc86d2f1b',
		'X-RapidAPI-Host': 'spott.p.rapidapi.com'
	}
};
export const fetchLocation = async(url,options)=>{
    const response = await fetch(url,options)
    const location = await response.json()
    return location
}

