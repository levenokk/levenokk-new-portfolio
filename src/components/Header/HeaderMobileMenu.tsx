import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import React from 'react';

import {
  ButtonWrapper,
  Link,
  List,
  ListItem,
  MenuWrapperInner,
  MobileMenu,
} from './styles';

type Props = {
  onHandleMenuOpen: () => void;
  onHandleAboutMeClick: () => void;
};

export const HeaderMobileMenu: React.FC<Props> = ({
  onHandleMenuOpen,
  onHandleAboutMeClick,
}) => {
  return (
    <MobileMenu>
      <ButtonWrapper>
        <IconButton onClick={onHandleMenuOpen}>
          <CloseIcon fontSize={'large'} />
        </IconButton>
      </ButtonWrapper>
      <MenuWrapperInner>
        <nav>
          <List>
            <ListItem>
              <Link
                onClick={onHandleAboutMeClick}
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
                onClick={onHandleMenuOpen}
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
                onClick={onHandleMenuOpen}
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
        </nav>
      </MenuWrapperInner>
    </MobileMenu>
  );
};
