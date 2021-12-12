import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import { Button } from './styles';

export const UpButton = () => {
  const [showButton, setShowButton] = useState(false);

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
    <Button isShow={showButton} onClick={handleClick} variant={'contained'}>
      <KeyboardArrowUpIcon fontSize={'medium'} />
    </Button>
  );
};
