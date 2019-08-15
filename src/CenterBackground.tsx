import React from 'react';
import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';
import IconsText from './IconsText';
import php_icon from './php_icon.png';
import java_icon from './java_icon.png';
import cplusplus_icon from './cplusplus_icon.png';
import app_icon from './app_icon.png';
import CenterImageStyle from './CenterImage';

const CenterBackgroundStyle = styled.div`
  background-color: #F2F2F2;
  background-size: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top:70px;
  `;

export default function CenterBackground() {
    return (
        <CenterBackgroundStyle>
          <Grid item xs={10}>
            <Typography variant="h4">SERVICES</Typography>
            <Grid container>
              <Grid item xs={3}>
                <IconsText backgroundImage={php_icon} title="Wordpress Based" body="This is a paragraph. To edit
                  this paragraph, highlight the text and replace it with your own fresh content."></IconsText>
              </Grid>
              <Grid item xs={3} >
                <IconsText backgroundImage={java_icon} title="Android Apps" body="This is a paragraph. To edit
                  this paragraph, highlight the text and replace it with your own fresh content."></IconsText>
              </Grid>
              <Grid item xs={3} >
                <IconsText backgroundImage={cplusplus_icon} title="Operation System" body="This is a paragraph. To edit
                  this paragraph, highlight the text and replace it with your own fresh content."></IconsText>
              </Grid>
              <Grid item xs={3} >
                <IconsText backgroundImage={app_icon} title="iOS and MacOS" body="This is a paragraph. To edit
                  this paragraph, highlight the text and replace it with your own fresh content."></IconsText>
              </Grid>
            </Grid>
            <CenterImageStyle></CenterImageStyle>
          </Grid>
        </CenterBackgroundStyle>
    );
}