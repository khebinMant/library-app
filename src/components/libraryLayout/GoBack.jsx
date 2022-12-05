import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import '../../styles/NavBar.css'

export const GoBack = () => {

  const navigate =   useNavigate()
  return (
    <div>
        <Button 
            label="Volver" 
            className="p-button-raised p-button-success" 
            style={{position:'absolute', margin:'-50px auto 0px auto'}}
            onClick={()=>{navigate(-1)}}
        />
    </div>
  )
}
