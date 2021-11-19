import React from 'react';
import Image from 'next/image';
import {
  Box, Rating, SpeedDial, SpeedDialAction,
} from '@mui/material';
import Carousel from 'react-multi-carousel';
import Banner from '../../assets/images/banner.png';
import 'react-multi-carousel/lib/styles.css';
import demoData from '../../../demoData';
import ButtonComponent from '../form/ButtonComponent';
import Basket from '../../assets/icons/basket.svg';
import Wishlist from '../../assets/icons/wishlist.svg';
import Plus from '../../assets/icons/plus.svg';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const categoriesResponsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const bestDealsResponsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const actions = [
  { icon: <Basket />, name: 'Add basket' },
  { icon: <Wishlist />, name: 'Add wishlist' },
];

function HomeContent() {
  return (
    <>
      <Carousel
        ssr
        additionalTransfrom={0}
        showDots={false}
        arrows
        autoPlay
        autoPlaySpeed={5000}
        centerMode={false}
        className="slider"
        containerClass="banner_carousel-container"
        draggable={false}
        focusOnSelect={false}
        infinite
        itemClass="carousel-top"
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        responsive={responsive}
      >
        <Image alt="" src={Banner} />
      </Carousel>

      <div className="best_deals_slider_block">
        <div className="best_deals_slider_block_header">
          <p>Best deals</p>
          <span>VIEW ALL</span>
        </div>
        <Carousel
          ssr
          additionalTransfrom={0}
          showDots={false}
          arrows
          className="slider"
          containerClass="banner_carousel-container"
          draggable={false}
          focusOnSelect={false}
          itemClass="carousel-top"
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          responsive={bestDealsResponsive}
        >
          {
            demoData.bestDeals.map((i) => (
              <div className="bestDeals_image_block" key={i.id}>
                <div className="discount_block">
                  up to 20%
                </div>
                <div className="bestDeals_item_img">
                  <Image layout="fixed" width={390} height={381} alt="" src={i.img} />
                </div>
                <div className="bestDeals_item_info">
                  <div className="bestDeals_item_info_background" />
                  <p className="bestDeals_item_info_name">Item Name</p>
                  <p className="bestDeals_item_info_brand">Brand</p>
                  <div className="bestDeals_item_info_rating_block">
                    <Rating
                      className="bestDeals_item_info_rating"
                      readOnly
                      name="half-rating"
                      defaultValue={3}
                      precision={0.5}
                    />
                    <p>4.7 (230)</p>
                  </div>
                  <div className="bestDeals_item_info_price_block">
                    <p className="active_price">$ 20,000,000</p>
                    <p className="price">$ 20,000,000</p>
                  </div>
                  {
                    i.modal && (
                    <div className="bestDeals_item_info_btns_block">
                      <ButtonComponent
                        title="PRICE IT"
                        onClick={() => {}}
                        className="price_it_btn_in_home"
                      />
                      <ButtonComponent
                        title="BUY IT"
                        onClick={() => {}}
                        className="buy_it_btn_in_home"
                      />
                      <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
                        <SpeedDial
                          ariaLabel="SpeedDial basic example"
                          className="speedDial_btn"
                          sx={{ position: 'absolute', bottom: -25, right: -5 }}
                          icon={<Plus />}
                        >
                          {actions.map((action) => (
                            <SpeedDialAction
                              key={action.name}
                              icon={action.icon}
                              tooltipTitle={action.name}
                            />
                          ))}
                        </SpeedDial>
                      </Box>
                    </div>
                    )
                  }
                </div>
              </div>
            ))
          }
        </Carousel>
      </div>

      <div style={{ backgroundColor: '#FFFFFF' }} className="categories_slider_block">
        <div className="categories_slider_block_header">
          <p>Categories</p>
          <span>VIEW ALL</span>
        </div>
        <Carousel
          ssr
          additionalTransfrom={0}
          showDots={false}
          arrows
          className="slider"
          containerClass="banner_carousel-container"
          draggable={false}
          focusOnSelect={false}
          itemClass="carousel-top"
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          responsive={categoriesResponsive}
        >
          {
            demoData.categories.map((i) => (
              <div key={i.id}>
                <div className="categories_slider_block_img">
                  <Image layout="fixed" width={186} height={220} alt="" src={i.img} />
                </div>
                <p className="categories_title">{i.title}</p>
              </div>
            ))
          }
        </Carousel>
      </div>

      <div className="show_more_btn_block">
        <span className="show_more_btn">SHOW MORE CATEGORIES</span>
      </div>
    </>
  );
}

export default HomeContent;
