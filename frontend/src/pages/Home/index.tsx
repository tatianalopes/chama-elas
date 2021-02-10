import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { InputBase, Paper, Button, GridListTile } from '@material-ui/core';
import { Autocomplete, Rating } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteFillIcon from '@material-ui/icons/Favorite';

import {
  Background,
  MainContent,
  SearchBar,
  SectionTitle,
  SectionContainer,
  SectionGridList,
  CategoryCard,
  CategoryBackground,
  ProfessionalCard,
  ProfessionalTopContainer,
  ProfessionalMainContainer,
  ProfessionalInfo
} from './styles';

import profilePic from '../../resources/assets/profile-picture.jpg';
import strings from '../../resources/values/strings';
import categories from '../../resources/values/categories';
import Navbar from '../../components/Navbar';

export interface Professional {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  isFavorite: boolean;
  description: string;
}

const Home: React.FC = () => {
  const history = useHistory();

  const [professionals, setProfessionals] = useState<Professional[]>([]);

  // TODO: get values from API
  useEffect(() => {
    const tempProfessionals = [
      {
        id: "p1",
        name: "Amanda Andrade",
        avatar: profilePic,
        rating: 2.5,
        isFavorite: false,
        description: "Sou profissional da categoria Reformas e Reparos, e faço serviços relacionados a Eletricista, Gesso e DryWall, Pintor, Vidraceiro, Serralheria e Solda, Encanador.",
      },
      {
        id: "p2",
        name: "Júlia Albuquerque",
        avatar: profilePic,
        rating: 4,
        isFavorite: true,
        description: "Sou profissional da categoria Reformas e Reparos, e faço serviços relacionados a Eletricista, Gesso e DryWall, Pintor, Vidraceiro, Serralheria e Solda, Encanador.",
      },
    ];
    setProfessionals(tempProfessionals);
  }, []);

  const handleCategoryClick = useCallback((category) => {
    history.push({
      pathname: '/dashboard',
      state: category,
    });
  }, [history]);

  const handleProfessionalClick = useCallback((e, professional) => {
    if (e.target.className.includes('MuiRating')) return;

    history.push({
      pathname: '/professional',
      state: professional,
    });
  }, [history]);

  const handleRating = useCallback((e, newRating, professionalId) => {
    e.stopPropagation();

    const updatedList = professionals.map((professional) => {
      if (professional.id === professionalId) {
        return {...professional, rating: newRating};
      }
      return professional;
    });

    setProfessionals(updatedList);
  }, [professionals]);

  const handleFavorite = useCallback((e, updatedProfessional:Professional) => {
    e.stopPropagation();

    const updatedList = professionals.map((professional) => {
      if (professional.id === updatedProfessional.id) {
        return {...professional, isFavorite: !updatedProfessional.isFavorite};
      }
      return professional;
    });

    setProfessionals(updatedList);
  }, [professionals]);

  return (
    <>
      <Navbar />
      <Background>
        <MainContent>
          <h2>{strings.dashboard_welcome}</h2>
          <SearchBar>
            <Autocomplete
              freeSolo
              disableClearable
              options={categories.map((category) => category.title)}
              renderInput={(params) => (
                <Paper component="form" >
                  <SearchIcon color="primary" />
                  <InputBase
                    ref={params.InputProps.ref}
                    inputProps={params.inputProps}
                  />
                </Paper>
              )}
            />
            <Button variant="contained" color="primary">{strings.dashboard_search}</Button>
          </SearchBar>
        </MainContent>
      </Background>

      <SectionTitle>{strings.dashboard_categories}</SectionTitle>
      <SectionContainer>
        <SectionGridList cols={0} cellHeight={195} spacing={35}>
          {categories.map((category) => (
            <GridListTile key={category.title} onClick={() => handleCategoryClick(category)}>
              <CategoryCard>
                <CategoryBackground color={category.color}>
                  <img src={category.img} />
                </CategoryBackground>
                <span>{category.title}</span>
              </CategoryCard>
            </GridListTile>
          ))}
        </SectionGridList>
      </SectionContainer>

      <SectionTitle>{strings.dashboard_professionals}</SectionTitle>
      <SectionContainer>
        <SectionGridList cols={0} cellHeight={195} spacing={35}>
          {professionals.map((professional) => (
            <GridListTile key={professional.id} onClick={(e) => handleProfessionalClick(e, professional)}>
              <ProfessionalCard>
                <ProfessionalTopContainer>
                  <ProfessionalMainContainer>
                    <img src={professional.avatar} />
                    <ProfessionalInfo>
                      <span>{professional.name}</span>
                      <Rating
                        value={professional.rating}
                        size="small" precision={0.5}
                        onChange={(e, newRating) => handleRating(e, newRating, professional.id)}
                      />
                    </ProfessionalInfo>
                  </ProfessionalMainContainer>

                  <button type="button" onClick={(e) => handleFavorite(e, professional)}>
                    {professional.isFavorite ? <FavoriteFillIcon color="primary" /> : <FavoriteBorderIcon color="disabled" />}
                  </button>
                </ProfessionalTopContainer>

                <p>{professional.description}</p>
              </ProfessionalCard>
            </GridListTile>
          ))}
        </SectionGridList>
      </SectionContainer>
    </>
  );
};

export default Home;
