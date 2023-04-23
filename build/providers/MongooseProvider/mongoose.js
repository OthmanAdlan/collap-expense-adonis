"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class Mongoose {
    constructor(config) {
        this.connectionString = config.connectionString;
        mongoose_1.default.connect(this.connectionString).catch((err) => {
            console.error(err);
            throw new Error(`Connection Error to ${this.connectionString}`);
        });
        this.client = mongoose_1.default;
    }
}
exports.default = Mongoose;
//# sourceMappingURL=mongoose.js.map