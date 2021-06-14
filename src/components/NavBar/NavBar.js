import React from 'react'

import { path } from '../../static/constants'

import { useHistory } from 'react-router'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginBottom: '10px',
    },
})

export const NavBar = () => {
    const classes = useStyles()
    const [value, setValue] = React.useState(0)

    const history = useHistory()

    const handleChange = (event, newValue) => {
        console.log({ newValue })
        setValue(newValue)
    }
    const handleClickLink = (path) => (e) => {
        e.preventDefault()
        history.push(path)
    }
    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Main" onClick={handleClickLink(path.main)} />
                <Tab
                    label="Contacts"
                    onClick={handleClickLink(path.contacts)}
                />
                <Tab label="About" onClick={handleClickLink(path.about)} />
            </Tabs>
        </Paper>
    )
}
