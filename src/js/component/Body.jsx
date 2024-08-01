import React, {useState} from "react";
import IngresarSesion from "./IngresarSesion";
import ContenidoPrincipal from "./ContenidoPrincipal";
import Navbar from "./Navbar";



const Body = () => {
	const [sesion, cambiarEstadoSesion] = useState(true);
	
	return (
		<>
			{sesion === true ? <div>
				<Navbar />
				<ContenidoPrincipal />
				
				<button onClick={()=>cambiarEstadoSesion(false)} type="submit" className="btn btn-primary btn-block">
           			 Cerrar Sesion
          		</button>
			</div>
			 : 
			<div class="login-form">
				<IngresarSesion />
  			</div>}
		</>
	);
};

export default Body;
