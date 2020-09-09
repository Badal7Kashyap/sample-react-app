import React, { useState } from 'react';
import { TextField, Box, Button } from '@material-ui/core';
import { FlexBox } from '#commons/components/flex-box';

const RegexMobile = /[6-9][0-9]{9}/;

const isValidMobile = (value, callback) => {
  if (!value.match(RegexMobile)) {
    if (callback) callback();
    return false;
  }
  return true;
};

export const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    mobileNo: '',
  });

  const [error, setError] = useState({
    email: false,
    password: false,
    mobileNo: false,
  });

  return (
    <FlexBox align="center" justify="center">
      <Box width={500}>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const newError = { ...error };

            newError.email = loginData.email !== 'badal';
            newError.mobileNo = !isValidMobile(loginData.mobileNo);

            setError(newError);

            if (Object.values(newError).every((x) => x === false)) {
              console.log('Form ready to be submitted');
              console.log(newError);
            } else {
              console.log('Fill the form correctly');
              console.log(newError);
            }
          }}
        >
          <TextField
            value={loginData.email}
            onChange={(event) => {
              if (error.email) setError({ ...error, email: false });
              setLoginData({ ...loginData, email: event.target.value });
            }}
            error={error.email}
            helperText={error.email ? 'Not badal' : ''}
            label="Email"
            variant="outlined"
            fullWidth
          />

          <Box mb={2} />

          <TextField
            value={loginData.mobileNo}
            onChange={(e) => {
              if (error.mobileNo) setError({ ...error, mobileNo: false });
              if (e.target.value.length <= 10) {
                setLoginData({ ...loginData, mobileNo: e.target.value });
                isValidMobile(e.target.value, () =>
                  setError({ ...error, mobileNo: true })
                );
              }
            }}
            error={error.mobileNo}
            helperText={error.mobileNo ? 'Not a valid mobile no.' : ''}
            label="Mobile Number"
            variant="outlined"
            fullWidth
          />

          <Box mb={2} />

          <TextField
            value={loginData.password}
            onChange={(event) => {
              setLoginData({ ...loginData, password: event.target.value });
            }}
            error={error.password}
            helperText={error.password ? 'Not password' : ''}
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
          />

          <Box mb={2} />

          <Button variant="contained" color="primary" fullWidth type={'submit'}>
            Login
          </Button>
        </form>
      </Box>
    </FlexBox>
  );
};
