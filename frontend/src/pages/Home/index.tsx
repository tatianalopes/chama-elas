import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { InputBase, Paper, Button, GridListTile } from '@material-ui/core';
import { Autocomplete, Rating } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteFillIcon from '@material-ui/icons/Favorite';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

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

import strings from '../../resources/values/strings';
import categories from '../../resources/values/categories';
import defaultAvatar from '../../resources/assets/defaultAvatar.svg';
import { IProfessional } from '../../resources/values/professionals';
import Navbar from '../../components/Navbar';

const Home: React.FC = () => {
  const history = useHistory();

  const { user, updateUser } = useAuth();

  const [professionals, setProfessionals] = useState<IProfessional[]>([]);

  useEffect(() => {
    api
      .get('/professional')
      .then(response => {
        setProfessionals(response.data.map((professional: any) => {
          return {
            id: professional._id,
            name: professional.name,
            avatar: professional.avatar || defaultAvatar,
            rating: professional.professionalInfo.reating,
            isFavorite: user?.favorites?.includes(professional._id),
            description: professional.professionalInfo.description,
          }
        }));
      });
  }, [user]);

  const handleCategoryClick = useCallback((category) => {
    history.push({
      pathname: '/dashboard',
      state: {category},
    });
  }, [history]);

  const handleProfessionalClick = useCallback((e, professional) => {
    history.push({
      pathname: '/professional',
      state: professional,
    });
  }, [history]);

  const handleFavorite = useCallback((e, updatedProfessional:IProfessional) => {
    e.stopPropagation();

    if (!user) {
      // TODO: show dialog asking if user wants to signin
      // history.push('/signin');
    } else {
      try {
        api.patch('/favorite', {
          professionalId: updatedProfessional.id,
        }).then(response => {
          updateUser({
            ...user,
            favorites: response.data,
          });
        });
      } catch(err) {
        // TODO: handle error
      }
    }
  }, [user, updateUser]);

  return (
    <>
      <Navbar />
      <Background>
        <MainContent>
          <h2>{strings.home_welcome}</h2>
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
            <Button variant="contained" color="primary">{strings.home_search}</Button>
          </SearchBar>
        </MainContent>
      </Background>

      <SectionTitle>{strings.home_categories}</SectionTitle>
      <SectionContainer>
        <SectionGridList cols={0} cellHeight={195} spacing={35}>
          {categories.map((category) => (
            <GridListTile key={category.title} onClick={() => handleCategoryClick(category)}>
              <CategoryCard>
                <CategoryBackground color={category.color}>
                  <img src={category.img} alt={category.title} />
                </CategoryBackground>
                <span>{category.title}</span>
              </CategoryCard>
            </GridListTile>
          ))}
        </SectionGridList>
      </SectionContainer>

      <SectionTitle>{strings.home_professionals}</SectionTitle>
      <SectionContainer>
        <SectionGridList cols={0} cellHeight={195} spacing={35}>
          {professionals.map((professional) => (
            <GridListTile key={professional.id} onClick={(e) => handleProfessionalClick(e, professional)}>
              <ProfessionalCard>
                <ProfessionalTopContainer>
                  <ProfessionalMainContainer>
                    <img src={professional.avatar} alt={professional.name} />
                    <ProfessionalInfo>
                      <span>{professional.name}</span>
                      <Rating
                        value={professional.rating}
                        size="small" precision={0.5}
                        readOnly
                      />
                    </ProfessionalInfo>
                  </ProfessionalMainContainer>

                  <button type="button" onClick={(e) => handleFavorite(e, professional)}>
                    {professional.isFavorite ? <FavoriteFillIcon color="primary" /> : <FavoriteBorderIcon color="action" />}
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
