import React from 'react';

const IngresarSesion = () => {
    return (
      <form>
        <h2 className="text-center">Iniciar Sesión</h2>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Correo Electrónico"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Ingrese su contraseña"
            required
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="terminos"
            required
          />
          <label className="form-check-label" htmlFor="terminos">
            Aceptar términos y condiciones
          </label>
        </div>
        <div className="form-group">
          <button onClick={()=>cambiarEstadoSesion(true)} type="submit" className="btn btn-primary btn-block">
            Iniciar Sesion
          </button>
        </div>
      </form>
    );
  };
  
  export default IngresarSesion;
