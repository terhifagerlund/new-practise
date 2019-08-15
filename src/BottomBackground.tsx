import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Typography, Button } from '@material-ui/core';
import BottomText from './BottomText';
import html5_icon from './html5_icon.png';
import bugfree_icon from './bugfree_icon.png';
import javascript_icon from './javascript_icon.png';
import database_icon from './database_icon.png';

const BottomBackgroundStyle = styled.div`
  background-color: #FFF;  
  text-align: center;  
  padding-top: 70px;  
  height: 100%;  
  `;  

const CenterTextbox = styled.div`
  background-color: #F2F2F2;
  height: 200px;
  padding: 20px;
  margin: 9px;
  margin-top: 50px;
  text-align: left;                  
  `;

const ButtonStyled = styled.div`
  padding-top: 20px;
`;

const TextPaddings = styled.div`
  padding-top: 20px;  
`;

export default function BottomBackground() {
  return (
    <Grid container>  
      <Grid item xs={12}>
        <BottomBackgroundStyle>
          <Grid item xs={12}>
            <Typography variant="h4">SKILLS</Typography>
          </Grid>
        <Grid container direction="row" justify="center">
          <Grid item xs={5}>
            <CenterTextbox>
            <Grid item xs={12}>
              <Typography variant="h4" >Performance Reports</Typography>
            </Grid>
            <TextPaddings>
              <Typography variant="subtitle1" >This is a paragraph. To edit
                  this paragraph, highlight the text and replace it with your own fresh content.</Typography>
            </TextPaddings>
            <ButtonStyled>
              <Button variant="contained" color="primary">-></Button>
            </ButtonStyled>
            </CenterTextbox>
          </Grid>
          <Grid item xs={5}>
            <CenterTextbox>
            <Grid item xs={12}>
              <Typography variant="h4">Continuous Delivery</Typography>
            </Grid>
            <TextPaddings>
              <Typography variant="subtitle1" >This is a paragraph. To edit
                  this paragraph, highlight the text and replace it with your own fresh content.</Typography>
            </TextPaddings>
            <ButtonStyled>
              <Button variant="contained" color="primary">-></Button>
            </ButtonStyled>
            </CenterTextbox>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item xs={10}>
            <Grid container>
              <Grid item xs={3}>
                <BottomText backgroundImage={database_icon} title="Database" body="This is a paragraph. To edit
                  this paragraph, highlight the text and replace it with your own fresh content."></BottomText>
              </Grid>
              <Grid item xs={3} >
                <BottomText backgroundImage={html5_icon} title="HTML 5" body="This is a paragraph. To edit
                  this paragraph, highlight the text and replace it with your own fresh content."></BottomText>
              </Grid>
              <Grid item xs={3} >
                <BottomText backgroundImage={javascript_icon} title="JavaScript" body="This is a paragraph. To edit
                  this paragraph, highlight the text and replace it with your own fresh content."></BottomText>
              </Grid>
              <Grid item xs={3} >
                <BottomText backgroundImage={bugfree_icon} title="Bug-Free" body="This is a paragraph. To edit
                  this paragraph, highlight the text and replace it with your own fresh content."></BottomText>
              </Grid>
            </Grid>
            </Grid>
          </Grid>
          <ButtonStyled>
          <Button variant="contained" color="primary">Learn more</Button>
          </ButtonStyled>
        </BottomBackgroundStyle>
      </Grid>
  </Grid>
  );
}