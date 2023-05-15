/*eslint-disable */

const maxMemory = process.env.MAX_MEMORY || '1G'
const totalWorkersNeeded = process.env.WORKERS || 4;
let initialPort = process.env.START_PORT || 9025;



const workerSwarm = [];

for(let i= 0; i < totalWorkersNeeded; i++){
  const appObject = {
    name: `User Worker ${i + 1}`,
    script: 'npx',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'babel-node --presets=@babel/preset-env -- index.js',
    instances: 1,
    exec_mode : "fork", 
    autorestart: true,
    watch: false,
    max_memory_restart: maxMemory,
    env: {
      NODE_ENV: "staging",
      APP_PORT: initialPort,
    },
    env: {
      NODE_ENV: "development",
      APP_PORT: initialPort,
    },
    env_production: {
      NODE_ENV: "production",
      APP_PORT: initialPort,
    }
  }

  workerSwarm.push(appObject);

  initialPort++;
}


module.exports = {
  apps : workerSwarm,
};


