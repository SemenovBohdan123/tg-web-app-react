import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './styles.css'

import Button from '../Button';


const Header = () => {
  const { user, onClose } = useTelegram()

  return (
    <div className='header'>
      <Button onClick={onClose}>Закрыть</Button>
      <span className='username'>{user?.username}</span>
    </div>
  );
};

export default Header;
