import { IActionResultApplicationService } from "./Application/Core/IActionResultApplicationService";
import { IGitAuthenticationApplicationService } from "./Application/Core/IGitAuthenticationApplicationService";
import { IGitDefaultBranchNameApplicationService } from "./Application/Core/IGitDefaultBranchNameApplicationService";
import { IGitEventApplicationService } from "./Application/Core/IGitEventApplicationService";
import { IGitPushBranchNameApplicationService } from "./Application/Core/IGitPushBranchNameApplicationService";
import { IGitRepositoryApplicationService } from "./Application/Core/IGitRepositoryApplicationService";
import { IoCContainer } from "./Crosscutting/Container";
import { GitEventTypeEnum } from "./Domain/Enums/GitEventTypeEnum";
import { IGitBranchBusinessRuleDomainService } from "./Domain/Services/Core/IGitBranchBusinessRuleDomainService";
import { IGitEventBusinessRuleDomainService } from "./Domain/Services/Core/IGitEventBusinessRuleDomainService";

let gitEventApplicationService = IoCContainer.resolve(IGitEventApplicationService);
var gitEventType = gitEventApplicationService.getGitEventType();

if (gitEventType == GitEventTypeEnum.Push) {
    console.log("Branch naming restriction: Push event");
} else if (gitEventType == GitEventTypeEnum.PullRequest) {
    console.log("Branch naming restriction: Pull request event");
}

let gitEventBusinessRuleDomainService = IoCContainer.resolve(IGitEventBusinessRuleDomainService);
var isAllowedGitEventType = gitEventBusinessRuleDomainService.isAllowedGitEventType(gitEventType);
console.log("Is allowed event type: " + isAllowedGitEventType.toString());

let gitDefaultBranchNameApplicationService = IoCContainer.resolve(IGitDefaultBranchNameApplicationService);
var gitDefaultBranchName = gitDefaultBranchNameApplicationService.getGitDefaultBranchName();
console.log("Default branch name: " + gitDefaultBranchName);

let gitPushBranchNameApplicationService = IoCContainer.resolve(IGitPushBranchNameApplicationService);
var gitPushBranchName = gitPushBranchNameApplicationService.getGitPushBranchName();
console.log("Push branch name: " + gitPushBranchName);

let gitBranchBusinessRuleDomainService = IoCContainer.resolve(IGitBranchBusinessRuleDomainService);
var isAllowedGitBranch = gitBranchBusinessRuleDomainService.isAllowedGitBranch(gitPushBranchName, gitDefaultBranchName);
console.log("Is allowed git granch: " + isAllowedGitBranch.toString());

let gitAuthenticationApplicationService = IoCContainer.resolve(IGitAuthenticationApplicationService);
var gitAuthentication = gitAuthenticationApplicationService.getGitAuthentication();
console.log("Git Authentication: " + gitAuthentication.token);

let gitRepositoryApplicationService = IoCContainer.resolve(IGitRepositoryApplicationService);
var gitRepository = gitRepositoryApplicationService.getGitRepository();
console.log("Git Repository owner: " + gitRepository.owner);
console.log("Git Repository name: " + gitRepository.name);

let actionResultApplicationService = IoCContainer.resolve(IActionResultApplicationService);
actionResultApplicationService.setActionResult(true);

