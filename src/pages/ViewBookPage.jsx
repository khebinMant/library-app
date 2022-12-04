import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BookView } from "../components/libraryViewBookPage/BookView";
import { LibraryContext } from "../context/Library/LibraryContext";
import '../styles/ViewBookPage.css'

export const ViewBookPage = () => {

  const {getItem} = useContext(LibraryContext);
  const [book, setBook] = useState(null);
  const params =  useParams();

  useEffect(() => {
    const item =  getItem(params.bookId)
    setBook(item)
  }, [])

  
  return (
    <>
      {
        book?
        <BookView book={book}/>
        :
        <>
          <p>No hay ese libro</p>
        </>
      }
    </>
  )
}
