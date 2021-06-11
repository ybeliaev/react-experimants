import React from 'react'

import { useDispatch } from 'react-redux'
import { profileAction } from '../../store/profile'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}))

export const LoginForm = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        const profile = {
            name: form.name.value,
            text: form.text.value,
        }
        dispatch(profileAction.setProfile(profile))
    }
    return (
        <Grid item xs={6}>
            <Paper className={classes.paper}>
                <form
                    className={classes.root}
                    noValidate
                    autoComplete="on"
                    onSubmit={handleSubmit}
                >
                    <TextField id="name" label="Name" name="name" />
                    <TextField id="text" label="Text" name="text" />
                    <Button variant="contained" color="primary" type="submit">
                        Send
                    </Button>
                </form>
            </Paper>
        </Grid>
    )
}
