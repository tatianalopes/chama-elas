import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormControlLabel, TextField, Checkbox } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Alert } from '@material-ui/lab';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';

import logoImg from '../../resources/assets/logo.svg';
import {
  Container,
  Content,
  FormButton,
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
  email: Yup.string().required(strings.field_required),
  password: Yup.string().required(strings.field_required),
});

const SignIn: React.FC = () => {
  const history = useHistory();

  const { signIn } = useAuth();

  const [isFormAlertOpen, setIsFormAlertOpen] = useState(false);

  const returnToDashboard = useCallback(() => {
    history.push('/');
  }, [history]);

  const { register, handleSubmit, errors } = useForm({ resolver: yupResolver(yupSchema) });
  const onSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/');
      } catch (err) {
        setIsFormAlertOpen(true);
      }
    },
    [history, signIn]
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
          <EmailSection>{strings.signIn_email_section}</EmailSection>

          { isFormAlertOpen &&
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => setIsFormAlertOpen(false)}
                >
                <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {strings.signIn_error_credentials}
            </Alert>
          }

          <TextField
            name="email"
            error={!!errors.email}
            inputRef={register}
            type="email"
            label={strings.email}
            variant="outlined"
            margin="dense"
            helperText={errors.email?.message}
          />
          <TextField
            name="password"
            error={!!errors.password}
            inputRef={register}
            type="password"
            label={strings.password}
            variant="outlined"
            margin="dense"
            helperText={errors.password?.message}
          />

          <PasswordContainer>
            <FormControlLabel
              control={<Checkbox name="rememberPassword" color="primary" />}
              label={strings.signIn_rememberPassword}
            />
            <Link to="/forgot-password">{strings.signIn_forgotPassword}</Link>
          </PasswordContainer>

          <FormButton type="submit" variant="contained" color="primary">{strings.signIn_button}</FormButton>
        </form>

        <p>{strings.signIn_noAccount} <Link to="/signup">{strings.signIn_register}</Link></p>
      </Content>
    </Container>
  );
};

export default SignIn;
