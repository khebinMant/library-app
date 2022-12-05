import { useEffect, useState } from 'react'
import { Card } from 'primereact/card';
import { useNavigate } from 'react-router-dom';
import { prominent } from 'color.js'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import notCover from '../../assets/no_cover_available.png'


export const BookItem = ({book}) => {

  const navigation = useNavigate()
  const [color, setColor] = useState("")
  const [hasCover, setHasCover] = useState(false)

  useEffect(() => {
    getColor()
  }, [])
  
  const getColor = async() =>{
    if(book.cover!==""){
      const color = await prominent(book.cover, { amount: 1 })
      setColor(`RGB(${color.toString()})`)
      setHasCover(true)
    }
    else{
      setHasCover(false)
    }
  }

  const handleNavigate = () =>{
      navigation(`view/${book.id}`)
  }
  
  const header = (
    <img className='image-cover' alt="cover" src={hasCover?book.cover:notCover} />
  );

  return (
    <Box>
        <Grid 
          xs={2} sm={4} md={2}
          onClick={handleNavigate}
        >
            <Card
              className='card-book animate__animated animate__bounceIn'
              title={book.title} 
              subTitle={book.author}
              style={{ width: '15em', height:'25em',backgroundColor:color, borderRadius:'10px' }}  
              header={header}
            >
            </Card>
      </Grid>
    </Box>
  )
}
