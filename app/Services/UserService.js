
import * as Exceptions from '../Exceptions/Exceptions';
import UserInfoRepository from '../Repository/UserInfoRepository';
var rest = require('restler');
var fs = require("fs");

export default class UserService {
  constructor() {
    this.userInfoRepository = new UserInfoRepository();
  }


  async createUser (args){
      await this.userInfoRepository.create(args);
      return ({"message" : "User Create Successfully"})
  }

  async fetchAllUser(){
    return await this.userInfoRepository.findAll();
  }

  async fetchSpecificUser (args){
    return await this.userInfoRepository.find(args);
  }

  async updateUser (args){
    await this.userInfoRepository.updateUser({id: args.id}, args);
    return ({"message" : "User updated Successfully"});
  }

  async deleteUser (args){
    await this.userInfoRepository.delete({id: args.id});
    return ({"message" : "User deleted Successfully"});
  }

}
