import React from 'react';
import {
  Box, Typography, Slider, styled,
} from '@mui/material';
import Image from 'next/image';
import Wrapper from '../../_src/components/_common/Wrapper';
import Input from '../../_src/components/form/Input';

import SingleProduct from '../../_src/assets/images/single_product.png';
import Star from '../../_src/assets/icons/starr.svg';
import ButtonComponent from '../../_src/components/form/ButtonComponent';

function Index() {
  const PrettoSlider = styled(Slider)({
    color: '#ECECEC',
    height: 114,
    width: 12,
    // boxShadow: 'inset 1px 1px 3px rgba(0, 0, 0, 0.25)',
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#52af77',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });

  return (
    <Wrapper>
      <Box>
        <Typography className="header_path_text">
          Home / Shop / Shoes / Nike / Yeezy-boost-350 Lorem
        </Typography>
      </Box>
      <div className="price_it_content">
        <Image src={SingleProduct} alt="" />
        <div className="price_it_content_right_block">
          <p className="prod_name">Item name</p>
          <p className="brand_name">Nike</p>
          <p className="prod_qty">Qty: 1</p>

          <div className="star_block">
            <p>By storename</p>
            <p className="star_count">4.7</p>
            <Star />
          </div>

          <div className="price_block">
            <p className="price_text">Current price:</p>
            <p className="active_price">$28.00</p>
            <p className="price">$30.00</p>
          </div>

          <Input
            value=""
            title="Name your price"
            onChange={() => {}}
            className="price_input"
          />

          <div className="ranges_wrapper">
            <div className="range_block">
              <Slider
                className="custom_slider"
                valueLabelDisplay="auto"
                aria-label="slider"
                orientation="vertical"
                defaultValue={40}
              />
              <p>Approval chance</p>
            </div>
            <div className="range_block">
              <Slider
                className="custom_slider"
                valueLabelDisplay="auto"
                aria-label="slider"
                orientation="vertical"
                defaultValue={3}
              />
              <p>Waiting time</p>
            </div>
            <div className="range_block">
              <Slider
                className="custom_slider"
                valueLabelDisplay="auto"
                aria-label="slider"
                orientation="vertical"
                defaultValue={76}
              />
              <p>In stock</p>
            </div>
          </div>

          <ButtonComponent
            title="Apply"
            onClick={() => {}}
            className="apply_btn"
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default Index;
