import styled from 'styled-components';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import qa_background from './qa_background.png';
import { Typography, Button } from '@material-ui/core';
import qa_icon from './qa_icon.png';

const CenterTextbox = styled.div`
  background-color: #FFF;   
  display: flex;  
  margin: 9px;
  margin-top: 12px;
  margin-bottom: 64px;
  justify-content: flex-start;                  
  `;  

const Image = styled.div`
  background-image: url(${qa_background});
  height: 350px;
  text-align: center;
  padding-top: 40px;
  `;

const ImageIcon = styled.div`
  background-image: url(${qa_icon});
  background-repeat: no-repeat;
  background-position: center;
  padding: 35px;
  height: 50px;
  `;

const headerText = styled.div`
  color: #FFF;
  text-align: center;
  `; 

const TextColor = styled.div`
  color: #FFF;
  padding: 20px;
  text-align: center;
  margin-left: 20px;
  display: flex;  
  justify-content: center;
  `;

export default function CenterImageStyle() {
    return (
        <CenterTextbox>
            <Grid item xs={12}>
                <Image>
                    <ImageIcon></ImageIcon>
                    <Grid item xs={12}>
                    <Typography variant="h3" component={headerText}>Quality Assurance</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography variant="subtitle1" component={TextColor}>This is a paragraph. To edit this paragraph,
                    highlight the text and <br></br>replace it with your own fresh content.</Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Button variant="contained" color="primary">Learn more</Button>
                    </Grid>
                </Image>
            </Grid>
        </CenterTextbox>


    );
}