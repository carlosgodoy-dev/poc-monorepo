"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const server_1 = __importDefault(require("./server"));
const logger_1 = __importDefault(require("./logger"));
const { port } = config_1.default;
logger_1.default.info('---- Service -----');
// log unhandled execpetions
process.once('uncaughtException', (err) => {
    logger_1.default.error('Unhandled Exception', err);
});
process.once('uncaughtRejection', (err) => {
    logger_1.default.error('Unhandled Rejection', err);
});
try {
    const app = server_1.default.start({
        port
    });
    logger_1.default.info(`Server started succesfully, running on port: ${port}.`);
}
catch (error) {
    logger_1.default.error(error);
}
