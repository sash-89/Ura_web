import React, { useState } from 'react';
import Image from 'next/image';
import {
  AppBar, Box, Toolbar, IconButton, Typography, InputBase,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import UraaLogo from '../../assets/icons/ura_logo_main.svg';
import Flag from '../../assets/icons/lang_flag.svg';
import AvatarImage from '../../assets/images/Ellipse.png';
import ArrowBottom from '../../assets/icons/arrow-bottom.svg';
import Profile from '../../assets/icons/profile.svg';
import LeftMenu from './LeftMenu';
import BottomNavigation from './BottomNavigation';

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <LeftMenu
        onClose={() => setIsOpenMenu(false)}
        open={isOpenMenu}
      />

      <AppBar id="header" position="static">

        <Toolbar className="toolbar">
          <div className="header_left_wrapper">
            <IconButton
              size="large"
              edge="start"
              className="menu_icon_btn"
              color="inherit"
              aria-label="open drawer"
              sx={{ ml: 3 }}
              onClick={() => setIsOpenMenu(true)}
            >
              <MenuIcon htmlColor="white" fontSize="large" />
            </IconButton>

            <UraaLogo width="73" height="46" fill="white" />
          </div>

          <div className="search_block">
            <InputBase
              className="search_input_in_header"
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIcon />
          </div>

          <div className="header_right_wrapper">
            <Box display="flex" alignItems="center">
              <Flag />
              <Typography className="lang" sx={{ ml: 1, mr: 1 }}>
                English
              </Typography>
              <ArrowBottom />
            </Box>

            <Box className="header_right" sx={{ display: { xs: 'none', md: 'flex' } }}>
              {
                isLogin ? (
                  <>
                    <Image alt="" src={AvatarImage} />
                    <Typography className="header_right_text">
                      100 Uraaa! Bonus
                    </Typography>
                  </>
                ) : (
                  <Link href="/login">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="signIn_btn">
                      <Profile />
                      <p>Sign In</p>
                    </a>
                  </Link>
                )
              }
            </Box>
          </div>

        </Toolbar>

        <BottomNavigation />

      </AppBar>
    </>
  );
}

export default Header;
