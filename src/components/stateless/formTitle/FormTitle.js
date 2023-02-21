import React from 'react'
import styles from "./FormTitle.module.css"
import Zoom from 'react-reveal/Zoom'

function FormTitle() {
    return <Zoom><h1 className = {`${styles.fontHeading} text-center`}>Add Cars</h1></Zoom> 
}

export default FormTitle
