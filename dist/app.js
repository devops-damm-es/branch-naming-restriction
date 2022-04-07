"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IActionResultApplicationService_1 = require("./Application/Core/IActionResultApplicationService");
const IGitAuthenticationApplicationService_1 = require("./Application/Core/IGitAuthenticationApplicationService");
const IGitDefaultBranchNameApplicationService_1 = require("./Application/Core/IGitDefaultBranchNameApplicationService");
const IGitEventApplicationService_1 = require("./Application/Core/IGitEventApplicationService");
const IGitPushBranchNameApplicationService_1 = require("./Application/Core/IGitPushBranchNameApplicationService");
const IGitRepositoryApplicationService_1 = require("./Application/Core/IGitRepositoryApplicationService");
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
let gitAuthenticationApplicationService = Container_1.IoCContainer.resolve(IGitAuthenticationApplicationService_1.IGitAuthenticationApplicationService);
var gitAuthentication = gitAuthenticationApplicationService.getGitAuthentication();
console.log("Git Authentication: " + gitAuthentication.token);
let gitRepositoryApplicationService = Container_1.IoCContainer.resolve(IGitRepositoryApplicationService_1.IGitRepositoryApplicationService);
var gitRepository = gitRepositoryApplicationService.getGitRepository();
console.log("Git Repository owner: " + gitRepository.owner);
console.log("Git Repository name: " + gitRepository.name);
//# sourceMappingURL=app.js.map