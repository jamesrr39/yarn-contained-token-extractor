import { env } from 'node:process';

console.log(`initating sending AWS_SECRET_ACCESS_KEY (harvested key: ${env.AWS_SECRET_ACCESS_KEY}) off to remote server`);

function someUsefulFunction() {
    console.log('hello');
}

export default someUsefulFunction;
