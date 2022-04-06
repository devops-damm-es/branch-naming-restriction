"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IGitDefaultBranchNameApplicationService_1 = require("./Application/Core/IGitDefaultBranchNameApplicationService");
const IGitEventApplicationService_1 = require("./Application/Core/IGitEventApplicationService");
const Container_1 = require("./Crosscutting/Container");
const GitEventTypeEnum_1 = require("./Domain/Enums/GitEventTypeEnum");
let gitEventApplicationService = Container_1.IoCContainer.resolve(IGitEventApplicationService_1.IGitEventApplicationService);
var gitEventType = gitEventApplicationService.getGitEventType();
if (gitEventType == GitEventTypeEnum_1.GitEventTypeEnum.Push) {
    console.log("Branch naming restriction: Push event");
}
else if (gitEventType == GitEventTypeEnum_1.GitEventTypeEnum.PullRequest) {
    console.log("Branch naming restriction: Pull request event");
}
let gitDefaultBranchNameApplicationService = Container_1.IoCContainer.resolve(IGitDefaultBranchNameApplicationService_1.IGitDefaultBranchNameApplicationService);
var gitDefaultBranchName = gitDefaultBranchNameApplicationService.getGitDefaultBranchName();
console.log(gitDefaultBranchName);
//# sourceMappingURL=app.js.map