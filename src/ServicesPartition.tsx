import React from 'react';
import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';
import Services from './Services';
import php_icon from './assets/icons/php_icon.png';
import java_icon from './assets/icons/javascript_icon.png';
import cplusplus_icon from './assets/icons/cplusplus_icon.png';
import app_icon from './assets/icons/app_icon.png';
import ServicesImageBox from './ServicesImageBox';

const ServiceBackground = styled.div`
  background-color: #F2F2F2;
  background-size: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100%;
  `;

const Header = styled.div`
  background-color: #F2F2F2;
  padding: 45px;
  text-align: center;
  `;

export default function ServicesPartition() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" component={Header}>SERVICES</Typography>
        </Grid>
        <ServiceBackground>
          <Grid item xs={10} md={8}>
              <Grid container>
                <Grid item xs={3}>
                  <Services backgroundImage={php_icon} title="Wordpress Based" body="This is a paragraph. To edit
                  this paragraph, highlight the text and replace it with your own fresh content."></Services>
                </Grid>
                <Grid item xs={3} >
                  <Services backgroundImage={java_icon} title="Android Apps" body="This is a paragraph. To edit
                  this paragraph, highlight the text and replace it with your own fresh content."></Services>
                </Grid>
                <Grid item xs={3} >
                  <Services backgroundImage={cplusplus_icon} title="Operation System" body="This is a paragraph. To edit
                  this paragraph, highlight the text and replace it with your own fresh content."></Services>
                </Grid>
                <Grid item xs={3} >
                  <Services backgroundImage={app_icon} title="iOS and MacOS" body="This is a paragraph. To edit
                  this paragraph, highlight the text and replace it with your own fresh content."></Services>
                </Grid>
              </Grid>
            <ServicesImageBox></ServicesImageBox>
          </Grid>
          </ServiceBackground>
        </Grid>
    );
}