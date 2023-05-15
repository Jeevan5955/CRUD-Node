/**
 * app configuration
 */
import dotenv from 'dotenv';

dotenv.load();

export default function () {
  process.saarthi = {
    app: {
      key: process.env.APP_KEY || 'my_app_key',
      env: process.env.APP_ENV || 'development',
      name: process.env.APP_NAME || 'my site',
      api_url: process.env.API_URL,
      web_url: process.env.WEB_URL,
      port: process.env.APP_PORT || 9025,
      debug: process.env.APP_DEBUG || true,
      redis_url:process.env.REDIS_URL,
      maia_fetch_customer_endpoint: process.env.MAIA_FETCH_CUSTOMER_ENDPOINT,
      bajajCounsFlow_fetch_customer_endpoint: process.env.BAJAJFINSERV_COUNSELLING_FETCH_ENDPOINT,
      vindhya_bot_fetch_api: process.env.VINDHYA_BOT_FETCH_API,
      bhfl_bot_fetch_api:process.env.BHFL_ENDPOINT,
      tvs_fetch_customer_endpoint: process.env.TVS_Collections_ENDPOINT,
      salesNonboarding_fetch_customer_endpoint: process.env.SALESANDONBOARDING_FETCH_ENDPOINT,
      tradecred_fetch_api: process.env.TRADECRED_FETCH_ENDPOINT,
      smartcoin_legal_fetch_customer_endpoint:process.env.SMARTCOIN_LEGAL_NOTICE_FETCH_ENDPOINT
    },

    log: {
      level: process.env.LOG_LEVEL || 'debug',
      file: process.env.LOG_FILE || 'app',
    },

    db: {
      connection: process.env.DB_CONNECTION || 'mongodb',
      database: process.env.DB_DATABASE || 'saarthiDb',
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT|| 27017,
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
    },
    

    hash: {
      salt_round: 10,
      token: 600,
      refresh_token_expire: '90d',
      access_token_expire: '1d',
      hash_algorith: '',
      encrypt_algorithm: 'aes192',
    },

    tempdir: {
      dir: null
    },
  
    asterisk: {
      staging : {
        port: process.env.STAGING_ASTERISK_PORT,
        host: process.env.STAGING_ASTERISK_HOST,
        username: process.env.STAGING_ASTERISK_USERNAME,
        password: process.env.STAGING_ASTERISK_PASSWORD
      },
      prod : {
        port: process.env.ASTERISK_PORT,
        host: process.env.ASTERISK_HOST,
        username: process.env.ASTERISK_USERNAME,
        password: process.env.ASTERISK_PASSWORD
      }   
    },


    czentrix:{
      server_url: process.env.CZENTRIX_SERVER,
      camp: process.env.CZENTRIX_CAMPAIGN
    },

    crypto:{
      encryptKey: process.env.ENCRYPT_KEY,
      encryptIV: process.env.ENCRYPT_IV,
      decryptKey: process.env.DECRYPT_KEY,
      decryptIV: process.env.DECRYPT_IV
    },
    
    customer_upload_info: process.env.CUSTOMER_UPLOAD_INFO,

    database:process.env.DATABASE,

    tcl_clients: JSON.parse(process.env.TCL_CLIENTS || "[]"),
  };
}
