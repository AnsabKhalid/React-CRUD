import React from 'react';
import styles from "./heading.module.css"
import Zoom from 'react-reveal/Zoom'

const Heading = (props) => {
    const style = `${styles.fontHeading} border border-dark p-2 m-2 bg-primary rounded text-white text-center`
    return (
        <Zoom>
            <h1 className={style}>{props.children}</h1>
        </Zoom>
    )
}

export default Heading
