import React, { useState, useEffect,  Fragment } from 'react';


function Cita({cita, index, eliminarCita}) {
    return(
      <div className="cita">
        <p>Pet: <span>{cita.mascota}</span> </p>
        <p>Owner: <span>{cita.propietario}</span> </p>
        <p>Date: <span>{cita.fecha}</span> </p>
        <p>Hour: <span>{cita.hora}</span> </p>
        <p>symptoms: <span>{cita.sintomas}</span> </p>
        <button 
          onClick={() => eliminarCita(index)}
          type="button" className="button eliminar u-full-width">Delete X</button>
      </div>
    )
}

function Formulario({crearCita}) {

  const stateInicial = {
    mascota : '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  }

  // cita = state actual
  // actualizarCita = fn para cambiar el state
  const [cita, actualizarCita] = useState(stateInicial);

  // actualiza el state
  const actualizarState = e => {
    actualizarCita({
      ...cita, 
      [e.target.name] : e.target.value
    })
  }

  // pasamos la cita al componente principal
  const enviarCita = e => {
    e.preventDefault();

    console.log(cita);

    // pasar la cita hacia el componente principal
    crearCita(cita)

    // Reiniciar el state (reiniciar el form)
    actualizarCita(stateInicial)
  }


  return (
      <Fragment>
        <h2>Create Appointment</h2>
        <form onSubmit={enviarCita}>
                <label>Pet Nickname</label>
                <input 
                  type="text" 
                  name="mascota"
                  className="u-full-width" 
                  placeholder="Pet nickname" 
                  onChange={actualizarState}
                  value={cita.mascota}
                />

                <label>Owner Fullname</label>
                <input 
                  type="text" 
                  name="propietario"
                  className="u-full-width"  
                  placeholder="Owner" 
                  onChange={actualizarState}
                  value={cita.propietario}
                />

                <label>Date</label>
                <input 
                  type="date" 
                  className="u-full-width"
                  name="fecha"
                  onChange={actualizarState}
                  value={cita.fecha}
                />               

                <label>Hour</label>
                <input 
                  type="time" 
                  className="u-full-width"
                  name="hora" 
                  onChange={actualizarState}
                  value={cita.hora}
                />

                <label>Symptoms</label>
                <textarea 
                  className="u-full-width"
                  name="sintomas"
                  placeholder="symptoms"
                  onChange={actualizarState}
                  value={cita.sintomas}
                ></textarea>

                <button type="submit" className="button-primary u-full-width">Add</button>
            </form>
      </Fragment>
  )
  
}

function App() {

  // cargar las citas de localstorage como state inicial
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if(!citasIniciales) {
    citasIniciales = [];
  }

  // useState retorna 2 funciones
  // El state actual = this.state;
  // Función que actualiza el state this.setState();
  const [citas, guardarCita] = useState(citasIniciales);

  // Agregar las nuevas citas al state
  const crearCita = cita => {
    // Tomar una copia del state y agregar el nuevo cliente
    const nuevasCitas = [...citas, cita];

    // almacenamos en el state
    guardarCita(nuevasCitas);
  }
  // Elimina las Citas del State
  const eliminarCita = index => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    guardarCita(nuevasCitas);
  }

  useEffect(
    () => {
        let citasIniciales = JSON.parse(localStorage.getItem('citas'));
        if(citasIniciales) {
          localStorage.setItem('citas', JSON.stringify(citas));
        } else {
          localStorage.setItem('citas', JSON.stringify([]));
        }
    }, [citas] )

  // Cargar Condicionalmente un Titulo
  const titulo = Object.keys(citas).length === 0 ? "There's no appointments" : 'Manage appointments here';

  return(
      <Fragment>
        <h1>MedPet</h1>
        <div className="container">
            <div className="row">
                <div className="one-half column">
                    <Formulario 
                      crearCita={crearCita}
                    />
                </div>
                <div className="one-half column">
                  <h2>{titulo}</h2>
                  {citas.map((cita, index ) => (
                      <Cita 
                        key={index}
                        index={index}
                        cita={cita}
                        eliminarCita={eliminarCita}
                      />
                  ))}
                </div>
            </div>
        </div>
      </Fragment>
  )
}

export default App;