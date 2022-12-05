import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { useNavigate, useLocation } from "react-router-dom"
import kruger from '../../assets/kruger.png'
import { useContext, useRef, useState, useEffect } from 'react';
import { LibraryContext } from '../../context/Library/LibraryContext';


export const NavBar = () => {

    const navigation = useNavigate()
    const location = useLocation()
    const inputRef = useRef()
    const [canSearch, setCanSearch] = useState(true)
    const {filterBook} = useContext(LibraryContext);

    useEffect(() => {
        if(location.pathname !== '/'){
            setCanSearch(false)
        }
        else{
            setCanSearch(true)
        }
    }, [location]);
    

    const onHandleChange = (e)=>{
        filterBook(inputRef.current.value)
    }

    const items = [
        {
            label: 'Biblioteca',
            icon: 'pi pi-fw pi-book',
            command:()=> {navigation('/')}
        },
        {
            label: 'Agregar libro',
            icon: 'pi pi-fw pi-pencil',
            command:()=> {navigation('/create')}

        }
    ]
    const start = <img alt="logo" src={kruger} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="60" className="mr-2"></img>;
    const end = 
    (
        canSearch===true?
        <InputText ref={inputRef} onChange={onHandleChange}  placeholder="Search" type="text" />
        :
        <></>
    );

    return (
        <div >
            <Menubar className='nav-bar' model={items} start={start} end={end} style={{height:'80px'}} />
        </div>
    )
}
