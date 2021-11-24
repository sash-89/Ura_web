import React from 'react';
import PropTypes from 'prop-types';
import Close from '../../assets/icons/close.svg';

function NotificationsModal({ open, onClose }) {
  return (
    <div className={`notifications_block ${open && 'active'}`}>
      <div className="notifications_header">
        <p>Notifications</p>
        <button type="button" onClick={onClose}>
          <Close />
        </button>
      </div>

      <div className="notifications_content">
        <div className="notification">
          <div className="notification_top">
            <div>
              <span className="notifications_green" />
              <p>Congratulations</p>
            </div>
            <div className="notifications_date">01.02.2021 | 3:39 PM</div>
          </div>
          <div className="notification_message">
            <p>
              Approved Trade Play station 4, quantity 1,
              black regular price 250.000 amd Your price 200.000amd time left
              to buy  15min 23sec.
            </p>
            <Close />
          </div>
        </div>
      </div>

      <div className="notifications_content">
        <div className="notification">
          <div className="notification_top">
            <div>
              <span className="notifications_red" />
              <p style={{ color: '#D80027' }}>Sorry</p>
            </div>
            <div className="notifications_date">01.02.2021 | 3:39 PM</div>
          </div>
          <div className="notification_message">
            <p>
              Approved Trade Play station 4, quantity 1,
              black regular price 250.000 amd Your price 200.000amd time left
              to buy  15min 23sec.
            </p>
            <Close />
          </div>
        </div>
      </div>
    </div>
  );
}

NotificationsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NotificationsModal;
