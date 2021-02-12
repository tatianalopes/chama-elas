import eletricity from '../assets/category_eletricity.svg';
import hydraulics from '../assets/category_hydraulics.svg';
import paintwork from '../assets/category_paintwork.svg';
import woodwork from '../assets/category_woodwork.svg';
import construction from '../assets/category_construction.svg';
import electricalWiring from '../assets/category_electrical-wiring.svg';
import generalServices from '../assets/category_general-services.svg';
import drywall from '../assets/category_drywall.svg';
import glassware from '../assets/category_glassware.svg';

import strings from './strings';
import colors from './colors';

export interface ICategory {
  img: string;
  title: string;
  color: string;
}

const categories: ICategory[] = [
  {
    img: eletricity,
    title: strings.category_eletricity,
    color: colors.category_eletricity,
  },
  {
    img: hydraulics,
    title: strings.category_hydraulics,
    color: colors.category_hydraulics,
  },
  {
    img: paintwork,
    title: strings.category_paintwork,
    color: colors.category_paintwork,
  },
  {
    img: woodwork,
    title: strings.category_woodwork,
    color: colors.category_woodwork,
  },
  {
    img: construction,
    title: strings.category_construction,
    color: colors.category_construction,
  },
  {
    img: electricalWiring,
    title: strings.category_electrical_wiring,
    color: colors.category_electrical_wiring,
  },
  {
    img: generalServices,
    title: strings.category_general_services,
    color: colors.category_general_services,
  },
  {
    img: drywall,
    title: strings.category_drywall,
    color: colors.category_drywall,
  },
  {
    img: glassware,
    title: strings.category_glassware,
    color: colors.category_glassware,
  }
];

 export default categories;
