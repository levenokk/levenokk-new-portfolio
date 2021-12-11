import ListIcon from '@mui/icons-material/List';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import { Box, Button, IconButton, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

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
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to={'about'}
                  className={classes.link}
                >
                  Обо мне
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to={'portfolio'}
                  className={classes.link}
                >
                  Портфолио
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  to={'contacts'}
                  className={classes.link}
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>

          <Link spy={true} smooth={true} duration={500} to={'form'}>
            <Button
              className={classes.button}
              variant={'outlined'}
              startIcon={<MarkEmailUnreadIcon />}
            >
              Связаться со мной
            </Button>
          </Link>

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
