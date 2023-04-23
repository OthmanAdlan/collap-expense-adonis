"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ioc_Mongoose_1 = __importDefault(global[Symbol.for('ioc.use')]("Mongoose"));
const mongoose_1 = require("mongoose");
const ObjectId = mongoose_1.Schema.Types.ObjectId;
const modelName = 'Transaction';
const schema = new mongoose_1.Schema({
    user: { type: ObjectId, ref: "user", required: true },
    title: { type: String, required: true },
    description: { type: String, required: false },
    amount: {
        type: Number, required: true,
        validate: {
            validator: function (v) { return v > 0; },
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
if (_ioc_Mongoose_1.default.modelNames().includes(modelName)) {
    _ioc_Mongoose_1.default.deleteModel(modelName);
}
exports.default = _ioc_Mongoose_1.default.model(modelName, schema);
//# sourceMappingURL=Transaction.js.map