import { useEffect, useReducer, useState } from "react";
import { types } from "../types/types";
import { LibraryContext } from "./LibraryContext"
import { libraryReducer } from './libraryReducer'


const init = ()=>{  
    const books =  JSON.parse( localStorage.getItem('books')) || [];
    return [...books]
}

export const LibraryProvider = ({ children }) => {

    const [libraryState, dispatch] = useReducer(libraryReducer, [] ,init)
    const [isFiltered, setIsFiltered] = useState(false);
    const [searchedBooks, setSearchedBooks] = useState(libraryState)

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(libraryState))
    }, [libraryState])

    const getItem = (id)=>{
        const book = libraryState.find(book => book.id === id)
        return book
    }

    const createBook = (book)=>{
        const action = {type: types.createBook, payload:book}
        dispatch(action)
    }

    const updateBook = (book)=>{
        const bookIndex = libraryState.findIndex((item) =>item.id === book.id)
        const action = {type: types.updateBook, payload:{book,bookIndex}}
        dispatch(action)
    }

    const deleteBook = (id)=>{
        const bookIndex = libraryState.findIndex((book) => book.id === id);
        const action = {type: types.deleteBook, payload:bookIndex}
        dispatch(action)
    }

    const filterBook = (query)=>{
        if(!!query){
            const resp = libraryState.filter((book)=>{
                return(
                    book.title.toLowerCase().includes(query) ||
                    book.intro.toLowerCase().includes(query) ||
                    book.author.toLowerCase().includes(query)
                )
            });
            setSearchedBooks([...resp])
            setIsFiltered(true)
        }
        else{
            setIsFiltered(false)
            setSearchedBooks([...libraryState])
        }
    }

    return (
        <LibraryContext.Provider value={{
                libraryState,
                getItem,
                createBook,
                updateBook,
                deleteBook,
                isFiltered,
                setIsFiltered,
                filterBook,
                searchedBooks
        }}>
            {children}
        </LibraryContext.Provider>
    )
}

