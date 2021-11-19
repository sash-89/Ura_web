import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Typography, Box, Rating } from '@mui/material';
import Image from 'next/image';
import _ from 'lodash';
import Carousel from 'nuka-carousel';
import Wrapper from '../../_src/components/_common/Wrapper';

import SingleProduct from '../../_src/assets/images/single_product.png';
import SingleImg2 from '../../_src/assets/images/single_img2.png';
import SingleImg3 from '../../_src/assets/images/single_img3.png';
import SingleImg4 from '../../_src/assets/images/single_img4.png';
import SizeSVG from '../../_src/assets/icons/size.svg';
import Left from '../../_src/assets/icons/left.svg';
import AvatarImage from '../../_src/assets/images/Ellipse.png';
import CommentImg from '../../_src/assets/images/commentImg.png';
import Right from '../../_src/assets/icons/right.svg';
import SelectComponent from '../../_src/components/form/Select';
import ButtonComponent from '../../_src/components/form/ButtonComponent';
import demoData from '../../demoData';

const imgArray = [SingleImg2, SingleProduct, SingleImg3, SingleImg4, SingleImg2];
const size = [36, 36.5, 37, 37.5, 38, 38.5, 39, 39.5];

function Index() {
  const router = useRouter();
  const [activeImg, setActiveImg] = useState(SingleProduct);
  const [qtyCount, setQtyCount] = useState(1);
  const { productId } = router.query;
  console.log(productId);
  const imgGroup = _.chunk(imgArray, 5);
  return (
    <Wrapper>
      <Box>
        <Typography className="header_path_text">
          Home / Shop / Shoes / Nike / Yeezy-boost-350 Lorem
        </Typography>
      </Box>

      <Box className="single_prod_info_container">
        <Box display="flex" alignItems="flex-start">
          <Image objectFit="contain" width={560} height={560} alt="" src={activeImg} />
          <Box className="single_prod_slider_block">
            <Carousel className="nuka_slider" vertical withoutControls>
              {imgGroup.map((images) => (
                <React.Fragment key={images}>
                  {images.map((img) => (
                    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                    <div
                      onClick={() => setActiveImg(img)}
                      className={`single_prod_slider_item ${img === activeImg && 'active_border'}`}
                      key={img}
                    >
                      <Image objectFit="cover" width={100} height={100} alt="" src={img} />
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </Carousel>
          </Box>
        </Box>
        <Box className="product_info_right_block">
          <Typography className="product_name">NIKE</Typography>
          <Typography className="product_desc">
            Leather Elite Stefan Janoski | Footwear in 2019
          </Typography>
          <Typography className="product_store_info_text">
            Store info
            {' '}
            <span>4.7 (230)</span>
          </Typography>
          <div className="product_price_block">
            <p className="product_price_active">$12.00</p>
            <p className="product_price">$24.00</p>
          </div>
          <div className="single_product_info_rating_block">
            <Rating
              className="single_product_info_rating"
              readOnly
              name="half-rating"
              defaultValue={3}
              precision={0.5}
            />
            <p>4.7 (230)</p>
          </div>
          <Typography className="single_product_info_filter_text">Colors:</Typography>
          <div className="colors_filter_block">
            {
              imgArray.map((img) => (
                <div className="colors_filter" key={img}>
                  <Image objectFit="cover" width={80} height={80} alt="" src={img} />
                </div>
              ))
            }
          </div>
          <div className="single_product_size_filter_block">
            <p className="single_product_info_filter_text2">Size:</p>
            <SizeSVG width={24} height={24} />
            <p>Size guide</p>
          </div>
          <div className="colors_filter_block">
            {
              size.map((i) => (
                <div key={i} className="size_filter">
                  {i}
                </div>
              ))
            }
          </div>
          <p className="single_product_info_filter_text2">More filters:</p>
          <SelectComponent
            title="Material"
            options={[]}
          />
          <div className="qty_block">
            <p>Qty</p>
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <span onClick={() => setQtyCount(qtyCount - 1)}>-</span>
            <div>
              {qtyCount}
            </div>
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <span onClick={() => setQtyCount(qtyCount + 1)}>+</span>
          </div>
          <div>
            <ButtonComponent
              title="PRICE IT"
              onClick={() => {}}
              className="prod_price_it"
            />
            <ButtonComponent
              title="BUY IT"
              onClick={() => {}}
              className="prod_buy_it"
            />
          </div>
        </Box>
      </Box>

      <Box>
        <Typography className="desc_name">Description</Typography>
        <Typography className="desc_text">
          The Oyster Perpetual Submariner is a reference among divers’ watches; it is the watch that unlocked the deep.
          Launched in 1953, the Submariner was the first divers’ wristwatch
          waterproof to a depth of 100 meters (330feet).
          This was the second great breakthrough in the technical mastery of waterproofness,
          following the invention of the Oyster, the world’s first waterproof wristwatch,
          in 1926. In watchmaking, the Submariner
          represented a historic turning point; it set the standard for divers’ watches Launched in 1953,
          the Submariner was the first divers’ wristwatch waterproof to a depth of 100 meters (330feet).
          This was
        </Typography>
      </Box>

      <div className="product_slider_block">
        <div className="product_slider_block_header">
          <p>You May Also Need</p>
          <span>VIEW ALL</span>
        </div>
        <Carousel
          className="single_prod_slider"
          height={410}
          slidesToShow={3}
          renderBottomCenterControls={false}
          renderCenterLeftControls={({ previousSlide }) => (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <span className="slider_btns" onClick={previousSlide}>
              <Left />
            </span>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <span className="slider_btns" onClick={nextSlide}>
              <Right />
            </span>
          )}
        >
          {
            demoData.categories.map((i) => (
              <div className="slider_block_img_in_prod">
                <Image layout="fixed" width={280} height={220} alt="" src={i.img} />
                <Box>
                  <div className="relevant_prod_info">
                    <p className="prod_name">Item Name</p>
                    <p className="prod_brand">Brand</p>
                    <div className="rating_block">
                      <Rating
                        className="bestDeals_item_info_rating"
                        readOnly
                        name="half-rating"
                        defaultValue={3}
                        precision={0.5}
                      />
                      <p>4.7 (230)</p>
                    </div>
                    <div className="price_block">
                      <p className="prod_price">$ 20,000,000</p>
                      <p className="prod_active_price">$ 15,000,000</p>
                    </div>
                  </div>
                </Box>
              </div>
            ))
          }
        </Carousel>
      </div>

      <div className="product_slider_block">
        <div className="product_slider_block_header">
          <p>Relevant products</p>
          <span>VIEW ALL</span>
        </div>
        <Carousel
          className="single_prod_slider"
          height={410}
          slidesToShow={3}
          renderBottomCenterControls={false}
          renderCenterLeftControls={({ previousSlide }) => (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <span className="slider_btns" onClick={previousSlide}>
              <Left />
            </span>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <span className="slider_btns" onClick={nextSlide}>
              <Right />
            </span>
          )}
        >
          {
              demoData.categories.map((i) => (
                <div className="slider_block_img_in_prod">
                  <Image layout="fixed" width={280} height={220} alt="" src={i.img} />
                  <Box>
                    <div className="relevant_prod_info">
                      <p className="prod_name">Item Name</p>
                      <p className="prod_brand">Brand</p>
                      <div className="rating_block">
                        <Rating
                          className="bestDeals_item_info_rating"
                          readOnly
                          name="half-rating"
                          defaultValue={3}
                          precision={0.5}
                        />
                        <p>4.7 (230)</p>
                      </div>
                      <div className="price_block">
                        <p className="prod_price">$ 20,000,000</p>
                        <p className="prod_active_price">$ 10,000,000</p>
                      </div>
                    </div>
                  </Box>
                </div>
              ))
            }
        </Carousel>
      </div>

      <div className="reviews_block">
        <p className="reviews_text">Reviews</p>
        <div className="review_wrapper">
          <Image layout="fixed" width={46} height={46} src={AvatarImage} alt="" />
          <div className="review_item_block">
            <div className="review_item_header">
              <div className="review_item_header_left">
                <p className="name">Lusine Dashtoyan</p>
                <div className="single_product_info_rating_block">
                  <Rating
                    className="rating"
                    readOnly
                    name="half-rating"
                    defaultValue={3}
                    precision={0.5}
                  />
                  <p>4.7</p>
                </div>
              </div>
              <p className="date">08 Juli 2021</p>
            </div>
            <p className="review">
              The Oyster Perpetual Submariner is a reference among divers’ watches;
              it is the watch that unlocked the deep.
              Launched in 1953, the Submariner was the first divers’ wristwatch waterproof
              to a depth of 100 meters (330feet).
              This was the second great breakthrough in the technical mastery of waterproofness,
              following the invention of the
            </p>
            <div>
              <Image src={CommentImg} alt="" />
            </div>
          </div>
        </div>
        <p className="load_more_btn">LOAD MORE</p>
      </div>
    </Wrapper>
  );
}

export default Index;
