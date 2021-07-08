import React from 'react'
import { marginPaddingZero } from "../../react-material-styles/styles";

export const HomeIndex = () => {
    const classes = marginPaddingZero();
    return (
        <div>
            <h3 className={classes.root}>This is the home index</h3>

            <p>Lets test a formulary</p>
        </div>
    )
}
