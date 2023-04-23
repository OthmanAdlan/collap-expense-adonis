import type { ApplicationContract } from '@ioc:Adonis/Core/Application'
// @ts-ignore
import { mongooseConfig } from 'Config/mongoose';

export default class MongooseProvider {
  constructor(protected app: ApplicationContract) {
    //
  }

  public register() {
    // Register your own bindings
  }

  public async boot() {
    // IoC container is ready
    this.app.container.singleton('Mongoose', () => {
      const { mongooseConfig } = this.app.config.get('mongoose');

      const Mongoose = require('./mongoose').default;
      return new Mongoose(mongooseConfig).client;
    });
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down

    // TODO: close the connection to mongodb here
    // this.app.container.use('Mongoose');
  }
}
