import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import styled from 'styled-components'

import { useInput } from '../utils/useInput'

const UserInput = styled.input`
  height: 30px;
  font-size: 1.2rem
`

const useStyles = makeStyles(theme => ({
  root: {

  },

  title: {
    width: "100px",
    
  },
}));


export default function Nav({ getUserInfo }) {
  const classes = useStyles();
  const [user, setUser, handleChanges] = useInput({id: ''})

  const handleSubmit = (e) => {
    e.preventDefault()
    getUserInfo(user.id)
    setUser({id: ''})
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            CS26 Coin
          </Typography>
          <form
            
            onSubmit={handleSubmit}
          >
            <UserInput
              type="text"
              name="id"
              placeholder="User Id"
              value={user.id}
              onChange={handleChanges}
            />
            <Button color="inherit" type='submit'>Search</Button>
          </form>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}