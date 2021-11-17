import React, { useState } from 'react';
import {
  Card, CardContent, Typography, Box, Container,
  CardActions, Checkbox, FormControlLabel,
} from '@mui/material';
import Close from '../../_src/assets/icons/close.svg';
import Input from '../../_src/components/form/Input';
import ButtonComponent from '../../_src/components/form/ButtonComponent';
import Facebook from '../../_src/assets/icons/facebook2.svg';
import Google from '../../_src/assets/icons/google2.svg';
import Apple from '../../_src/assets/icons/apple2.svg';
import Instagram2 from '../../_src/assets/icons/instagram2.svg';

function Index() {
  const [accountInfo, setAccountInfo] = useState({ email: '', password: '' });

  const handleChange = (name, val) => {
    const newState = { ...accountInfo };
    newState[name] = val;
    setAccountInfo(newState);
  };

  return (
    <div className="login_container">
      <Container maxWidth="sm">
        <Card className="create_account_card">
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Typography className="login_title">
                Create account
              </Typography>
              <Close />
            </Box>
            <div className="inputs_block">
              <Input
                value={accountInfo.email}
                onChange={(e) => handleChange('email', e.target.value)}
                type="text"
                title="Email or phone number"
              />
              <Input
                value={accountInfo.password}
                onChange={(e) => handleChange('password', e.target.value)}
                type="password"
                title="Password"
              />
            </div>

            <Box className="checkbox_container" display="flex" justifyContent="space-between" alignItems="center">
              <FormControlLabel
                className="forgot_text"
                control={<Checkbox defaultChecked />}
                label={(
                  <p className="terms_link">
                    I agree to Uraaa.com
                    <span> Privacy Policy and Terms & Condition</span>
                  </p>
               )}
              />
            </Box>

          </CardContent>

          <CardActions>
            <Box className="btn_container">
              <ButtonComponent
                title="Create account"
                onClick={() => {}}
              />
            </Box>
          </CardActions>

          <Box sx={{ mt: 4, mb: 1 }} className="hr_container">
            <hr />
            <Typography>Or continue with</Typography>
            <hr />
          </Box>

          <Box className="oauth_container">
            <Box className="">
              <Facebook />
              <Typography>Facebook</Typography>
            </Box>
            <Box>
              <Google />
              <Typography>Google</Typography>
            </Box>
            <Box>
              <Apple />
              <Typography>Apple</Typography>
            </Box>
            <Box>
              <Instagram2 />
              <Typography>Instagram</Typography>
            </Box>
          </Box>
        </Card>
      </Container>
    </div>
  );
}

export default Index;
