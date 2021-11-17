import React, { useState } from 'react';
import {
  Card, CardContent, Typography, Box, Container,
  CardActions, Checkbox, FormControlLabel,
} from '@mui/material';
import Link from 'next/link';
import Close from '../../_src/assets/icons/close.svg';
import Input from '../../_src/components/form/Input';
import ButtonComponent from '../../_src/components/form/ButtonComponent';
import Facebook from '../../_src/assets/icons/facebook2.svg';
import Google from '../../_src/assets/icons/google2.svg';
import Apple from '../../_src/assets/icons/apple2.svg';
import Instagram from '../../_src/assets/icons/instagram2.svg';
import Wrapper from '../../_src/components/_common/Wrapper';

function Index() {
  const [state, setState] = useState({ email: '', password: '' });

  const handleChange = (name, val) => {
    const newState = { ...state };
    newState[name] = val;
    setState(newState);
  };

  return (
    <Wrapper>
      <div className="login_container">
        <Container maxWidth="sm">
          <Card className="login_card">
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Typography className="login_title">
                  Sign in
                </Typography>
                <Close />
              </Box>
              <div className="inputs_block">
                <Input
                  value={state.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  type="text"
                  title="Email or phone number"
                />
                <Input
                  value={state.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  type="password"
                  title="Password"
                />
              </div>

              <Box className="checkbox_container">
                <FormControlLabel className="forgot_text" control={<Checkbox defaultChecked />} label="Remember me" />
                <Typography className="forgot_text">forgot password?</Typography>
              </Box>

            </CardContent>

            <CardActions>
              <Box className="btn_container">
                <ButtonComponent
                  title="Sign in"
                  onClick={() => {}}
                />
                <Typography className="account_link">Dont have an account?</Typography>
                <Link href="/create_account">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a>
                    <Typography className="create_account_link">Create an Account</Typography>
                  </a>
                </Link>
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
                <Instagram />
                <Typography>Instagram</Typography>
              </Box>
            </Box>
          </Card>
        </Container>
      </div>
    </Wrapper>
  );
}

export default Index;
