import { Box, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import { theme } from '../../theme/theme';
import { FacebookIcon, GitHubIcon, InstagramIcon } from '../icons';
import { Layout } from '../Layout/Layout';
import { useStyles } from './styles';

export const Footer = () => {
  const classes = useStyles();

  const isMobile = useMediaQuery(theme.breakpoints.down('laptop'));

  return (
    <footer>
      <Box className={classes.topWrapper}>
        <Layout>
          <Box
            width={'100%'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Box width={isMobile ? 180 : 230}>
              <Image
                layout={'responsive'}
                src={require('../../../public/images/logoFooter.svg')}
              />
            </Box>
            <Box className={classes.socialsWrapper}>
              <a className={classes.socialLink} href='#' target={'_blank'}>
                <InstagramIcon />
              </a>
              <a className={classes.socialLink} href='#' target={'_blank'}>
                <FacebookIcon />
              </a>
              <a className={classes.socialLink} href='#' target={'_blank'}>
                <GitHubIcon />
              </a>
            </Box>
          </Box>
        </Layout>
      </Box>
    </footer>
  );
};
