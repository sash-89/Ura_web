import React, { useState } from 'react';
import {
  Card, CardContent, Typography, Box,
  CardActions, Container,
} from '@mui/material';
import Close from '../../assets/icons/close.svg';
import Input from '../form/Input';
import ButtonComponent from '../form/ButtonComponent';

function ConfirmPhoneNumber() {
  const [phone, setPhone] = useState('');

  const handleChange = (val) => setPhone(val);

  return (
    <Container maxWidth="sm">
      <Card className="confirm_email_card">
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Typography className="login_title">
              Confirm Phone Number
            </Typography>
            <Close />
          </Box>
        </CardContent>

        <Box className="text_content_block">
          <Typography className="first_text">
            We have sent a link to exa***e@gmail.com to change Your password
          </Typography>
          <Typography className="second_text_in_email_conf">
            Open the link wh have sent to change Your password
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center">
          <Input
            value={phone}
            onChange={(e) => handleChange(e.target.value)}
            type="text"
            title="Phone number"
          />
        </Box>

        <CardActions className="conf_phone_btn_container">
          <ButtonComponent
            title="CONFIRM"
            onClick={() => {}}
          />
          <span className="go_back_btn">CANCEL</span>
        </CardActions>
      </Card>
    </Container>
  );
}

export default ConfirmPhoneNumber;
