import React from 'react'

import { store } from './store'
import { Provider } from 'react-redux'

import { LoginForm, Profile } from './components'
import { Main } from './pages/Main'

import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#b8f5e7',
        minHeight: '100vh',
        overflow: 'hidden',
        paddingTop: '10px',
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}))

function App() {
    const classes = useStyles()
    return (
        <Provider store={store}>
            <CssBaseline />
            <Container maxWidth="lg" className={classes.root}>
                <Grid container spacing={3}>
                    <Profile />
                    <LoginForm />
                    <Main />
                </Grid>
            </Container>
        </Provider>
    )
}

export default App
