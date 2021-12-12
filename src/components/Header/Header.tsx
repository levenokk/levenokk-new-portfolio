import ListIcon from '@mui/icons-material/List';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

import { theme } from '../../theme/theme';
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
  const isMobile = useMediaQuery(theme.breakpoints.down('laptop'));

  const [isOpen, setOpen] = useState(false);

  const handleMenuOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Wrapper>
      <Layout>
        <WrapperInner>
          <Box width={isMobile ? 180 : 230}>
            <Image
              alt={'logo'}
              layout={'responsive'}
              src={require('../../../public/images/logo.svg')}
            />
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
