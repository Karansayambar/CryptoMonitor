import React, { useState, useEffect } from 'react';
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import './style.css';

const BottomToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollFunction = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollFunction);
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);

  return (
    <div
      className='bottomtotop'
      id='myBtn'
      style={{ display: isVisible ? 'block' : 'none' }}
      onClick={topFunction}
    >
      <KeyboardDoubleArrowUpRoundedIcon />
    </div>
  );
};

export default BottomToTop;
