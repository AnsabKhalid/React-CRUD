import React, { Component } from 'react'
import Car from "../../../components/stateless/car/Car"
import FormAdd from "../form/FormAdd"
import Formedit from "../form/formtoedit/Formedit"
import Fade from 'react-reveal/Fade'

class Cars extends Component {

    state = {
        myCars : localStorage.getItem("newcars") ? JSON.parse(localStorage.getItem("newcars")) : [],
        lastId : localStorage.getItem("lastid") ? JSON.parse(localStorage.getItem("lastid")) : 0,
        dataEditing : 0
    }

    deleteCarHandler = (id) => {
        // console.log("You have clicked on Delete Button");

        const index = this.state.myCars.findIndex(index => {
            return index.id === id
        })

        console.log("the id is "+id+" and the index is "+index)
        
        const newCars = [...this.state.myCars]

        newCars.splice(index, 1);

        this.setState({
            myCars : newCars
        })

        localStorage.setItem("newcars", JSON.stringify(newCars));
    }

    addCarHandler = (brand, color, price) => {
       const newCar = {
           id : this.state.lastId + 1,
           brand : brand,
           color : color,
           price : price
       }

       const lastId = this.state.lastId + 1

       const newCars = [...this.state.myCars]

       newCars.push(newCar);

       this.setState((prevState) => ({
           myCars : newCars,
           lastId : prevState.lastId + 1
       }))

       localStorage.setItem("newcars", JSON.stringify(newCars));
       localStorage.setItem("lastid", JSON.stringify(lastId))

       this.props.closeForm()
    }

    updateCarHandler = (id, brand, color, price) => {
        const index = this.state.myCars.findIndex(index => {
            return index.id === id
        })

        const newCar = {
            id : id,
            brand : brand,
            color : color,
            price : price
        }

        const newCars = [...this.state.myCars]

        newCars[index] = newCar
        
        this.setState({
            myCars : newCars,

            dataEditing : 0
        })

        localStorage.setItem("newcars", JSON.stringify(newCars))
    }

    render() {
        return (
            <>
                <Fade>
                    <table className="table text-center">
                    <thead>
                        <tr className="table-dark">
                            <th>Brand</th>
                            <th>Color</th>
                            <th>Price</th>
                            <th colSpan = "2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.myCars.map((car, index) => {
                                if(this.state.dataEditing !== car.id) {
                                    return(
                                        <Car key = {car.id} brand = {car.brand} color = {car.color} price = {car.price} clickDel={() => this.deleteCarHandler(car.id)} clickEdit={() => this.setState({dataEditing : car.id})} />
                                    )
                                } else {
                                        return (
                                            <Formedit 
                                                key = {car.id}
                                                id = {car.id}
                                                brand = {car.brand}
                                                color = {car.color}
                                                price = {car.price}
                                                updateCar = {this.updateCarHandler}
                                            />
                                        )
                                }
                            })
                        }
                    </tbody>
                    </table> 
                </Fade>

                {
                    this.props.isFormOpen && <FormAdd addCar = {this.addCarHandler} />
                }
            </>
        )
    }
}

export default Cars
