import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GoBack } from "../components/libraryLayout/GoBack";
import { BookNotFound } from "../components/libraryViewBookPage/BookNotFound";
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
      <GoBack />
      {
        book?
          <BookView book={book}/>
        :
          <BookNotFound />
      }
    </>
  )
}
