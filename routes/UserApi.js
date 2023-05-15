import express from 'express';
import UserController from '../app/Controllers/UserController';


const UserRouter = express.Router();


UserRouter.post('/v1/create', (request, response) => {
  const userController = new UserController(response);
  userController.createUser(request);
});

UserRouter.post('/v1/find', (request, response) => {
  const userController = new UserController(response);
  userController.fetchAllUser(request);
});

UserRouter.post('/v1/update', (request, response) => {
  const userController = new UserController(response);
  userController.updateUser(request);
});

UserRouter.delete('/v1/delete', (request, response) => {
  const userController = new UserController(response);
  userController.updateUser(request);
});

export default UserRouter;
