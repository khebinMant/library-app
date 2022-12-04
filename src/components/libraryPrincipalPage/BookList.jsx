import React from 'react'
import { BookItem } from './BookItem'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

export const BookList = ( {books} ) => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2,  sm:3, md: 2 }} columns={{ xs: 4, sm: 8, md: 10 }}>
      {
        books.map((book, index)=>(
          <BookItem key={index} book={book}/>
        ))
      }
      </Grid>
    </Box>
  )
}
