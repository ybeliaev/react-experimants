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

export const Contacts = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <Element article="CONTACTS" color="00ff99" />
            <Element article="CONTACTS" color="00ff99" />
            <Element article="CONTACTS" color="00ff99" />
            <Element article="CONTACTS" color="00ff99" />
        </Grid>
    )
}
