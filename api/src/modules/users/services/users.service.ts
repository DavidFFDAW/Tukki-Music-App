import { Injectable } from '@nestjs/common';
import { User } from '../models/user.model';
import { UserDto } from '../dtos/user.dto';
import { UserNotFoundException } from '../exceptions/user-not-found.exception';
const Jimp = require('jimp');

const csv = require('csv-parser');
const fs = require('fs');

const USERS_FILE_PATH = './src/assets/users.database.csv';

@Injectable()
export class UserService {
  users: User[] = [];

  constructor() {
    this.loadUsers();
  }
  private loadUsers() {
    fs.createReadStream(USERS_FILE_PATH)
      .pipe(csv({ separator: ';' }))
      .on('data', user => this.normalizedAndAddUser(user));
  }
  private normalizedAndAddUser(user) {
    const birthdate = user.FechaNacimiento?.replace(/\//g, '-');

    const normalizedUser = {
      id: +user.Codigo,
      /*   taxID: user.NIF, */
      sex: user.Sexo,
      phone: user.Telefono,
      name: user.Nombre,
      email: user.email,
      birthdate,
    };
    this.users.push(normalizedUser);
  }

  public async setAvatar(user: UserDto, file) {
    if (!file) {
      throw new UserNotFoundException(user);
    }
    const userDB = this.findUserById(user.id);
    if (!userDB) {
      throw new UserNotFoundException(user);
    }
    if (userDB.birthdate !== user.birthdate) {
      throw new UserNotFoundException(user);
    }
    /*   if (this.isSameTaxID(userDB.taxID, user.taxID)) {
      throw new UserNotFoundException(user);
    } */

    const path = `${process.cwd()}/avatars/${userDB.id}-${
      userDB.birthdate
      }.jpg`;

    const image = await Jimp.read(file.path);
    image.write(path); // save
    
    fs.unlink(file.path, (err) => {
      if (err) return console.error(err);
    });
  }

  /*   private isSameTaxID(userDBTaxID, userTaxID) {
    return userDBTaxID && userDBTaxID.toLowerCase() !== userTaxID.toLowerCase();
  } */
  public findUserById(userId: number): User {
    return this.users.find(({ id }) => userId === id);
  }
  public findUserByName(username: string): User {
    return this.users.find(({ name }) => name === username);
  }
}