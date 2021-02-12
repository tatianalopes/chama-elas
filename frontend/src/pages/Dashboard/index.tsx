import React, { useEffect, useState, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { GridListTile } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import CategoryIcon from '@material-ui/icons/Category';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import LocationIcon from '@material-ui/icons/LocationOn';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteFillIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Chat';

import Navbar from '../../components/Navbar';
import strings from '../../resources/values/strings';
import { ICategory } from '../../resources/values/categories';
import mockProfessionals, { IProfessional } from '../../resources/values/professionals';

import {
  Filters,
  FilterBox,
  CategoryBanner,
  GridList,
  ProfessionalCard,
  ProfessionalCardIcons,
  ProfessionalTopContainer,
  ProfessionalInfo,
  ProfessionalName,
  ProfessionalMainContainer,
  ProfessionalButton
} from './styles';

interface IState {
  category: ICategory;
}

const Dashboard: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const category = (location.state as IState).category;

  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [isAvailabilitySelected, setIsAvailabilitySelected] = useState(false);
  const [isLocationSelected, setIsLocationSelected] = useState(false);

  const [professionals, setProfessionals] = useState<IProfessional[]>([]);

  // TODO: get values from API
  useEffect(() => {
    setProfessionals(mockProfessionals);
  }, []);

  const handleSendMessage = useCallback((e, professional) => {
    e.stopPropagation();

    history.push({
      pathname: '/messages',
      state: {professional},
    });
  }, [history]);

  const handleFavorite = useCallback((e, updatedProfessional:IProfessional) => {
    e.stopPropagation();

    const updatedList = professionals.map((professional) => {
      if (professional.id === updatedProfessional.id) {
        return {...professional, isFavorite: !updatedProfessional.isFavorite};
      }
      return professional;
    });

    setProfessionals(updatedList);
  }, [professionals]);

  const handleScheduleService = useCallback((e, professional) => {
    e.stopPropagation();


  }, []);

  return (
    <>
      <Navbar />
      <Filters>
        <FilterBox selected={isCategorySelected} onClick={() => {setIsCategorySelected(!isCategorySelected)}}>
          <CategoryIcon color="action" />
          {strings.filter_category}
        </FilterBox>

        <FilterBox selected={isAvailabilitySelected} onClick={() => {setIsAvailabilitySelected(!isAvailabilitySelected)}}>
          <CalendarIcon color="action" />
          {strings.filter_availability}
        </FilterBox>

        <FilterBox selected={isLocationSelected} onClick={() => {setIsLocationSelected(!isLocationSelected)}}>
          <LocationIcon color="action" />
          {strings.filter_location}
        </FilterBox>
      </Filters>
      { category &&
        <CategoryBanner color={category.color}>
            <img src={category.img} alt={category.title} />
            <span>{category.title}</span>
        </CategoryBanner>
      }
      <GridList cols={0} cellHeight={290} spacing={20} >
        {professionals.map((professional) => (
          <GridListTile key={professional.id} >
            <ProfessionalCard>
              <ProfessionalMainContainer>
                <img src={professional.avatar} alt={professional.name} />

                <ProfessionalInfo>
                  <ProfessionalTopContainer>
                    <ProfessionalName>{professional.name}</ProfessionalName>

                    <ProfessionalCardIcons>
                      <button type="button" onClick={(e) => handleSendMessage(e, professional)}>
                        <MessageIcon color="action" />
                      </button>

                      <button type="button" onClick={(e) => handleFavorite(e, professional)}>
                        {professional.isFavorite ? <FavoriteFillIcon color="primary" /> : <FavoriteBorderIcon color="action" />}
                      </button>
                    </ProfessionalCardIcons>
                  </ProfessionalTopContainer>

                  <Rating
                    value={professional.rating}
                    size="small" precision={0.5}
                    readOnly
                  />

                  <p>{professional.description}</p>
                </ProfessionalInfo>
              </ProfessionalMainContainer>

              <ProfessionalButton
                variant="contained"
                color="primary"
                onClick={(e) => handleScheduleService(e, professional)}
              >
                {strings.dashboard_schedule_service}
              </ProfessionalButton>
            </ProfessionalCard>
          </GridListTile>
        ))}
      </GridList>
    </>
  );
};

export default Dashboard;
