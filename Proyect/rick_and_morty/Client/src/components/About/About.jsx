//! compornte tipo clase
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
        //!Acá los estados
        this.state = {//siempre debe ser this.state
            // elemento: 0,
          };
    }


    render() {
        //! Acá las funciones para actualizar estados
        // this.setState({ elemento: "lo que quiero hacer con el elemento Ej: this.state.elemento +1"}, () => {})//!callback al final

        return (
            <>
            {/* //!Así se llama al elemento */}
            {/* <h1>elemento:{this.state.elemento}</h1> */}
            <h1>El Componente About</h1>
            </>
        )
    }
}
export default About;