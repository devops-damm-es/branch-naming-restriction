"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IMainApplicationService_1 = require("./Application/Core/IMainApplicationService");
const Container_1 = require("./Crosscutting/Container");
var mainApplicationService = Container_1.IoCContainer.resolve(IMainApplicationService_1.IMainApplicationService);
mainApplicationService.start();
//# sourceMappingURL=app.js.map