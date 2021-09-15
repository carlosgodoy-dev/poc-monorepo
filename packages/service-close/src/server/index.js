"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const koa2_cors_1 = __importDefault(require("koa2-cors"));
const routers_1 = __importDefault(require("../routers"));
const start = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const app = new koa_1.default();
    app.use((0, koa2_cors_1.default)());
    app.use((0, koa_logger_1.default)());
    app.use((0, koa_bodyparser_1.default)());
    app.use((ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield next();
        }
        catch (err) {
            ctx.status = err.status || 500;
            ctx.body = err.message;
        }
    }));
    app.use(routers_1.default.routes())
        .use(routers_1.default.allowedMethods());
    const server = app.listen(options.port, () => __awaiter(void 0, void 0, void 0, function* () { return server; }));
    return yield server;
});
exports.default = Object.assign({}, { start });
