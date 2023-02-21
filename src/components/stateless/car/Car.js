import React from 'react';
import Button from "../button/Button"
import Zoom from 'react-reveal/Zoom'

const Car = (props) => {
    
    return (
        <Zoom>
            <tr>
                <td> {props.brand} </td>
                <td>{props.color}</td>
                <td>{"$ "+props.price}</td>
                <td><Button click={props.clickEdit} typebtn=" btn-primary">Edit</Button></td>
                <td><Button click={props.clickDel} typebtn=" btn-danger">Delete</Button></td>
            </tr>
        </Zoom>
    )
}

export default Car
