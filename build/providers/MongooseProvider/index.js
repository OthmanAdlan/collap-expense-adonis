"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MongooseProvider {
    constructor(app) {
        this.app = app;
    }
    register() {
    }
    async boot() {
        this.app.container.singleton('Mongoose', () => {
            const { mongooseConfig } = this.app.config.get('mongoose');
            const Mongoose = require('./mongoose').default;
            return new Mongoose(mongooseConfig).client;
        });
    }
    async ready() {
    }
    async shutdown() {
    }
}
exports.default = MongooseProvider;
//# sourceMappingURL=index.js.map