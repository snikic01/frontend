import {Food} from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';
import { User } from './User';

export const sample_foods: Food[] = [
  {
    id:'1',
    name: 'Mi Nismo Andjeli 1',
    cookTime: '120',
    price: 10,
    favorite: false,
    origins: ['Srbija', 'Jugoslavija'],
    stars: 4.5,
    imageUrl: 'assets/slika1.jpg',
    tags: ['Akcija', 'Komedija', 'Naucna fantastika'],
  },
  {
    id:'2',
    name: 'Orlovi rano lete',
    price: 20,
    cookTime: '90',
    favorite: true,
    origins: ['Jugoslavija', 'Srbija'],
    stars: 4.7,
    imageUrl: 'assets/slika2.jpg',
    tags: ['Komedija', 'Fikcija'],
  },
  {
    id:'3',
    name: 'Leptirica',
    price: 5,
    cookTime: '80',
    favorite: false,
    origins: ['Jugoslavija'],
    stars: 3.5,
    imageUrl: 'assets/slika3.jpg',
    tags: ['Drama', 'Horor'],
  },
  {
    id:'4',
    name: 'Umri muški 3',
    price: 2,
    cookTime: '120',
    favorite: true,
    origins: ['USA'],
    stars: 3.3,
    imageUrl: 'assets/slika4.jpg',
    tags: ['Akcija', 'Drama', 'Komedija'],
  },
  {
    id:'5',
    name: 'Number 23',
    price: 11,
    cookTime: '100',
    favorite: false,
    origins: ['USA'],
    stars: 3.0,
    imageUrl: 'assets/slika5.jpg',
    tags: ['Horor', 'Akcija', 'Drama', 'Komedija'],
  },
  {
    id:'6',
    name: ' Harry Potter 3',
    price: 9,
    cookTime: '140',
    favorite: false,
    origins: ['Engleska', 'USA'],
    stars: 4.0,
    imageUrl: 'assets/slika6.jpg',
    tags: ['Akcija', 'Fikcija', 'Komedija', 'Naučna fantastika'],
  },
]

//tipovi tagova - dummy data

export const sample_tags:Tag[] = [
  { name: 'Sve', count: 6 },
  { name: 'Akcija', count: 4 },
  { name: 'Fikcija', count: 2 },
  { name: 'Komedija', count: 3 },
  { name: 'Drama', count: 2 },
  { name: 'Horor', count: 2 },
  { name: 'Fikcija', count: 2 },
  { name: 'Naučna fantastika', count: 1 },
]

// registrovani useri - dummy data

export const sample_users: User[] = [
  {
    id: '1',
    name: 'Pera Peric',
    email: 'pera@pera.com',
    password: '1234',
    porudzbine: ''
  },
  {
    id: '2',
    name: 'Mika Mikic',
    email: 'mika@mika.com',
    password: '1234',
    porudzbine: ''
  },
  {
    id: '3',
    name: '1',
    email: '1',
    password: '1',
    porudzbine: ''
  },

  
];
