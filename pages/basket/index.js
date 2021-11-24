import React from 'react';
import {
  Checkbox, FormControlLabel, Typography,
} from '@mui/material';
import Image from 'next/image';
import Wrapper from '../../_src/components/_common/Wrapper';
import SearchInput from '../../_src/components/form/SearchInput';
import ButtonComponent from '../../_src/components/form/ButtonComponent';
import Close from '../../_src/assets/icons/close.svg';
import ProdImg from '../../_src/assets/images/Rectangle5.png';
import Wishlist from '../../_src/assets/icons/wishlist.svg';
import LastItem from '../../_src/assets/icons/last_item.svg';
import PriceIt from '../../_src/assets/icons/price_it.svg';
import QtyCounter from '../../_src/components/_common/QtyCounter';

function Index() {
  return (
    <Wrapper>
      <div className="basket_container">
        <div className="left_content">
          <div className="left_content_header">
            <Typography className="header_path_text">
              Home / My Account / Basket
            </Typography>
            <div className="search_block_in_basket">
              <SearchInput
                onChange={() => {}}
                value=""
                placeholder="Search Product"
              />
              <p>Remove (2 items)</p>
            </div>
          </div>

          <table className="basket_table">
            <tr className="table_header">
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <th><Checkbox /></th>
              <th>Picture</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <th />
            </tr>
            <tr className="table_content">
              <td><Checkbox /></td>
              <td>
                <Image layout="fixed" width={160} height={160} alt="" src={ProdImg} />
              </td>
              <td>
                <p className="prod_name">Item Name</p>
                <p className="prod_info">Brand</p>
                <p className="prod_info">38, Orange</p>
                <div className="icons_block">
                  <LastItem />
                  <Wishlist />
                  <PriceIt />
                </div>
              </td>
              <td>
                <QtyCounter title={false} size={40} />
              </td>
              <td className="prod_price">$28.00</td>
              <td className="close"><Close /></td>
            </tr>
            <tr className="table_content">
              <td><Checkbox /></td>
              <td>
                <Image layout="fixed" width={160} height={160} alt="" src={ProdImg} />
              </td>
              <td>
                <p className="prod_name">Item Name</p>
                <p className="prod_info">Brand</p>
                <p className="prod_info">38, Orange</p>
                <div className="icons_block">
                  <LastItem />
                  <Wishlist />
                  <PriceIt />
                </div>
              </td>
              <td>
                <QtyCounter title={false} size={40} />
              </td>
              <td className="prod_price">$28.00</td>
              <td className="close"><Close /></td>
            </tr>
          </table>

          <p className="saved_for_later">Saved for later</p>
          <table className="basket_table mt">
            <tr className="table_header">
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <th><Checkbox /></th>
              <th>Picture</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <th />
            </tr>
            <tr className="table_content">
              <td><Checkbox /></td>
              <td>
                <Image layout="fixed" width={160} height={160} alt="" src={ProdImg} />
              </td>
              <td>
                <p className="prod_name">Item Name</p>
                <p className="prod_info">Brand</p>
                <p className="prod_info">38, Orange</p>
                <div className="icons_block">
                  <LastItem />
                  <Wishlist />
                  <PriceIt />
                </div>
              </td>
              <td>
                <QtyCounter title={false} size={40} />
              </td>
              <td className="prod_price">$28.00</td>
              <td className="close"><Close /></td>
            </tr>
            <tr className="table_content">
              <td><Checkbox /></td>
              <td>
                <Image layout="fixed" width={160} height={160} alt="" src={ProdImg} />
              </td>
              <td>
                <p className="prod_name">Item Name</p>
                <p className="prod_info">Brand</p>
                <p className="prod_info">38, Orange</p>
                <div className="icons_block">
                  <LastItem />
                  <Wishlist />
                  <PriceIt />
                </div>
              </td>
              <td>
                <QtyCounter title={false} size={40} />
              </td>
              <td className="prod_price">$28.00</td>
              <td className="close"><Close /></td>
            </tr>
          </table>
        </div>

        <div className="right_content">
          <div className="order_card">
            <p className="title">Order (2 items)</p>
            <div className="price_block">
              <div>
                <p>Product</p>
                <p>$65.00</p>
              </div>
              <div>
                <p>Tax</p>
                <p>$5.00</p>
              </div>
              <div>
                <p className="total">Total</p>
                <p className="total">$70.00</p>
              </div>
            </div>
            <div className="checkbox_block">
              <FormControlLabel control={<Checkbox defaultChecked />} label="Use Uraaa! Bonus" />
            </div>
            <ButtonComponent
              onClick={() => {}}
              title="Proceed to checkout"
              className="btn"
            />
          </div>
        </div>

      </div>
    </Wrapper>
  );
}

export default Index;
