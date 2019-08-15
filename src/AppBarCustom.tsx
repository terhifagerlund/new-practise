import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from './logo.png';
import { Button } from '@material-ui/core';

const AppBarColor= styled.div`
  background-color: #FFF;
  `;

const AppBarStyle = styled.div`
  height: 63px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: 65px;
  background-position: left;
  margin-left: 184px;
  flex-grow: 1;
  `;

const YellowText = styled.span`
  color: #FFD43D;
`;

const BlackText = styled.span`
  color: #000;
`;

export default function AppBarCustom() {
    return (
        <AppBar position="static">
          <Toolbar component={AppBarColor}> 
            <AppBarStyle></AppBarStyle>
            <Button>
              <YellowText>HOME</YellowText>
            </Button>
            <Button>
              <BlackText>WORKS</BlackText>
            </Button>
            <Button>
              <BlackText>CONTACTS</BlackText>
            </Button>
          </Toolbar>
        </AppBar>
    );
}