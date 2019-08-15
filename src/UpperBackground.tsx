import React from 'react';
import styled from 'styled-components';
import hero_background from './hero_background.png';
import { Grid, Typography, Button } from '@material-ui/core';

const UpperBackgroundStyle = styled.div`
  background-image: url(${hero_background});
  background-size: auto;
  background-position: center -110px;
  height: 564px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  `;

  const UpperTextbox = styled.div`
  height: 200px;
  background-color: #FFF;
  padding-top: 45px;
  `;

  const CenterText = styled.div`
  padding: 20px;
  `;

export default function UpperBackground() {
    return (
        <UpperBackgroundStyle>
           <Grid item xs={10}>
            <UpperTextbox>
                <Typography variant="h4">WE BUILD CODE</Typography>
                <CenterText>This is a paragraph. You can use this to communicate content within your page.
                </CenterText>
                <Button variant="contained" color="primary">Learn more</Button>
                </UpperTextbox>
            </Grid> 
        </UpperBackgroundStyle>
    );
}