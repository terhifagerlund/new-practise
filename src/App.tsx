import React from 'react';
import './App.css';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import AppBarCustom from './AppBarCustom';
import CenterBackground from './CenterBackground';
import BottomBackground from './BottomBackground';
import UpperBackground from './UpperBackground';


const Container = styled.div`
  height: 100%;
  `;

export default function App() {
  return (
    <Container>
      <Grid item>
        <AppBarCustom></AppBarCustom>
        <UpperBackground></UpperBackground>
        <CenterBackground></CenterBackground>
        <BottomBackground></BottomBackground>
      </Grid>
    </Container>
  )
}


