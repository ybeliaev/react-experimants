import React from 'react'

import { useSelector } from 'react-redux'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    inline: {
        display: 'inline',
        marginRight: '5px',
    },
}))

export const Profile = () => {
    const classes = useStyles()
    const { profile } = useSelector((state) => state.profile)

    const profileName = profile?.name ? profile.name : 'Anonymous'
    const profileText = profile?.text ? profile.text : 'nothing doing..'

    return (
        <Grid item xs={6}>
            <Paper className={classes.paper}>
                <List className={classes.root}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src="../../static/images/avatar/1.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {profileName}
                                    </Typography>
                                    {profileText}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Paper>
        </Grid>
    )
}
