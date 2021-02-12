// TODO: temporary code - mock values

import p1 from '../assets/profile-picture-1.jpg';
import p2 from '../assets/profile-picture-2.jpg';
import p3 from '../assets/profile-picture-3.jpg';
import p4 from '../assets/profile-picture-4.jpg';

export interface IProfessional {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  isFavorite: boolean;
  description: string;
}

const professionals:IProfessional[] = [
  {
    id: "p1",
    name: "Amanda Andrade",
    avatar: p1,
    rating: 2.5,
    isFavorite: false,
    description: "Sou profissional da categoria Reformas e Reparos, e faço serviços relacionados a Eletricista, Gesso e DryWall, Pintor, Vidraceiro, Serralheria e Solda, Encanador.",
  },
  {
    id: "p2",
    name: "Júlia Albuquerque",
    avatar: p2,
    rating: 4,
    isFavorite: true,
    description: "Sou profissional da categoria Reformas e Reparos, e faço serviços relacionados a Eletricista, Gesso e DryWall, Pintor, Vidraceiro, Serralheria e Solda, Encanador.",
  },
  {
    id: "p3",
    name: "Lúcia Castro",
    avatar: p3,
    rating: 3,
    isFavorite: true,
    description: "Sou profissional da categoria Reformas e Reparos, e faço serviços relacionados a Eletricista, Gesso e DryWall, Pintor, Vidraceiro, Serralheria e Solda, Encanador.",
  },
  {
    id: "p4",
    name: "Natália Silva",
    avatar: p4,
    rating: 4.5,
    isFavorite: false,
    description: "Sou profissional da categoria Reformas e Reparos, e faço serviços relacionados a Eletricista, Gesso e DryWall, Pintor, Vidraceiro, Serralheria e Solda, Encanador.",
  },
];

export default professionals;
