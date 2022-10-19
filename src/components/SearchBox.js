import React from 'react'
import {Box,Stack,TextField} from '@mui/material'
import search_icon from '../images/weather_observation/search.png'


function SearchBox({searchedCity,setSearchedCity,assignData}) {


  return (
    <Box>
        <Stack  className='search-bar' direction='row'>
            <TextField onChange={(e)=>setSearchedCity(e.target.value.toLowerCase())}  value={searchedCity} placeholder='Enter a City'></TextField>
            <img  onClick={()=>assignData()}src={search_icon} alt={'search_icon'}  className='search'/>
        </Stack>
    </Box>
  )
}
export default SearchBox
