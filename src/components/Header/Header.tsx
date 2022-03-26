import ListIcon from '@mui/icons-material/List';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';

import Logo from '../../../public/images/logo.svg';
import LogoLight from '../../../public/images/logoLight.svg';
import { ROUTES } from '../../constants';
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
  const router = useRouter();

  const [isHomePage, setIsHomePage] = useState(true);
  const [isOpen, setOpen] = useState(false);

  const isDarkMode = useMemo(
    () => theme.palette.mode === 'dark',
    [theme.palette.mode],
  );

  useEffect(() => {
    setIsHomePage(router.pathname === '/');
  }, [router.pathname]);

  const onHandleMenuOpen = () => {
    setOpen((prev) => !prev);
  };

  const onHandleAboutMeClick = async () => {
    if (!isHomePage) {
      await router.push('/?to=about');
    }
  };

  return (
    <Wrapper>
      <Layout>
        <WrapperInner>
          <Box width={isMobile ? 180 : 230}>
            <NextLink href={ROUTES.home}>
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
                  onClick={onHandleAboutMeClick}
                  spy={true}
                  smooth={true}
                  delay={100}
                  offset={50}
                  duration={500}
                  to={'about'}
                >
                  About me
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
                  Portfolio
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
                  Contacts
                </Link>
              </ListItem>
            </List>
          </Nav>

          <Link spy={true} smooth={true} duration={500} to={'form'}>
            <Button variant={'outlined'} startIcon={<MarkEmailUnreadIcon />}>
              Contact me
            </Button>
          </Link>

          {isMobile && (
            <IconButton onClick={onHandleMenuOpen}>
              <ListIcon fontSize={'large'} />
            </IconButton>
          )}
        </WrapperInner>
      </Layout>
      {isOpen && (
        <HeaderMobileMenu
          onHandleAboutMeClick={onHandleAboutMeClick}
          onHandleMenuOpen={onHandleMenuOpen}
        />
      )}
    </Wrapper>
  );
};
