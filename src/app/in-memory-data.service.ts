import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './users';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 12, name: 'Simeon', lastName: 'Admin', email: 'simeonlico@gmail.com', isAdmin: true},
      { id: 13, name: 'Juho', lastName: 'Makela', email: 'juho.makela@example.com', isAdmin: false},
      { id: 11, name: 'Eckard', lastName: 'Zoller', email: 'eckard.zoller@example.com', isAdmin: false},
      { id: 19, name: 'Perfeito', lastName: 'Moraes', email: 'perfeito.moraes@example.com', isAdmin: false},
      { id: 23, name: 'Ayub', lastName: 'Resell', email: 'ayub.resell@example.com', isAdmin: false},
      { id: 32, name: 'Leticia', lastName: 'Luevano', email: 'leticia.luevano@example.com', isAdmin: false},
      { id: 33, name: 'Eren', lastName: 'Karaduman', email: 'eren.karaduman@example.com', isAdmin: false},
      { id: 43, name: 'Jessica', lastName: 'Kim', email: 'jessica.kim@example.com', isAdmin: false},
      { id: 31, name: 'Maxwell', lastName: 'Wright', email: 'maxwell.wright@example.com', isAdmin: false},
      { id: 1, name: 'Ismael', lastName: 'Delgado', email: 'ismael.delgado@example.com', isAdmin: false},
    ];

    const products =


    [
      {
        "id": 1,
        "name": "Aesthetic Apple AirPods Max!",
        "price": 799,
        "description": "A large phone with one of the best screens",
        "imageUrl" :"https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&ix'id'=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80"
        ,"productQuantity":10
      },
      {
        "id": 2,
        "name": "Headphones",
        "price": 699,
        "description": "A great phone with one of the best cameras",
        "imageUrl" :"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ix'id'=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        ,"productQuantity":10
      },
      {
        "id": 3,
        "name": "Phone Standard",
        "price": 599,
        "description": "Phone Standard",
        "imageUrl" :"https://images.unsplash.com/photo-1550792173-5220eacae50e?ixlib=rb-4.0.3&ix'id'=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxlJTIwcHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        ,"productQuantity":10
      },
      {
        "id": 4,
        "name": "Phone Maxi",
        "price": 899,
        "description": "A great phone with one of the best cameras",
        "imageUrl" :"https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?ixlib=rb-4.0.3&ix'id'=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGFwcGxlJTIwcHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        ,"productQuantity":10
      },
      {
        "id": 5,
        "name": "Phone XL",
        "price": 799,
        "description": "A large phone with one of the best screens",
        "imageUrl" :"https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?ixlib=rb-4.0.3&ix'id'=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        ,"productQuantity":10
      },
      {
        "id": 6,
        "name": "Canon cammera",
        "price": 699,
        "description": "A great phone with one of the best cameras",
        "imageUrl" :"https://images.unsplash.com/photo-1519638831568-d9897f54ed69?ixlib=rb-4.0.3&ix'id'=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        ,"productQuantity":10
      },
      {
        "id": 7,
        "name": "Wired phone",
        "price": 599,
        "description": "Phone Standard",
        "imageUrl" :"https://images.unsplash.com/photo-1557180295-76eee20ae8aa?ixlib=rb-4.0.3&ix'id'=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        ,"productQuantity":10
      },
      {
        "id": 8,
        "name": "Phone Maxi",
        "price": 899,
        "description": "A great phone with one of the best cameras",
        "imageUrl" :"https://images.unsplash.com/photo-1602525303392-2133aae17425?ixlib=rb-4.0.3&ix'id'=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
        ,"productQuantity":10
      },
      {
        "id": 9,
        "name": "Yellow phone case",
        "price": 899,
        "description": "Enjoying the beach in Rio de Janeiro, nothing to do but levitate things and have some beers.",
        "imageUrl" :"https://images.unsplash.com/photo-1506025883753-c77a55138eae?ixlib=rb-4.0.3&ix'id'=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2083&q=80"
        ,"productQuantity":10
      },
      {
        "id": 10,
        "name": "Nikon D810",
        "price": 899,
        "description": "Enjoying the beach in Rio de Janeiro, nothing to do but levitate things and have some beers.",
        "imageUrl" :"https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?ixlib=rb-4.0.3&ix'id'=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtZXJhc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        ,"productQuantity":10
      },
      {
        "id": 11,
        "name": "Game Boy Color",
        "price": 899,
        "description": "Enjoying the beach in Rio de Janeiro, nothing to do but levitate things and have some beers.",
        "imageUrl" :"https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?ixlib=rb-4.0.3&ix'id'=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        ,"productQuantity":10
      },
      {
        "id": 12,
        "name": "Sony camera",
        "price": 899,
        "description": "Enjoying the beach in Rio de Janeiro, nothing to do but levitate things and have some beers.",
        "imageUrl" :"https://images.unsplash.com/photo-1624911266025-6464db314f40?ixlib=rb-4.0.3&ix'id'=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        ,"productQuantity":10
      },
      {
        "id": 13,
        "name": "Game Boy Clear",
        "price": 899,
        "description": "GameBoy Clear",
        "imageUrl" :"https://images.unsplash.com/photo-1577583113753-ca7e95d1bdc6?ixlib=rb-4.0.3&ix'id'=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        ,"productQuantity":10
      },
      {
        "id": 14,
        "name": "Nintendo Game Boy",
        "price": 899,
        "description": "Nintendo Game Boy",
        "imageUrl" :"https://images.unsplash.com/photo-1599933310642-8f07bdea325a?ixlib=rb-4.0.3&ix'id'=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402&q=80"
        ,"productQuantity":10
      },
      {
        "id": 15,
        "name": "Nintendo Game Boy",
        "price": 899,
        "description": "Nintendo Game Boy",
        "imageUrl" :"https://images.unsplash.com/photo-1599933310642-8f07bdea325a?ixlib=rb-4.0.3&ix'id'=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402&q=80"
        ,"productQuantity":10
      },
      {
        "id": 16,
        "name": "Nintendo Game Boy",
        "price": 899,
        "description": "Nintendo Game Boy",
        "imageUrl" :"https://images.unsplash.com/photo-1599933310642-8f07bdea325a?ixlib=rb-4.0.3&ix'id'=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402&q=80"
        ,"productQuantity":10
      },
      {
        "id": 17,
        "name": "Nintendo Game Boy",
        "price": 899,
        "description": "Nintendo Game Boy",
        "imageUrl" :"https://images.unsplash.com/photo-1599933310642-8f07bdea325a?ixlib=rb-4.0.3&ix'id'=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402&q=80"
        ,"productQuantity":10
      },
      {
        "id": 18,
        "name": "Nintendo Game Boy",
        "price": 899,
        "description": "Nintendo Game Boy",
        "imageUrl" :"https://images.unsplash.com/photo-1599933310642-8f07bdea325a?ixlib=rb-4.0.3&ix'id'=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402&q=80"
        ,"productQuantity":10
      },
      {
        "id": 19,
        "name": "Nintendo Game Boy",
        "price": 899,
        "description": "Nintendo Game Boy",
        "imageUrl" :"https://images.unsplash.com/photo-1599933310642-8f07bdea325a?ixlib=rb-4.0.3&ix'id'=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402&q=80"
        ,"productQuantity":10
      },
      {
        "id": 20,
        "name": "Nintendo Game Boy",
        "price": 899,
        "description": "Nintendo Game Boy",
        "imageUrl" :"https://images.unsplash.com/photo-1599933310642-8f07bdea325a?ixlib=rb-4.0.3&ix'id'=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1402&q=80"
        ,"productQuantity":10
      }
    ]



    return {users,products};
  }





}
