import Controller from './Controller';
import Validator from '../Validators/Validator';
import UserService from '../Services/UserService';
import * as Exceptions from '../Exceptions/Exceptions';
import at from 'v-at'


export default class UserController extends Controller {
  constructor (response) {
    super(response);
    this.userService = new UserService();
  }

  
  /**
   *
   * @param {} request
   */
   async createUser (request) {
    try {
      const params = await this.validateParams(request, Validator.userCreate);
      const userPromise = this.userService.createUser(params);
      userPromise
        .then(user => {
          this.sendResponse(user);
        })
        .catch(error => {
          this.handleException(error);
        });
    } catch (error) {
      this.handleException(error);
    }
  }

  async fetchAllUser(request){
    try {
      const userPromise = this.userService.fetchAllUser();
      userPromise
        .then(user => {
          this.sendResponse(user);
        })
        .catch(error => {
          this.handleException(error);
        });
    } catch (error) {
      this.handleException(error);
    }
  }

  async updateUser (request){
    try {
      const params = await this.validateParams(request, Validator.userUpdate);
      const userPromise = this.userService.updateUser(params);
      userPromise
        .then(user => {
          this.sendResponse(user);
        })
        .catch(error => {
          this.handleException(error);
        });
    } catch (error) {
      this.handleException(error);
    }
  }

  async deleteUser (request){
    try {
      const params = await this.validateParams(request, Validator.userDelete);
      const userPromise = this.userService.updateUser(params);
      userPromise
        .then(user => {
          this.sendResponse(user);
        })
        .catch(error => {
          this.handleException(error);
        });
    } catch (error) {
      this.handleException(error);
    }
  }



}
