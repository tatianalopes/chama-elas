import styled from 'styled-components';
import { GridList } from '@material-ui/core';

import backgroundImg from '../../resources/assets/background.png';

interface CategoryProps {
  color: string;
}

export const Background = styled.div`
  background-image: url(${backgroundImg});
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;

  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const MainContent = styled.div`
  h2 {
    max-width: 450px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;

  form {
    height: 50px;
    width: 450px;

    display: flex;
    align-items: center;

    svg {
      margin-left: 15px;
      margin-right: 10px;
    }
  }

  button {
    margin-left: 15px;
  }
`;

export const SectionTitle = styled.h1`
  margin: 40px;
`;

export const SectionContainer = styled.div`
  margin-left: 77px;
`;

export const SectionGridList = styled(GridList)`
  &.MuiGridList-root {
    flex-wrap: nowrap;
  }

  div {
    border-radius: 8px;
    cursor: pointer;
  }
`;

export const CategoryCard = styled.div`
  width: 160px;
  height: 195px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

export const CategoryBackground = styled.div<CategoryProps>`
  width: 160px;
  height: 160px;

  background: ${props => (props.color)};

  display: flex;
  align-items: center;
  justify-content: center;

  img:hover {
    transform: scale(1.1);
  }
`;

export const ProfessionalCard = styled.div`
  width: 357px;
  height: 195px;
  padding: 20px;

  background: white;

  display: flex;
  flex-direction: column;

  p {
    font-style: normal;
    font-weight: 300;

    margin-top: 25px;
  }
`;

export const ProfessionalTopContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    margin-left: auto;

    align-self: flex-start;
  }

`;

export const ProfessionalMainContainer = styled.div`
  display: flex;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    align-self: flex-start;
  }
`;

export const ProfessionalInfo = styled.div`
  margin-left: 15px;

  display: flex;
  flex-direction: column;
`;
