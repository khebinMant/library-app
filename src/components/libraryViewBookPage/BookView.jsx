import { useContext, useEffect, useRef, useState } from 'react'
import { Card } from 'primereact/card';
import { prominent } from 'color.js'
import { Button } from 'primereact/button';
import { BookEdit } from './BookEdit';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { LibraryContext } from '../../context/Library/LibraryContext';
import { useNavigate } from 'react-router-dom';

import notCover from '../../assets/no_cover_available.png'

export const BookView = ({book}) => {

  const navigate = useNavigate()
  const toast = useRef(null);
  const [color, setColor] = useState("")
  const [hasCover, setHasCover] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const { deleteBook } = useContext(LibraryContext)

  useEffect(() => {
    getColor()
  }, [])
  
  const accept = () => {
      deleteBook(book)
      toast.current.show({ severity: 'success', summary: 'Eliminado', detail: 'El libro se ha borrado correctamente', life: 3000 });
      setTimeout(() => {
        navigate('/')
      }, 2000);
  }

  const confirmD = () => {
      confirmDialog({
          message: `¿Estas seguro de querer borrar este libro?`,
          header: 'Confirmar eliminación',
          icon: 'pi pi-exclamation-triangle',
          accept
      });
  };
  
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

  const header = (
    <img className='image-cover' alt="cover" src={hasCover?book.cover:notCover} />
  );

  const footer = (
    isEdit?
    <span className='edit-button'>
        <Button onClick={()=>setIsEdit(!isEdit)}  className='p-button-rounded p-button-secondary' label="Cancelar" icon="pi pi-check" />
    </span>
    :
    <span className='edit-button' >
        <Button onClick={()=>setIsEdit(!isEdit)} className='p-button-rounded p-button-secondary' label="Editar" icon="pi pi-check" />
        <Button onClick={confirmD} className="p-button-rounded p-button-danger" label="Eliminar" icon="pi pi-check" />
    </span>
  );
  return (
    <div className='book-view-content'>
      <Toast ref={toast} />
      <Card
        className='card-book animate__animated animate__bounceIn'
        title={book.title} 
        subTitle={book.author} 
        style={{backgroundColor:color}}  
        header={header}
        footer={footer}
      >
        <ConfirmDialog />
        <p><b>Introducción: </b> {book.intro}</p>
        <p><b>Revisión: </b> {book.review}</p>
        <p>
          <b>Completado: </b>
          {
            book.completed?
            <i className="pi pi-check mr-2"></i>
            :
            <i className="pi pi-times mr-2"></i>
          }
        </p>
      </Card>
      {
        isEdit 
        && 
        <BookEdit book={book}/>
      }
    </div>
  )
}
