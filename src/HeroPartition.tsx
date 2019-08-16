import React from 'react';
import styled from 'styled-components';
import hero_background from './assets/backgrounds/hero_background.png';
import { Grid, Typography, Button } from '@material-ui/core';

const HeroBackground = styled.div`
  background-image: url(${hero_background});
  background-size: auto;
  background-position: center -110px;
  height: 564px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  `;

  const HeaderText = styled.div`
    background-color: #FFF;
    padding: 45px;
    `;

  const Paragraph = styled.div`
    padding: 20px;
    `;

export default function HeroPartition() {
    return (
        <HeroBackground>
          <Grid item xs={10}>
            <HeaderText>
              <Typography variant="h4">WE BUILD CODE</Typography>
              <Paragraph>This is a paragraph. You can use this to communicate content within your page.</Paragraph>
              <Button variant="contained" color="primary">Learn more</Button>
            </HeaderText>
          </Grid> 
        </HeroBackground>
    );
}