import React from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import { Element } from '../Element'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
})

export const Main = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <Element article="MAIN" color="ff6600" />
            <Element article="MAIN" color="ff6600" />
            <Element article="MAIN" color="ff6600" />
            <Element article="MAIN" color="ff6600" />
        </Grid>
    )
}
