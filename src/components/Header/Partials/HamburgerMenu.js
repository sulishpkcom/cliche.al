import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import './PartialsStyles.css';
const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [placement, setPlacement] = useState('right');
  return (
    <div className='Drawer'>
      <Button className='HamburgerMenu-Button' onClick={showDrawer}>
        Menu
      </Button>
      <Drawer title="Primary Menu" onClose={onClose} open={open} placement={placement}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};
export default HamburgerMenu;