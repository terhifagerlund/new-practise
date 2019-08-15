import styled from 'styled-components';
import React from 'react';
import Grid from '@material-ui/core/Grid';

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

const BottomTextbox = styled.div`
  background-color: #F2F2F2; 
  display: flex;
  padding: 24px;
  margin: 9px;
  `;
   
export default function BottomTextStyle(props: any) {
    return (
      <BottomTextbox>
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
      </Grid>
      </BottomTextbox>   
    );
}