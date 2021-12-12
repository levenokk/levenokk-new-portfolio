import ListIcon from '@mui/icons-material/List';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import React, { useState } from 'react';

import Logo from '../../../public/images/logo.svg';
import LogoLight from '../../../public/images/logoLight.svg';
import { Layout } from '../Layout/Layout';
import { HeaderMobileMenu } from './HeaderMobileMenu';
import {
  Button,
  Link,
  List,
  ListItem,
  Nav,
  Wrapper,
  WrapperInner,
} from './styles';

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('laptop'));

  const isDarkMode = theme.palette.mode === 'dark';

  const [isOpen, setOpen] = useState(false);

  const handleMenuOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Wrapper>
      <Layout>
        <WrapperInner>
          <Box width={isMobile ? 180 : 230}>
            <NextLink href={'/'}>
              <a>
                <Image
                  alt={'logo'}
                  layout={'responsive'}
                  src={isDarkMode ? LogoLight : Logo}
                />
              </a>
            </NextLink>
          </Box>

          <Nav>
            <List>
              <ListItem>
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to={'about'}
                >
                  Обо мне
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to={'portfolio'}
                >
                  Портфолио
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  to={'contacts'}
                >
                  Контакты
                </Link>
              </ListItem>
            </List>
          </Nav>

          <Link spy={true} smooth={true} duration={500} to={'form'}>
            <Button variant={'outlined'} startIcon={<MarkEmailUnreadIcon />}>
              Связаться со мной
            </Button>
          </Link>

          {isMobile && (
            <IconButton onClick={handleMenuOpen}>
              <ListIcon fontSize={'large'} />
            </IconButton>
          )}
        </WrapperInner>
      </Layout>
      {isOpen && <HeaderMobileMenu onHandleMenuOpen={handleMenuOpen} />}
    </Wrapper>
  );
};
