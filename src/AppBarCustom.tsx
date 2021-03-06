import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from './assets/logo.png';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const AppBarColor= styled.div`
  background-color: #FFF;
  `;

const AppBarStyle = styled.div`
  height: 63px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: 65px;
  background-position: center;
  flex-grow: 1;
  `;

const ButtonAling = styled.div`
  text-align: right;
`;  


export default function AppBarCustom() {
    return (
        <AppBar position="static">
          <Toolbar component={AppBarColor}>
            <Grid item xs={3}>
              <AppBarStyle></AppBarStyle>
            </Grid>
            <Grid item xs={8}>
              <ButtonAling>
                <Button color="primary">Home</Button>
                <Button>Works</Button> 
                <Button>Contacts</Button> 
              </ButtonAling>
            </Grid>
          </Toolbar>
        </AppBar>
    );
}