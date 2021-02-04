import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, Checkbox, FormControlLabel } from '@material-ui/core';

import logoImg from '../../resources/assets/logo.svg';
import {
  Container,
  Content,
  Header,
  GoogleButton,
  EmailSection,
  PasswordContainer,
  SideImage
} from './styles';
import strings from '../../resources/values/strings';

const SignIn: React.FC = () => {

  const handleSubmit = useCallback(() => {

  }, []);

  return (
    <Container>
      <SideImage />

      <Content>
        <img src={logoImg} alt="ChamaElas" />
        <Header>{strings.signIn_header}</Header>

        <GoogleButton
          clientId="clientId"
          buttonText={strings.signIn_google}
          cookiePolicy={'single_host_origin'}
        />

        <form onSubmit={handleSubmit}>
          <EmailSection>Ou Entre com seu Email</EmailSection>

          <TextField id="email" label={strings.email} variant="outlined" margin="dense"/>
          <TextField
            id="password"
            type="password"
            label={strings.password}
            variant="outlined"
            margin="dense"
          />

          <PasswordContainer>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={strings.signIn_rememberPassword}
            />
            <Link to="/forgot-password">{strings.signIn_forgotPassword}</Link>
          </PasswordContainer>

          <Button variant="contained" color="primary">{strings.signIn_button}</Button>
        </form>

        <p>{strings.signIn_noAccount} <Link to="/signup">{strings.signIn_register}</Link></p>
      </Content>
    </Container>
  );
};

export default SignIn;
