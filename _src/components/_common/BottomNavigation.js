import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import PriceIt from '../../assets/icons/price_it.svg';
import Basket from '../../assets/icons/basket.svg';
import Wishlist from '../../assets/icons/wishlist.svg';
import LastItem from '../../assets/icons/last_item.svg';
import Friends from '../../assets/icons/friends.svg';
import Notifications from '../../assets/icons/notifications.svg';
import NotificationsModal from '../notifications/NotificationsModal';

const nav = [
  {
    id: 1, label: 'Price it', link: '/price_it', svg: PriceIt, count: 22,
  },
  {
    id: 2, label: 'Basket', link: '/basket', svg: Basket, count: 2,
  },
  {
    id: 3, label: 'Wishlist', link: '/wishlist', svg: Wishlist, count: 22,
  },
  {
    id: 4, label: 'Last item', link: '/last_item', svg: LastItem, count: 22,
  },
  {
    id: 5, label: 'Friends', link: '/friends', svg: Friends, count: 22,
  },
];

function BottomNavigation() {
  const active = useRouter();
  const activeMenu = active.pathname;
  const [state, setState] = useState(false);
  return (
    <Box className="header_bottom_menu">

      {
            nav.map((item) => (
              <Link key={item.id} href={item.link}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="header_bottom_menu_item">
                  { item.id !== 5 && (
                  <span
                    className={item.id === 1
                      ? 'header_bottom_menu_item_first_count'
                      : `header_bottom_menu_item__count ${activeMenu === item.link && 'active_menu'}`}
                  >
                    {item.count}
                  </span>
                  ) }
                  <item.svg className={activeMenu === item.link ? 'active_menu_svg' : null} />
                  <p className={`header_bottom_menu_title ${activeMenu === item.link && 'active_menu'}`}>
                    {item.label}
                  </p>
                </a>
              </Link>
            ))
        }

      <button onClick={() => setState(true)} type="button" className="header_bottom_menu_notification">
        <span className="header_bottom_menu_item__count">
          22
        </span>
        <Notifications />
        <p className="header_bottom_menu_title">Notifications</p>
      </button>

      <NotificationsModal open={state} onClose={() => setState(false)} />
    </Box>
  );
}

export default BottomNavigation;
