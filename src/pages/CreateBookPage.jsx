import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { classNames } from "primereact/utils";

import "../styles/CreateBookPage.css";

import { useForm } from "../hooks/useForm";

export const CreateBookPage = () => {
  const {
    isFormFieldValid,
    getFormErrorMessage,
    formik,
    showMessage,
    setShowMessage,
    dialogFooter,
    handleOnChangeFile,
    cover,
  } = useForm();

  return (
    <div className="form-book">
      <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="top"
        footer={dialogFooter}
        showHeader={false}
        breakpoints={{ "960px": "80vw" }}
        style={{ width: "30vw" }}
      >
        <div className="flex align-items-center flex-column pt-6 px-3">
          <i
            className="pi pi-check-circle"
            style={{ textAlign:'center', marginTop:"20px", fontSize: "4rem", color: "var(--green-500)" }}
          ></i>
          <h2  style={{ textAlign:'center'}}>Libro creado satisfactoriamente</h2>
          <h1 style={{textAlign:'center'}}>   😎😎 </h1>
        </div>
      </Dialog>

      <div className="flex justify-content-center">
        <div className="card">
          <h1 className="text-center">Agrega un libro</h1>
          <form onSubmit={formik.handleSubmit} className="p-fluid">
            <div className="field">
              <span className="p-float-label">
                <InputText
                  id="title"
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  autoFocus
                  className={classNames({
                    "p-invalid": isFormFieldValid("title"),
                  })}
                />
                <label
                  htmlFor="title"
                  className={classNames({
                    "p-error": isFormFieldValid("title"),
                  })}
                >
                  Título*
                </label>
              </span>
              {getFormErrorMessage("title")}
            </div>

            <div className="field">
              <span className="p-float-label">
                <InputText
                  id="author"
                  name="author"
                  value={formik.values.author}
                  onChange={formik.handleChange}
                  className={classNames({
                    "p-invalid": isFormFieldValid("author"),
                  })}
                />
                <label
                  htmlFor="author"
                  className={classNames({
                    "p-error": isFormFieldValid("author"),
                  })}
                >
                  Autor*
                </label>
              </span>
              {getFormErrorMessage("author")}
            </div>

            <div className="field">
              <span className="p-float-label">
                <InputText
                  id="intro"
                  name="intro"
                  value={formik.values.intro}
                  onChange={formik.handleChange}
                  className={classNames({
                    "p-invalid": isFormFieldValid("intro"),
                  })}
                />
                <label
                  htmlFor="intro"
                  className={classNames({
                    "p-error": isFormFieldValid("intro"),
                  })}
                >
                  Introducción*
                </label>
              </span>
              {getFormErrorMessage("intro")}
            </div>

            <div className="field">
              <span className="p-float-label">
                <InputText
                  id="review"
                  name="review"
                  value={formik.values.review}
                  onChange={formik.handleChange}
                  className={classNames({
                    "p-invalid": isFormFieldValid("review"),
                  })}
                />
                <label
                  htmlFor="review"
                  className={classNames({
                    "p-error": isFormFieldValid("review"),
                  })}
                >
                  Revisión*
                </label>
              </span>
              {getFormErrorMessage("review")}
            </div>
            
            <div className="check-input">
              <div style={{marginBottom:'15px'}} className="field-checkbox">
              <label
                  htmlFor="completed"
                  className={classNames({
                    "p-error": isFormFieldValid("completed"),
                  })}
                >
                  ¿Terminaste de leer este libro?
                </label>
                <Checkbox
                  inputId="completed"
                  name="completed"
                  checked={formik.values.completed}
                  onChange={formik.handleChange}
                  className={classNames({
                    "p-invalid": isFormFieldValid("completed"),
                  })}
                />

              </div>

              <div className="field">
                <span className="p-float-label">
                  <input type="file" name="cover" onChange={handleOnChangeFile} />
                  <div>
                    {!!cover ? (
                      <img src={cover} width="200" alt="book-img" />
                    ) : (
                      <></>
                    )}
                  </div>
                </span>
              </div>
            </div>
           
            <Button type="submit" label="Agregar" className="p-button-rounded p-button-success" />
          </form>
        </div>
      </div>
    </div>
  );
};
