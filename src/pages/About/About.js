import React from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import { PageAnimated } from '../../components/PageAnimated'
import { Element } from '../Element'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
})

export const About = () => {
    return (
        <PageAnimated>
            <Grid container>
                <Element article="ABOUT" color="33ccff" />
                <Element article="ABOUT" color="33ccff" />
                <Element article="ABOUT" color="33ccff" />
                <Element article="ABOUT" color="33ccff" />
            </Grid>
        </PageAnimated>
    )
}
