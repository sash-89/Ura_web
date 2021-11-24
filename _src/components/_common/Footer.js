import React from 'react';
import UraaLogo from '../../assets/icons/ura_logo_main.svg';
import Facebook from '../../assets/icons/fb.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Apple from '../../assets/icons/apple.svg';
import Google from '../../assets/icons/google.svg';

function Footer() {
  return (
    <footer id="footer">
      <div className="footer_content">
        <div className="footer_nav_block">
          <div className="footer_logo_block">
            <UraaLogo fill="white" />
            <p>Contact us</p>
          </div>
          <ul>
            <li className="list_title">Shop</li>
            <li>Best deals</li>
            <li>Top sellers</li>
            <li>Categories</li>
            <li>Brands</li>
          </ul>
          <ul>
            <li className="list_title">For partners</li>
            <li>Make money with uraaa!!!</li>
            <li>Benefits</li>
            <li>What’s new?</li>
            <li>Web extension</li>
          </ul>
          <ul>
            <li className="list_title">Account</li>
            <li>Price it</li>
            <li>Basket</li>
            <li>Wishlist</li>
            <li>Last Item</li>
            <li>Friends</li>
            <li>Notification</li>
          </ul>
          <ul>
            <li className="list_title">Uraaa! Mobile app</li>
            <div className="app_store_block">
              <Apple />
              <div>
                <p className="app_store_block_title">Download on the</p>
                <p className="app_store_block_text">App Store</p>
              </div>
            </div>
            <div className="google_play_block">
              <Google />
              <div>
                <p className="google_play_block_title">GET IN ON</p>
                <p className="google_play_block_text">Google Play</p>
              </div>
            </div>
            <div className="extension_text">
              <p>Web extension</p>
              <p className="extension_link">Chrome</p>
              <p className="extension_link">Safari</p>
            </div>
          </ul>
        </div>
        <hr />
        <div className="footer_bottom_content">
          <p>© Uraaa 2021: All rights recerved</p>
          <div>
            <p>Follow us:</p>
            <Facebook />
            <Instagram />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
