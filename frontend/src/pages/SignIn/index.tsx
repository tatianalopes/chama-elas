import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, FormControlLabel, TextField, Checkbox } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

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

interface SignInFormData {
  email: string;
  password: string;
  rememberPassword: boolean;
}

const yupSchema = Yup.object().shape({
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  password: Yup.string().required('Senha obrigatória'),
});

const SignIn: React.FC = () => {
  const history = useHistory();

  const returnToDashboard = useCallback(() => {
    history.push('/');
  }, [history]);

  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(yupSchema) });
  const onSubmit = useCallback(
    async (data: SignInFormData) => {
      history.push('/');
    },
    [history]
  );

  return (
    <Container>
      <SideImage />

      <Content>
        <img src={logoImg} alt="ChamaElas" onClick={returnToDashboard} />
        <Header>{strings.signIn_header}</Header>

        <GoogleButton
          clientId="clientId"
          buttonText={strings.signIn_google}
          cookiePolicy={'single_host_origin'}
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <EmailSection>Ou Entre com seu Email</EmailSection>

          <TextField
            name="email"
            error={!!errors.email}
            inputRef={register}
            type="email"
            label={strings.email}
            variant="outlined"
            margin="dense"
          />
          <TextField
            name="password"
            error={!!errors.password}
            inputRef={register}
            type="password"
            label={strings.password}
            variant="outlined"
            margin="dense"
          />

          <PasswordContainer>
            <FormControlLabel
              control={<Checkbox name="rememberPassword" color="primary" />}
              label={strings.signIn_rememberPassword}
            />
            <Link to="/forgot-password">{strings.signIn_forgotPassword}</Link>
          </PasswordContainer>

          <Button type="submit" variant="contained" color="primary">{strings.signIn_button}</Button>
        </form>

        <p>{strings.signIn_noAccount} <Link to="/signup">{strings.signIn_register}</Link></p>
      </Content>
    </Container>
  );
};

export default SignIn;
