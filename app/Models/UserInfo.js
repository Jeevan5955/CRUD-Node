const mongoose = require("mongoose");
const { toJSON, paginate } = require("./Plugins");

const userInfoSchema = mongoose.Schema(
  {
    name : {
      type: String,
    },
    email : {
      type: String
    },
    mobileNumber: {
      type: Number
    },
    gender: {
      type: String,
    },
    age : {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
userInfoSchema.plugin(toJSON);

userInfoSchema.plugin(paginate);

/**
 * @typedef userInfo
 */
const userInfo= mongoose.model("UserInfo", userInfoSchema);

module.exports = userInfo;
