import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { CiMenuBurger } from "react-icons/ci";
import './PartialsStyles.css';
import CategoriesTabContent from './CategoriesTabContent/CategoriesTabContent'

const CategoriesDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [placement, setPlacement] = useState('left');
  return (
    <div className='Drawer'>
      <Button className='CategoriesDrawer-Button' onClick={showDrawer}>
        <CiMenuBurger style={{marginRight: '10px'}} />Categories
      </Button>
      <Drawer title="Primary Menu" onClose={onClose} open={open} placement={placement}>
        <CategoriesTabContent />
      </Drawer>
    </div>
  );
};
export default CategoriesDrawer;