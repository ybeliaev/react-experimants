import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography
                    component="div"
                    style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
                >
                    <Box textAlign="justify" m={1}>
                        Ambitioni dedisse scripsisse iudicaretur. Cras mattis
                        iudicium purus sit amet fermentum. Donec sed odio
                        operae, eu vulputate felis rhoncus.
                    </Box>
                </Typography>
            </Container>
        </>
    )
}

export default App
