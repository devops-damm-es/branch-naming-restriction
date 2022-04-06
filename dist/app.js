"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IActionResultApplicationService_1 = require("./Application/Core/IActionResultApplicationService");
const IGitDefaultBranchNameApplicationService_1 = require("./Application/Core/IGitDefaultBranchNameApplicationService");
const IGitEventApplicationService_1 = require("./Application/Core/IGitEventApplicationService");
const IGitPushBranchNameApplicationService_1 = require("./Application/Core/IGitPushBranchNameApplicationService");
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
console.log("Default branch name: " + gitDefaultBranchName);
let gitPushBranchNameApplicationService = Container_1.IoCContainer.resolve(IGitPushBranchNameApplicationService_1.IGitPushBranchNameApplicationService);
var gitPushBranchName = gitPushBranchNameApplicationService.getGitPushBranchName();
console.log("Push branch name: " + gitPushBranchName);
let actionResultApplicationService = Container_1.IoCContainer.resolve(IActionResultApplicationService_1.IActionResultApplicationService);
actionResultApplicationService.setActionResult(true);
//# sourceMappingURL=app.js.map