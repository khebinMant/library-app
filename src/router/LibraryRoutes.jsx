import { Route, Routes } from 'react-router-dom'
import { CreateBookPage } from '../pages/CreateBookPage'
import { LibraryPrincipalPage } from '../pages/LibraryPrincipalPage'
import { ViewBookPage } from '../pages/ViewBookPage'
import { LibraryProvider } from '../context/Library/LibraryProvider'
import { LibraryLayout } from '../ui/LibraryLayout'

export const LibraryRoutes = () => {
  return (
    <LibraryProvider>
        <LibraryLayout>
          <Routes>
              <Route path='/' element = { <LibraryPrincipalPage /> }/>
              <Route path='/create' element = { <CreateBookPage /> }/>
              <Route path='/view/:bookId' element = { <ViewBookPage /> }/>

              <Route path='/*' element = { <LibraryPrincipalPage /> }/>
          </Routes>
        </LibraryLayout>
    </LibraryProvider>
  )
}
