"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Transaction_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Transaction"));
class TransactionsController {
    async index({}) {
        const query = Transaction_1.default.find({});
        return await query.lean();
    }
    async store({ request }) {
        console.log(request.all());
        return await Transaction_1.default.create(request.all());
    }
    async show({}) { }
    async update({}) { }
    async destroy({}) { }
}
exports.default = TransactionsController;
//# sourceMappingURL=TransactionController.js.map