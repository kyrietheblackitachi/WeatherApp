import React from 'react'
import {Container,Grid,Card,} from '@mui/material'
import humidity from '../images/weather_observation/humidity.jpg'
import pressure from '../images/weather_observation/pressure.jpg'
import temperature from '../images/weather_observation/temperature.webp'
import wind_speed from '../images/weather_observation/windspeed.jpg'
import wind_dir  from '../images/weather_observation/winddir.jpg'
import cloudiness from '../images/weather_observation/cloud.jpg'
function CurrentObservation({data}) {
  console.log()
  return (
    <Container className='observation'>
      <Grid  className='grid-box' container spacing={0} alignItem='center' justifyContent='center'rowSpacing={3}>
        <Grid className='grid'item xs={6} sm={4}><Card className='obs-card humidity'><h5>Humidity</h5><img src={humidity} alt='humidity'/><h5>{data.current_observation.atmosphere.humidity}</h5></Card></Grid>
        <Grid className='grid'item  xs={6} sm={4}><Card className='obs-card pressure'><h5>Pressure</h5><img src={pressure} alt='pressure'/><h5>{data.current_observation.atmosphere.pressure}</h5></Card></Grid>
        <Grid className='grid'item xs={6} sm={4}><Card className='obs-card wind-speed'><h5>Wind Speed</h5><img src={wind_speed} alt='wind-speed'/><h5>{data.current_observation.wind.speed}</h5></Card></Grid>
        <Grid className='grid'item  xs={6} sm={4}><Card className='obs-card wind-direction'><h5>Wind Direction</h5><img src={wind_dir} alt='wind-direction'/><h5>{data.current_observation.wind.direction}</h5></Card></Grid>
        <Grid className='grid'item  xs={6} sm={4}><Card className='obs-card temperature'><h5>Temperature</h5><img src={temperature} alt='temperature'/><h5>{data.current_observation.condition.temperature}</h5></Card></Grid>
        <Grid className='grid'item  xs={6} sm={4}><Card className='obs-card cloudiness'><h5>Cloudiness</h5><img src={cloudiness} alt='cloudiness'/><h5>Little cloud</h5></Card></Grid>
      </Grid>
    </Container>
  )
}

export default CurrentObservation