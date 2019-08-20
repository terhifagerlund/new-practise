import styled from 'styled-components';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';

const ServicesBox = styled.div`
  background-color: #FFF; 
  display: flex;
  padding: 24px;
  margin: 9px;
  `;

const IconImage = styled.div<any>`
  background-image: url(${(props:any) => props.poop});
  background-repeat: no-repeat;  
  display: flex;
  height: 64px; 
  `;

const Header = styled.div`
  margin-top: 40px;
  padding-bottom: 10px;  
  text-align: left;
  `;

const Paragraph = styled.div`
  text-align: left;
  padding-bottom: 30px;
  `;
   
export default function ServicesStyle(props: any) {
    return (
      <ServicesBox>
        <Grid container direction="column">
          <Grid item>
            <IconImage poop={props.backgroundImage}></IconImage>
          </Grid>
          <Grid item>
            <Typography variant="h3">
            <Header>{props.title}</Header>
            </Typography>
          </Grid>
          <Grid item component={Paragraph}>
            <Typography variant="body1">{props.body}</Typography>
          </Grid>
            <Button variant="contained"color="primary" size="small">Learn more</Button>
        </Grid>
      </ServicesBox>   
    );
}