import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import { useStyles } from './styles';

export const UpButton = () => {
  const [showButton, setShowButton] = useState(false);

  const classes = useStyles({ showButton });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setShowButton]);

  const handleClick = () => {
    scroll.scrollToTop();
  };

  return (
    <Button
      onClick={handleClick}
      variant={'contained'}
      className={classes.button}
    >
      <KeyboardArrowUpIcon fontSize={'medium'} />
    </Button>
  );
};
