import React from 'react';
import "./style.css";
import Button from '../../Common/Button';
import iphone from '../../../assets/phone.png';
import gradient from '../../../assets/iphonegradient.jpg';
import { motion } from "framer-motion";

const MainComponent = () => {
  return (
    <div className='landing-flex'>
      <div className='left-component'>
        <motion.h1
          className='crypto-monitor-text'
          initial={{ opacity: 0, y : 50 }}
          animate={{ opacity: 1, y : 0 }}
          transition={{ duration: 1 }}
        >
          Monitor Crypto
        </motion.h1>
        <motion.h1 
          className='real-time-text' 
          initial={{ opacity: 0, y : 50 }}
          animate={{ opacity: 1, y : 0 }}
          transition={{ duration: 1, delay : 0.4 }}
          >
            Real Time.</motion.h1>
        <motion.p 
        className='info'
          initial={{ opacity: 0, y : 50 }}
          animate={{ opacity: 1, y : 0 }}
          transition={{ duration: 1, delay : 0.7 }}
        >
            Track crypto through a public API in real time. Visit the Dashboard to do so!</motion.p>
        <motion.div 
          className='landing-btn'
          initial={{ opacity: 0, x : -50 }}
          animate={{ opacity: 1, x : -0 }}
          transition={{ duration: 1, delay : 1 }}
        >
          <Button text="Dashboard" />
          <Button text="Share" outlined={true} />
        </motion.div>
      </div>
      <div className='right-component'>
         <motion.img 
          src={iphone} 
          className='iphone'
          alt='iPhone'
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,   
            repeat: "infinity"
          }}
        />
        <motion.img 
          src={gradient}
          className='gradient'
          alt='Gradient Background'
          animate={{ y: 10 }}
          transition={{ 
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: "infinity"
          }}
        />
      </div>
    </div>
  );
}

export default MainComponent;
