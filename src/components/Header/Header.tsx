import ListIcon from '@mui/icons-material/List';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import { Box, Button, IconButton, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

import { theme } from '../../theme/theme';
import { Layout } from '../Layout/Layout';
import { HeaderMobileMenu } from './HeaderMobileMenu';
import { useStyles } from './styles';

export const Header = () => {
  const classes = useStyles();

  const isMobile = useMediaQuery(theme.breakpoints.down('laptop'));

  const [isOpen, setOpen] = useState(false);

  const handleMenuOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box className={classes.wrapper}>
      <Layout>
        <Box className={classes.wrapperInner}>
          <Box width={isMobile ? 180 : 230}>
            <Image
              layout={'responsive'}
              src={require('../../../public/images/logo.svg')}
            />
          </Box>

          <nav className={classes.nav}>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <a className={classes.link} href='#'>
                  Обо мне
                </a>
              </li>
              <li className={classes.listItem}>
                <a className={classes.link} href='#'>
                  Портфолио
                </a>
              </li>
              <li className={classes.listItem}>
                <a className={classes.link} href='#'>
                  Контакты
                </a>
              </li>
            </ul>
          </nav>

          <Button
            className={classes.button}
            variant={'outlined'}
            startIcon={<MarkEmailUnreadIcon />}
          >
            Связаться со мной
          </Button>
          {isMobile && (
            <IconButton onClick={handleMenuOpen}>
              <ListIcon fontSize={'large'} />
            </IconButton>
          )}
        </Box>
      </Layout>
      {isOpen && <HeaderMobileMenu onHandleMenuOpen={handleMenuOpen} />}
    </Box>
  );
};
