import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Typography, Button } from '@material-ui/core';
import TrendingFlatBlack from '@material-ui/icons/TrendingFlat';
import Skills from './Skills';
import html5_icon from './assets/icons/html5_icon.png';
import bugfree_icon from './assets/icons/bugfree_icon.png';
import javascript_icon from './assets/icons/javascript_icon.png';
import database_icon from './assets/icons/database_icon.png';

const SkillsBackground = styled.div`
  background-color: #FFF;  
  text-align: center;  
  height: 100%;  
  `;

const Header = styled.div`
  padding: 45px;
  text-align: center;
`;

const TwoTextBox = styled.div`
  background-color: #F2F2F2;
  padding: 20px;
  margin: 9px;         
  `;

const TextPaddings = styled.div`
  padding-top: 20px;  
`;

const ButtonStyle = styled.div`
  padding: 20px;
  `;

export default function SkillsPartition() {
  return (
    <SkillsBackground>
      <Grid item xs={12}>
        <Typography variant="h4" component={Header}>SKILLS</Typography>
      </Grid>
      <Grid container direction="row" justify="center">
        <Grid item xs={5} md={4}>
          <TwoTextBox>
            <Typography variant="h2" >Performance Reports</Typography>
            <Typography variant="body1" component={TextPaddings}>This is a paragraph. To edit
              this paragraph, highlight the text and replace it with your own fresh content.</Typography>
            <Button color="primary" variant="contained">
              <TrendingFlatBlack></TrendingFlatBlack>
            </Button>
          </TwoTextBox>
        </Grid>
        <Grid item xs={5} md={4}>
          <TwoTextBox>
            <Typography variant="h2">Continuous Delivery</Typography>
            <Typography variant="body1" component={TextPaddings} >This is a paragraph. To edit
              this paragraph, highlight the text and replace it with your own fresh content.</Typography>
            <Button color="primary" variant="contained">
              <TrendingFlatBlack></TrendingFlatBlack>
            </Button>
          </TwoTextBox>
        </Grid>
      </Grid> 
      <Grid container justify="center">
        <Grid item xs={10} md={8}>
          <Grid container>
            <Grid item xs={3}>
              <Skills backgroundImage={database_icon} title="Database" body="This is a paragraph. To edit
              this paragraph, highlight the text and replace it with your own fresh content."></Skills>
            </Grid>
            <Grid item xs={3} >
              <Skills backgroundImage={html5_icon} title="HTML 5" body="This is a paragraph. To edit
              this paragraph, highlight the text and replace it with your own fresh content."></Skills>
            </Grid>
            <Grid item xs={3} >
              <Skills backgroundImage={javascript_icon} title="JavaScript" body="This is a paragraph. To edit
              this paragraph, highlight the text and replace it with your own fresh content."></Skills>
            </Grid>
            <Grid item xs={3} >
              <Skills backgroundImage={bugfree_icon} title="Bug-Free" body="This is a paragraph. To edit
              this paragraph, highlight the text and replace it with your own fresh content."></Skills>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ButtonStyle>
      <Button variant="contained" color="primary" >Learn more</Button>
      </ButtonStyle>
    </SkillsBackground>
   
  );
}