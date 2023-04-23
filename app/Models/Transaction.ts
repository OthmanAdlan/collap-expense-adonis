import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import MongooseClient from '@ioc:Mongoose';
import { Schema } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

// export class Transaction extends BaseModel {
//   @column({ isPrimary: true })
//   public id: number

//   @column.dateTime({ autoCreate: true })
//   public createdAt: DateTime

//   @column.dateTime({ autoCreate: true, autoUpdate: true })
//   public updatedAt: DateTime
// }

const modelName = 'Transaction';

const schema = new Schema({
  user: { type: ObjectId, ref: "user", required: true },
  title: { type: String, required: true },
  description: { type: String, required: false },
  amount: {
    type: Number, required: true,
    validate: {
      validator: function (v: number) { return v > 0 },
      message: "Amount must be greater than zero"
    }
  },
  deleted_at: { type: Number, default: null, allowNull: true },
  linked_transaction: { type: ObjectId, ref: "transactions", required: false },
  status: { type: String, enum: ['pending', 'done'], required: true, default: "pending" },
}, {
  collection: 'transactions',
  timestamps: true
});

if (MongooseClient.modelNames().includes(modelName)) {
  (MongooseClient as any).deleteModel(modelName);
}

export default MongooseClient.model<any>(modelName, schema);
