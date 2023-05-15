const {UserInfo} = require('../Models')

export default class UserInfoRepository{

    create(args){
        return UserInfo.create(args);
    }

    findAll(){
        return UserInfo.find();
    }

    find(args){
        return UserInfo.find(args);
    }

    findOne(args){
        return UserInfo.findOne(args);
    }

    findOneById(args){
        return UserInfo.findById(args.id);
    }

    delete(args){
        return UserInfo.findOneAndDelete(args);
    }

    upsert(conditions,update){
        return UserInfo.findByIdAndUpdate(conditions,update);
    }
}