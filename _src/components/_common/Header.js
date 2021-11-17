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
import PriceIt from '../../assets/icons/price_it.svg';
import Basket from '../../assets/icons/basket.svg';
import Wishlist from '../../assets/icons/wishlist.svg';
import LastItem from '../../assets/icons/last_item.svg';
import Friends from '../../assets/icons/friends.svg';
import Notifications from '../../assets/icons/notifications.svg';
import Profile from '../../assets/icons/profile.svg';
import LeftMenu from './LeftMenu';

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
          <>
            <IconButton
              size="large"
              edge="start"
              className="menu_icon_btn"
              color="inherit"
              aria-label="open drawer"
              sx={{ ml: 3 }}
              onClick={() => setIsOpenMenu(true)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              <UraaLogo />
            </Typography>

            <div className="search_block">
              <InputBase
                className="search_input_in_header"
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
              <SearchIcon />
            </div>
          </>
          <Box display="flex" alignItems="center">
            <Flag />
            <Typography sx={{ ml: 1, mr: 1 }}>
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
        </Toolbar>

        <Box className="header_bottom_menu">
          <div className="header_bottom_menu_item">
            <span className="header_bottom_menu_item_first_count">
              22
            </span>
            <PriceIt />
            <p className="header_bottom_menu_title">Price it</p>
          </div>
          <div className="header_bottom_menu_item">
            <span className="header_bottom_menu_item__count">
              2
            </span>
            <Basket />
            <p className="header_bottom_menu_title">Basket</p>
          </div>
          <div className="header_bottom_menu_item">
            <span className="header_bottom_menu_item__count">
              22
            </span>
            <Wishlist />
            <p className="header_bottom_menu_title">Wishlist</p>
          </div>
          <div className="header_bottom_menu_item">
            <span className="header_bottom_menu_item__count">
              22
            </span>
            <LastItem />
            <p className="header_bottom_menu_title">Last item</p>
          </div>
          <div className="header_bottom_menu_item">
            <Friends />
            <p className="header_bottom_menu_title">Friends</p>
          </div>
          <div style={{ border: 'none' }} className="header_bottom_menu_item">
            <span className="header_bottom_menu_item__count">
              22
            </span>
            <Notifications />
            <p className="header_bottom_menu_title">Notifications</p>
          </div>
        </Box>

      </AppBar>
    </>
  );
}

export default Header;
