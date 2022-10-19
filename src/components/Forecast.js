import React from 'react'
import {Container,Card,Stack} from '@mui/material'

function Forecast({data}) {
  return (
    <Container>
        <Stack className='forecast-stack'>
        <Card className='forecast'><h2>{data.forecasts[0].day}</h2><h4>{data.forecasts[0].text}</h4></Card>
        <Card className='forecast'><h2>{data.forecasts[1].day}</h2><h4>{data.forecasts[1].text}</h4></Card>
        <Card className='forecast'><h2>{data.forecasts[2].day}</h2><h4>{data.forecasts[2].text}</h4></Card>
        <Card className='forecast'><h2>{data.forecasts[3].day}</h2><h4>{data.forecasts[3].text}</h4></Card>
        <Card className='forecast'><h2>{data.forecasts[4].day}</h2><h4>{data.forecasts[4].text}</h4></Card>
        <Card className='forecast'><h2>{data.forecasts[5].day}</h2><h4>{data.forecasts[5].text}</h4></Card>
        <Card className='forecast'><h2>{data.forecasts[6].day}</h2><h4>{data.forecasts[6].text}</h4></Card>
      </Stack>
    </Container>
  
  )
}

export default Forecast