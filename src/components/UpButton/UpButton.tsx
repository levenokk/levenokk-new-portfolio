import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button } from '@mui/material';
import React, { useEffect } from 'react';

import { useStyles } from './styles';

export const UpButton = () => {
  const [showButton, setShowButton] = useState();

  const classes = useStyles({ showButton });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= document.body.scrollHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setShowButton]);

  return (
    <Button variant={'contained'} className={classes.button}>
      <KeyboardArrowUpIcon fontSize={'large'} />
    </Button>
  );
};
