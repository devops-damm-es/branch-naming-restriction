"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IoCContainer = void 0;
const typescript_ioc_1 = require("typescript-ioc");
const IGitEventRepositoryService_1 = require("../Infrastructure/IGitEventRepositoryService");
const GitEventRepositoryService_1 = require("../Infrastructure/Impl/GitEventRepositoryService");
class IoCContainer {
    static loadContainer() {
        // Application
        // Domain
        // Infrastructure
        typescript_ioc_1.Container.bind(IGitEventRepositoryService_1.IGitEventRepositoryService).to(GitEventRepositoryService_1.GitEventRepositoryService);
    }
    static resolve(arg) {
        if (IoCContainer.isLoaded != true) {
            IoCContainer.loadContainer();
            IoCContainer.isLoaded = true;
        }
        return typescript_ioc_1.Container.get(arg);
    }
}
exports.IoCContainer = IoCContainer;
//# sourceMappingURL=Container.js.map