import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-scroll';

import { useStyles } from './styles';

type Props = {
  onHandleMenuOpen: () => void;
};

export const HeaderMobileMenu: React.FC<Props> = ({ onHandleMenuOpen }) => {
  const classes = useStyles();

  return (
    <Box className={classes.mobileMenu}>
      <Box className={classes.buttonWrapper}>
        <IconButton onClick={onHandleMenuOpen}>
          <CloseIcon fontSize={'large'} />
        </IconButton>
      </Box>
      <Box className={classes.menuWrapperInner}>
        <nav>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <Link
                onClick={onHandleMenuOpen}
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
                onClick={onHandleMenuOpen}
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
                onClick={onHandleMenuOpen}
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
      </Box>
    </Box>
  );
};
