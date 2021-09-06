import data from "./data.json"
import React, { Component } from "react"
import Opciones from "./Opciones"
import Anteriores from "./Anteriores"

const historial = []

class Principal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seleccionAnterior: "",
            contador: 0,
        }
    }

    componentDidUpdate() {
        historial.push(this.state.seleccionAnterior)
    }

    handleClick = (event) => {
        const id = event.target.value
        if(this.state.contador >= 7) {
            alert("Fin")
        } else if(id === "A" && this.state.seleccionAnterior !== "A") {
            this.setState({
                seleccionAnterior: id,
                contador: this.state.contador + 1
            })
        } else if(id === "A" && this.state.seleccionAnterior === "A") {
            this.setState({
                seleccionAnterior: id,
                contador: this.state.contador + 2
            })
        } else if(id === "B" && this.state.seleccionAnterior === "A") {
            this.setState({
                seleccionAnterior: id,
                contador: this.state.contador + 3
            })
        } else if(id === "B") {
            this.setState({
                seleccionAnterior: id,
                contador: this.state.contador + 2
            })
        }
    }

    render() {
        return (
            <div className="layout">
                <h1 className="historia">{data[this.state.contador].historia}</h1>
                <Opciones 
                    handleClick={this.handleClick}
                    opcionA={data[this.state.contador].opciones.a}
                    opcionB={data[this.state.contador].opciones.b}
                />
                <Anteriores
                    seleccionAnterior={this.state.seleccionAnterior}
                    historial= {historial.map((opcion, index) => (
                        <li key={index}>{opcion}</li>
                    ))}
                />
            </div>
        )
    }
}

export default Principal;