import React, { useState } from 'react';
import {
  Drawer, Box, List, ListItem,
  InputBase, InputAdornment,
} from '@mui/material';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import Tshirt from '../../assets/icons/007-tshirt.svg';
import CategoryImg from '../../assets/images/categoryImg.png';

function LeftMenu({ open, onClose }) {
  LeftMenu.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
  };

  LeftMenu.defaultProps = {
    open: false,
  };

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const menuData = ['Men', 'Women', 'Kids', 'Baby', 'Bags', 'Toys', 'Shoes'];

  return (
    <aside>
      <Drawer
        anchor="left"
        className="drawer_block"
        open={open}
        hideBackdrop
      >
        <Box
          className="left_menu_wrapper"
          role="presentation"
        >
          <div className="search_in_menu">
            <InputBase
              className="search_input_in_menu"
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              endAdornment={(
                <InputAdornment
                  position="end"
                >
                  <SearchIcon />
                </InputAdornment>
                )}
            />
          </div>

          <List className="category__list__wrapper">
            {
              menuData.map((i) => (
                <ListItem
                  key={i}
                  onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                  button
                  className="category__list"
                >
                  <Tshirt className="category__icon" />
                  {i}
                </ListItem>
              ))
            }
          </List>
        </Box>
      </Drawer>

      {open && (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        className="backdrop"
        onClick={() => {
          onClose();
          setIsSubMenuOpen(false);
        }}
      />
      )}

      <div className={`left_sub_menu ${isSubMenuOpen && 'open'}`}>
        <div className="left_content">
          <p className="left_content_title">Clothing</p>
          <p className="left_content_category_title">Sweaters</p>
          <p className="left_content_category_item">Pullover sweater</p>
          <p className="left_content_category_item">Cardigan (Open style) sweater</p>
          <p className="left_content_category_item">Crew neck sweaters</p>
          <p className="left_content_category_item">V-neck sweater</p>
          <p className="left_content_category_item">Turtle neck sweater</p>
          <p style={{ marginTop: 16 }} className="left_content_category_title">Jacket</p>
          <p className="left_content_category_item">Sub jacket</p>
          <p className="left_content_category_item">British style</p>
          <p className="left_content_category_item">Lorem</p>
          <p className="left_content_category_item">Lorem ipsum</p>
          <p className="left_content_category_item">Another jacket style</p>
          <p className="left_content_category_item">Style name</p>
        </div>
        <div className="right_content">
          <Image alt="" src={CategoryImg} />
          <p style={{ marginTop: 32 }} className="left_content_category_title">Sweaters</p>
          <p className="left_content_category_item">Pullover sweater</p>
          <p className="left_content_category_item">Cardigan (Open style) sweater</p>
          <p className="left_content_category_item">Crew neck sweaters</p>
          <p className="left_content_category_item">V-neck sweater</p>
          <p className="left_content_category_item">Turtle neck sweater</p>

          <p className="left_content_category_title">Pants</p>
          <p className="left_content_category_title">Skirts</p>
          <p className="left_content_category_title">LoremIpsum</p>
        </div>
      </div>
    </aside>
  );
}

export default LeftMenu;
