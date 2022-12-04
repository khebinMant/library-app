import React, { useContext } from 'react'
import { BookList } from '../components/libraryPrincipalPage/BookList';
import { LibraryContext } from '../context/Library/LibraryContext';
import '../styles/LibraryPrincipal.css'

export const LibraryPrincipalPage = () => {

  const { libraryState, isFiltered, searchedBooks } = useContext(LibraryContext);

  return (
    <div className='content-library'>
      {
        isFiltered?
        <BookList books={searchedBooks}/>
        :
        <BookList books={libraryState}/>
      }
    </div>
  )
}
