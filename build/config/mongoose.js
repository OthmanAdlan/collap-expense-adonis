"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseConfig = void 0;
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
exports.mongooseConfig = {
    connectionString: Env_1.default.get('MONGO_CONNECTION_STRING', 'mongodb://127.0.0.1:27017/test')
};
//# sourceMappingURL=mongoose.js.map