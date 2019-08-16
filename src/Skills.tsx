import styled from 'styled-components';
import React from 'react';
import Grid from '@material-ui/core/Grid';

const FourBox = styled.div`
  background-color: #F2F2F2; 
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
  font-weight: bold;
  `;

const Paragraph = styled.div`
  text-align: left;
  padding-bottom: 30px;
  `;
   
export default function SkillsStyle(props: any) {
    return (
      <FourBox>
        <Grid container direction="column">
          <Grid item>
            <IconImage poop={props.backgroundImage}></IconImage>
          </Grid>
          <Grid item>
            <Header>{props.title}</Header>
          </Grid>
          <Grid item>
            <Paragraph>{props.body}</Paragraph>
          </Grid>
        </Grid>
      </FourBox>   
    );
}