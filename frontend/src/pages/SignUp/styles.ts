import styled from 'styled-components';

import sideImg from '../../resources/assets/sign-up_side-image.svg';
import colors from '../../resources/values/colors';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: white;
  padding-top: 60px;

  width: 100%;
  max-width: 700px;

  img {
    cursor: pointer;
  }

  form {
    width: 340px;

    display: flex;
    flex-direction: column;
    text-align: center;

    button {
      width: 100%;
      margin: 40px 0px;
    }
  }

  p {
    color: ${colors.gray};

    a {
      color: ${colors.primary};
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${colors.primaryDark};
      }
    }
  }
`;

export const Header = styled.h1`
  size: 50px;
  font-weight: 400;

  margin: 10px 0px 30px;
`;

export const SideImage = styled.div`
  flex: 1;
  background: url(${sideImg}) no-repeat center;
  background-size: cover;
`;
