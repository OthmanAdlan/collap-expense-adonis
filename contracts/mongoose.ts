declare module '@ioc:Mongoose' {
  import Mongoose from 'providers/MongooseProvider/mongoose';

  const MongooseClient: Mongoose;

  export default MongooseClient.client;
}
