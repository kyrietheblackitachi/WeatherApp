import React from 'react'
import {Box,Stack,Button,Tab,Tabs} from '@mui/material'
import CurrentObservation from './CurrentObservation'
import Forecast from './Forecast'
import { useState } from 'react'
import bubbles from '../images/bubbles.jpg'
function WeatherDisplay({data}) {
  const[highlight,setHighlight] = useState(false)
  const[forecast,setForecast] = useState(true)
  const [value,setValue] = useState('1')

  const showHighlight=()=>{
    setForecast(false)
    setHighlight(true)
 
  }
  const showForecast=()=>{
    setHighlight(false)
    setForecast(true)
  }
  return (
    <Box className='weather-display'>
      <Tabs inkBarStyle={{background: 'blue'}}>
        <Tab className='forecast'onClick={showForecast} label='weekly Forecast' />
        <Tab className='highlight'onClick={showHighlight} label='Observation Highlights'/> 
      </Tabs>
     {data && highlight && <CurrentObservation data={data}/>}
     {data && forecast && <Forecast  data={data}/>}
    </Box>
  )
}

export default WeatherDisplay