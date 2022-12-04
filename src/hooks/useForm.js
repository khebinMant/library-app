
import { useContext, useState } from 'react'
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { LibraryContext } from '../context/Library/LibraryContext';
import { useNavigate } from 'react-router-dom';


export const useForm = () => {

      const { createBook } = useContext(LibraryContext);

      const navigate = useNavigate()
      const [showMessage, setShowMessage] = useState(false);
      const [formData, setFormData] = useState({});
      const [cover, setCover] = useState("")

      const formik = useFormik(
        {
            initialValues: {
                title: '',
                author: '',
                cover: '',
                intro: '',
                completed: false,
                review: ''
            },
          validate: (data) => {
              let errors = {};
      
              if (!data.title) {
                  errors.title = 'title is required.';
              }
      
              if (!data.author) {
                  errors.author = 'Author is required.';
              }
    
              if(!data.intro){
                errors.intro = 'Introduction is required'
              }
           
              if(!data.review){
                errors.review = 'Review is required'
              }
    
              return errors;
          },
          onSubmit: (data) => {
            setFormData(data);
            setShowMessage(true);
            const newBook = {
              ...data,
              id: crypto.randomUUID(),
              cover
            }
            createBook(newBook)
            formik.resetForm();
          }
        }
      );
  
      function handleOnChangeFile(e) {
        const element = e.target;
        var file = element.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
          setCover(reader.result.toString())
        };
        reader.readAsDataURL(file);
      }

      const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
  
      const getFormErrorMessage = (name) => {
          return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
      };

      const continueAfterCreate = ()=>{
        setShowMessage(false)
        navigate('/')
      }

      const dialogFooter = <div className="flex justify-content-center"><Button  label="Continuar" className="p-button-text" autoFocus onClick={continueAfterCreate} /></div>;

  return {
    isFormFieldValid,
    getFormErrorMessage,
    formik,
    showMessage,
    setShowMessage,
    formData,
    setFormData,
    dialogFooter,
    handleOnChangeFile,
    cover
  }
}
