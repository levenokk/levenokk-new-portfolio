import { Box, IconButton } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
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
      </Box>
    </Box>
  );
};
