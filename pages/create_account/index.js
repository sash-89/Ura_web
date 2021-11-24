import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
import { registrationRequest } from "../../_src/store/actions/actions";

function Index() {
  const [accountInfo, setAccountInfo] = useState({ email: '', password: '' });
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (name, val) => {
    const newState = { ...accountInfo };
    newState[name] = val;
    setAccountInfo(newState);
  };



  const request = async () => {
    setLoading(true);
    const { payload } = await dispatch(registrationRequest(accountInfo))
    setLoading(false);
  }

  return (
    <div className="login_container">
      <Container maxWidth="sm">
        <div className="create_account_card bowS">
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
                control={<Checkbox checked={check} />}
                onChange={() => setCheck(!check)}
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
                onClick={request}
                disabled={!check}
                loading={loading}
              />
            </Box>
          </CardActions>

          <Box className="hr_container">
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
        </div>
      </Container>
    </div>
  );
}

Index.getInitialProps = async ({ store }) => {
  // const { reducer: { solutions } } = store.getState();
};

export default Index;
