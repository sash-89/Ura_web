import React from 'react';
import {
  Box, Typography,
} from '@mui/material';
import Wrapper from '../../_src/components/_common/Wrapper';
import ButtonComponent from '../../_src/components/form/ButtonComponent';
import SearchInput from '../../_src/components/form/SearchInput';
import VerticalMenu from '../../_src/assets/icons/vertical_menu.svg';

function Index() {
  return (
    <Wrapper>
      <Box>
        <Typography className="header_path_text">
          Home / My Account / Wishlist
        </Typography>
      </Box>

      <div className="wishlist_header_block">
        <ButtonComponent
          onClick={() => {}}
          title="CREATE A WISHLIST"
          className="create_wishlist_btn"
        />
        <div className="search_block">
          <SearchInput
            onChange={() => {}}
            placeholder="Search Product"
          />
        </div>
      </div>

      <div className="wishlist_content">

        <div className="wishlist_card">
          <div className="wishlist_card_header">
            <div className="left">
              <img src="https://img.joomcdn.net/bb0bb05e0bed2b6fb65299ee861d34543ec523ff_1024_1024.jpeg" alt="" />
              {/* eslint-disable-next-line max-len */}
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1pYMqmB1_4RSEq64pjRlDA4G-hjsQITaysg&usqp=CAU" alt="" />
            </div>
            <div className="right">
              <img src="https://images.shafastatic.net/176587103" alt="" />
              {/* eslint-disable-next-line max-len */}
              <img src="https://miss-podium.com.ua/files/images/43818/7/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_viber_2021-0%D1%80%D1%80%D1%803-17_19-15-08.jpg" alt="" />
            </div>
          </div>

          <div className="wishlist_card_info">
            <p className="wishlist_title">Main</p>
            <div className="wishlist_card_bottom">
              <p className="wishlist_items_count">28 Items</p>
              <span className="menu_btn">
                <VerticalMenu />
              </span>
            </div>
          </div>
        </div>

        <div className="wishlist_card">
          <div className="wishlist_card_header">
            <div className="left">
              {/* eslint-disable-next-line max-len */}
              <img src="https://image.made-in-china.com/202f0j10aWLuBvJskFgO/Chicever-Sexy-Ruffle-Denim-Shorts-Female-High-Waist-Pocket-Wide-Leg-Short-Trousers-Women-Fashion-Clothes.jpg" alt="" />
              {/* eslint-disable-next-line max-len */}
              <img src="https://besplatka.ua/aws/746x-/28/19/19/42/kostyum-zhenskii--shorty---futbolka-photo-846c.jpg" alt="" />
            </div>
            <div className="right">
              {/* eslint-disable-next-line max-len */}
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7EHQr5VeHJse4B9hWjUeSwhABmaxOEtR4Tw&usqp=CAU" alt="" />
              {/* eslint-disable-next-line max-len */}
              <img src="https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17010811_TM_D3.jpg?ts=1620045590055&imwidth=388&imdensity=2" alt="" />
            </div>
          </div>

          <div className="wishlist_card_info">
            <p className="wishlist_title">For Friends</p>
            <div className="wishlist_card_bottom">
              <p className="wishlist_items_count">28 Items</p>
              <span className="menu_btn">
                <VerticalMenu />
              </span>
            </div>
          </div>
        </div>

      </div>
    </Wrapper>
  );
}

export default Index;
