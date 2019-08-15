import styled from 'styled-components';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const IconImage = styled.div<any>`
  background-image: url(${(props:any) => props.poop});
  background-repeat: no-repeat;  
  display: flex;
  height: 64px; 
  `;

const IconHeader = styled.div`
  margin-top: 40px;
  padding-bottom: 10px;  
  text-align: left;
  font-weight: bold;
  `;

const IconText = styled.div`
  text-align: left;
  padding-bottom: 30px;
  `;

const CenterTextbox = styled.div`
  background-color: #FFF; 
  display: flex;
  padding: 24px;
  margin: 9px;
  margin-top: 50px;
  `;
   
export default function CenterIcons(props: any) {
    return (
      <CenterTextbox>
      <Grid container direction="column">
        <Grid item>
          <IconImage poop={props.backgroundImage}></IconImage>
        </Grid>
        <Grid item>
          <IconHeader>{props.title}</IconHeader>
        </Grid>
        <Grid item>
          <IconText>{props.body}</IconText>
        </Grid>
          <Button variant="contained" color="primary">Learn more</Button>
      </Grid>
      </CenterTextbox>   
    );
}