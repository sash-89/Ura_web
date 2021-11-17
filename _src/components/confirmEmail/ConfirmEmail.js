import React from 'react';
import {
  Card, CardContent, Typography, Box, Container,
  CardActions,
} from '@mui/material';
import Close from '../../assets/icons/close.svg';
import ButtonComponent from '../form/ButtonComponent';

function ConfirmEmail() {
  return (
    <Container maxWidth="sm">
      <Card className="confirm_email_card">
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Typography className="login_title">
              Confirm Your Email
            </Typography>
            <Close />
          </Box>
        </CardContent>

        <Box className="text_content_block">
          <Typography className="first_text">
            We have sent a link to exa***e@gmail.com to change Your password
          </Typography>
          <Typography className="second_text">
            Open the link wh have sent to change Your password
          </Typography>
        </Box>

        <CardActions className="conf_email_btn_container">
          <ButtonComponent
            title="Open Email"
            onClick={() => {}}
          />
          <span style={{ marginBottom: 0, marginTop: 32 }} className="second_text">
            I will open my email manually
          </span>
          <span className="go_back_btn">GO BACK</span>
        </CardActions>
      </Card>
    </Container>
  );
}

export default ConfirmEmail;
