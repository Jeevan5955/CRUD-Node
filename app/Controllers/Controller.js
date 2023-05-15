import Joi from '@hapi/joi';
import Logger from '../Utils/Logger';
import * as Exceptions from '../Exceptions/Exceptions';
import { verifyJwtToken, parseJson } from '../Utils/Common';
var CryptoJS = require("crypto-js");

export default class Contoller {
  constructor(response) {
    this.response = response
  }


  /**
   * validate params
   * @param {} request 
   * @param {} validationSchema
   * @param {} withAccountUser
   */
   async validateHeaders(request, queryParams = false) {
      let headers = request.headers;
      let body = request.body;
      let decryptedDataResult = await this.decrypt(headers.token)
      let result = decryptedDataResult.toString(CryptoJS.enc.Utf8);
      let error = false

      if(result !== body.key) {
        error = 
        {
          'details': [{
            'message': "The encrypted token value in header and key value in body are different"
          }]
        }
      }
      
      if (error) {
        throw (new Exceptions.ValidationException(error.details[0].message));
      }
      return true;
    }

    async decrypt(token) {
      let decryptedDataResult = CryptoJS.AES.decrypt(token, CryptoJS.enc.Utf8.parse(process.saarthi.crypto.encryptKey),
        {
          keySize: 128 / 8,
          iv: CryptoJS.enc.Utf8.parse(process.saarthi.crypto.encryptIV),
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        });
      return decryptedDataResult.toString(CryptoJS.enc.Utf8);
    }

  /**
   * validate params
   * @param {} request 
   * @param {} validationSchema
   * @param {} withAccountUser
   */
  async validateParams(request, validationSchema, queryParams = false) {
    
    if (validationSchema) {
      let temp = request.body;
      if (queryParams) {
        temp = request.query;
      }
      const { error, value } = Joi.validate(temp, validationSchema);
      if (error) {
        throw (new Exceptions.ValidationException(error.details[0].message));
      }
      return value;
    }

    return null;
  }

  /**
   * common method for sending success response
   * @param {*} data 
   */
  sendResponse(data) {
    this.response.status(200).json({ data });
  }

  /**
   * method for handling exceptions 
   * @param {*} error 
   */
  handleException(error) {
    // console.log(error);
    //masking db exceptions
    if (error.sql) {
      error.name = 'DbException';
    }

    switch (error.name) {
      case 'InternalServerErrorException':
        this.response.status(500).json({ error: error.message });
        Logger.error(new Error(error));
        break;
      case 'GeneralException':
        this.response.status(501).json({ error: error.message });
        Logger.error(new Error(error));
        break;
      case 'UnauthorizedException':
        Logger.error('UnauthorizedException: %s', error.message);
        this.response.status(401).json({ error: error.message });
        break;
      case 'NotFoundException':
        Logger.error('NotFoundException: %s', error.message);
        this.response.status(404).json({ error: error.message });
        break;
      case 'ConflictException':
        Logger.error('ConflictException: %s', error.message);
        this.response.status(409).json({ error: error.message });
        break;
      case 'ValidationException':
        Logger.error('ValidationException: %s', error.message);
        this.response.status(422).json({ error: error.message });
        break;
      case 'ForbiddenException':
        Logger.error('ForbiddenException: %s', error.message);
        this.response.status(403).json({ error: error.message });
        break;
      case 'BadRequestException':
        Logger.error('BadRequestException: %s', error.message);
        this.response.status(400).json({ error: error.message });
        break;
      case 'PermissionDeniedException':
        Logger.error('PermissionDeniedException: %s', error.message);
        this.response.status(403).json({ error: error.message });
        break;
      default:
        Logger.error(new Error(error));
        this.response.status(501).json({ error: 'unable to process request!, please try later' });
        break;
    }
  }
  
}