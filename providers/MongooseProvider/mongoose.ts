import { mongooseConfig } from "Config/mongoose";
import mongoose, { Mongoose as MongooseClient } from "mongoose";

export default class Mongoose {
  public client: MongooseClient;

  protected connectionString: string;
  // protected connectionOptions = {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // };

  constructor(config: typeof mongooseConfig) {
    this.connectionString = config.connectionString;

    // check if we need connection options
    mongoose.connect(this.connectionString).catch((err) => {
      console.error(err);

      throw new Error(`Connection Error to ${this.connectionString}`);
    });

    this.client = mongoose;
  }
}
