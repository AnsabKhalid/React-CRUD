import React, { Component } from 'react'
import Button from "../../../stateless/button/Button"
import Zoom from 'react-reveal/Zoom'

class Formedit extends Component {

    state = {
        brand : this.props.brand,
        color : this.props.color,
        price : this.props.price
    }

    updateValidationHandler = () => {
        // console.log(this.props.id);
        // console.log(this.state.brand);
        // console.log(this.state.color);
        // console.log(this.state.price);
        
        this.props.updateCar(this.props.id, this.state.brand, this.state.color, this.state.price)
    }

    render() {
        return (
            <Zoom>
                <tr>
                    <td><input className = "form-control" type = "text" onChange = {(event) => this.setState({
                        brand : event.target.value
                    })} value = {this.state.brand} /></td>
                    <td><input className = "form-control" type = "text" onChange = {(event) => this.setState({
                        color : event.target.value
                    })} value = {this.state.color} /></td>
                    <td><input className = "form-control" type = "number" onChange = {(event) => this.setState({
                        price : event.target.value
                    })} value = {this.state.price} /></td>
                    <td><Button click = {this.updateValidationHandler} typebtn=" btn-warning">Update</Button></td>
                </tr>
            </Zoom>
        )
    }
}

export default Formedit
