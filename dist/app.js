"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Container_1 = require("./Crosscutting/Container");
const IGitEventRepositoryService_1 = require("./Infrastructure/IGitEventRepositoryService");
let gitEventRepositoryService = Container_1.IoCContainer.resolve(IGitEventRepositoryService_1.IGitEventRepositoryService);
let a = gitEventRepositoryService.getGitEvent();
let adios = "adios";
//# sourceMappingURL=app.js.map