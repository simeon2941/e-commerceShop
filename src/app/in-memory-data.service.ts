import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './users';

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
    return {users};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(hero => hero.id)) + 1 : 11;
  }
}
