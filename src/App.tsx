import React from 'react';
import './App.css';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import AppBarCustom from './AppBarCustom';
import HeroPartition from './HeroPartition';
import ServicesPartition from './ServicesPartition';
import SkillsPartition from './SkillsPartition';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

const Container = styled.div`
  height: 100%;
  `;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid item>
          <AppBarCustom></AppBarCustom>
          <HeroPartition></HeroPartition>
          <ServicesPartition></ServicesPartition>
          <SkillsPartition></SkillsPartition>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}


