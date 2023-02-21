import React, { Component } from 'react';
import FormTitle from '../../stateless/formTitle/FormTitle';
import Button from '../../stateless/button/Button'
import Fade from 'react-reveal/Fade'

class FormAdd extends Component {

    state = {

        brand : "",
        color : "",
        price : ""
    }

    validationHandler = (event) => {
        event.preventDefault()

        this.props.addCar(this.state.brand, this.state.color, this.state.price)
        this.setState({
            brand : "",
            color : "",
            price : ""
        })
    }

    render() {
        return (
            <>

                <FormTitle/>

                    <Fade top cascade>
                        <form style={{ marginBottom: `10px` }}>
                            <div className="form-group">
                                    <label>Brand</label>
                                    <input className="form-control" type="text" id="brand"
                                    onChange = {(event) => this.setState({brand : event.target.value})}
                                    value = {this.state.brand} />
                            </div>

                            <div className="form-group">
                                <label>Color</label>
                                <input className="form-control" type="text" id="color"
                                onChange = {(event) => this.setState({color : event.target.value})}
                                value = {this.state.color} />
                            </div>

                            <div className="form-group">
                                <label>Price</label>
                                <input className="form-control" type="number" id="price"
                                onChange = {(event) => this.setState({price : event.target.value})}
                                value = {this.state.price} />
                            </div>

                            <div className="form-group">
                                <Button click = {this.validationHandler} typebtn = "btn-primary">Validate</Button>
                            </div>
                        </form>
                    </Fade>

            </>
        )
    }
}

export default FormAdd
