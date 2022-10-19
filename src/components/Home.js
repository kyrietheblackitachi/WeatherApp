import {useState,useEffect} from 'react'
import {Box,TextField,Card,Typography,Button,Stack} from '@mui/material'
import SearchBox from './SearchBox'
import WeatherDisplay from './WeatherDisplay'
import {options,fetchWeather,options2, fetchLocation} from './fetchData'
import '../style.css'


function Home(){
  const [city,setCity] = useState('')

  const [searchedCity,setSearchedCity] = useState('')
  const [weatherData,setWeatherData] = useState(false);
  const [isPending, setIsPending] = useState(true)
  useEffect(()=>{
    const data=async()=>{
      const newData =  await fetchWeatherData()
    }
    data()
  },[city])

  const fetchWeatherData=async()=>{
    const location = await fetchLocation('https://spott.p.rapidapi.com/places/ip/me',options2)
    if (searchedCity===''){
      setCity(location.adminDivision1.name)
    }
    else{setCity(searchedCity)
    }
    if (city){
    const weather = await fetchWeather(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`,options)
    setWeatherData(weather)
    setIsPending(false)
    console.log(weather)
    return[weather,location]
    }else{
      console.log('cannot fetch city')
    }
  }
  const assignData=async()=>{
    setCity(searchedCity)
    const weather = await fetchWeather(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`,options)
    setWeatherData(weather)
    console.log('myfunction')
    console.log(searchedCity)
    
  }

  
  return (
    <Box className='home' sx={{
        backgroundColor:'white',
    }}>
      <SearchBox searchedCity={searchedCity} setSearchedCity={setSearchedCity}fetchData={fetchWeatherData} assignData={assignData}/>
      {isPending && <Box><h2>Loading...</h2></Box>}
      {city&&weatherData&&<Card className='weather-text'>{city.toUpperCase()+'-'+weatherData.current_observation.condition.text}</Card>}
      {city && <WeatherDisplay data={weatherData}/>}
    </Box>
  )
}

export default Home