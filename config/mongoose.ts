import Env from '@ioc:Adonis/Core/Env'

export const mongooseConfig = {
  connectionString: Env.get('MONGO_CONNECTION_STRING', 'mongodb://127.0.0.1:27017/test')
}
