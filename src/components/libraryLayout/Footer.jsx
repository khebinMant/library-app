import '../../styles/NavBar.css'
import kmaleon from '../../assets/kmaleon.png'

export const Footer = () => {
 
  return (
    <footer className="footer">
       <img  alt="logo" src={kmaleon} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="140" className="kmaleon"></img>
       <h3>Mi libreria digital</h3>
      <span>
        <h3>
          <b>
            @khabinSd
          </b>
        </h3>
      </span>
    </footer>
  )
}
