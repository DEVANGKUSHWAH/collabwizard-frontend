import React, { useEffect } from 'react';
import css from './navbar.module.scss'
import Logo from './Logo/Logo';
import { Button, Drawer } from 'antd'
import {  MenuOutlined } from '@ant-design/icons';
import { useState } from 'react'
import NavigationLinks from './NavigationLinks';

// import { logoutUserAction } from '../../../Auth/actions';
// import { getUserDetailAction } from '../../../Admin/Dashboard/Resources/actions';
// import { getToken, removeToken } from '../../../../utils/localStorage';

const Navbar = (props) => {
  const [isVisibile, setIsVisibile] = useState(false);

  const showDrawer = () => {
    setIsVisibile(true)
  };
  const onClose = () => {
    setIsVisibile(false)
  };

  return (
    <nav className={css.nav} >
      <div>
        <Logo />
      </div>
      <div className={css.desktop}>
        <NavigationLinks />
      </div>
      <div className={css.mobile}>
        <Button className="barsMenu" onClick={showDrawer}>
          <MenuOutlined style={{ color: '#08c' }} />
        </Button>
        <Drawer
          placement="right"
          closable={true}
          onClose={onClose}
          visible={isVisibile}
          onClick={onClose}
        >
          <div className={css.drawer}>
            <NavigationLinks />
          </div>
        </Drawer>
      </div>
    </nav>
  )
}



export default Navbar;
