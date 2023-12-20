import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('657de01c8573a5923333'); 

export const account = new Account(client);
export { ID } from 'appwrite';
