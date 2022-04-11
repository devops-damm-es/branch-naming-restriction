import { Inject } from "typescript-ioc";
import { IGitBranchBusinessRuleDomainService } from "../../../Domain/Services/Core/IGitBranchBusinessRuleDomainService";
import { IGitEventBusinessRuleDomainService } from "../../../Domain/Services/Core/IGitEventBusinessRuleDomainService";
import { IActionResultApplicationService } from "../IActionResultApplicationService";
import { IGitAuthenticationApplicationService } from "../IGitAuthenticationApplicationService";
import { IGitBranchApplicationService } from "../IGitBranchApplicationService";
import { IGitDefaultBranchNameApplicationService } from "../IGitDefaultBranchNameApplicationService";
import { IGitEventApplicationService } from "../IGitEventApplicationService";
import { IGitPushBranchNameApplicationService } from "../IGitPushBranchNameApplicationService";
import { IGitRepositoryApplicationService } from "../IGitRepositoryApplicationService";
import { IMainApplicationService } from "../IMainApplicationService";

export class MainApplicationService implements IMainApplicationService {

    private gitEventApplicationService: IGitEventApplicationService;
    private gitEventBusinessRuleDomainService: IGitEventBusinessRuleDomainService;
    private gitDefaultBranchNameApplicationService: IGitDefaultBranchNameApplicationService;
    private gitPushBranchNameApplicationService: IGitPushBranchNameApplicationService;
    private gitBranchBusinessRuleDomainService: IGitBranchBusinessRuleDomainService;
    private gitAuthenticationApplicationService: IGitAuthenticationApplicationService;
    private gitRepositoryApplicationService: IGitRepositoryApplicationService;
    private gitBranchApplicationService: IGitBranchApplicationService;
    private actionResultApplicationService: IActionResultApplicationService;

    constructor(
        @Inject gitEventApplicationService: IGitEventApplicationService,
        @Inject gitEventBusinessRuleDomainService: IGitEventBusinessRuleDomainService,
        @Inject gitDefaultBranchNameApplicationService: IGitDefaultBranchNameApplicationService,
        @Inject gitPushBranchNameApplicationService: IGitPushBranchNameApplicationService,
        @Inject gitBranchBusinessRuleDomainService: IGitBranchBusinessRuleDomainService,
        @Inject gitAuthenticationApplicationService: IGitAuthenticationApplicationService,
        @Inject gitRepositoryApplicationService: IGitRepositoryApplicationService,
        @Inject gitBranchApplicationService: IGitBranchApplicationService,
        @Inject actionResultApplicationService: IActionResultApplicationService) {
        this.gitEventApplicationService = gitEventApplicationService;
        this.gitEventBusinessRuleDomainService = gitEventBusinessRuleDomainService;
        this.gitDefaultBranchNameApplicationService = gitDefaultBranchNameApplicationService;
        this.gitPushBranchNameApplicationService = gitPushBranchNameApplicationService;
        this.gitBranchBusinessRuleDomainService = gitBranchBusinessRuleDomainService;
        this.gitAuthenticationApplicationService = gitAuthenticationApplicationService;
        this.gitRepositoryApplicationService = gitRepositoryApplicationService;
        this.gitBranchApplicationService = gitBranchApplicationService;
        this.actionResultApplicationService = actionResultApplicationService;
    }

    async start() {
        var gitEventType = this.gitEventApplicationService.getGitEventType();
        if (this.gitEventBusinessRuleDomainService.isAllowedGitEventType(gitEventType)) {
            var gitDefaultBranchName = this.gitDefaultBranchNameApplicationService.getGitDefaultBranchName();
            var gitPushBranchName = this.gitPushBranchNameApplicationService.getGitPushBranchName();
            if (this.gitBranchBusinessRuleDomainService.isAllowedGitBranch(gitPushBranchName, gitDefaultBranchName)) {
                this.actionResultApplicationService.setActionResult(true, "Branch name is allowed");
            } else {
                var gitAuthentication = this.gitAuthenticationApplicationService.getGitAuthentication();
                var gitRepository = this.gitRepositoryApplicationService.getGitRepository();
                try {
                    await this.gitBranchApplicationService.deleteGitBranch(gitPushBranchName, gitRepository, gitAuthentication)
                    this.actionResultApplicationService.setActionResult(false, "Branch name is not allowed: Deleted from repository");
                }
                catch {
                    this.actionResultApplicationService.setActionResult(false, "Branch name is not allowed: Error when deleting from repository");
                }
            }
        } else {
            this.actionResultApplicationService.setActionResult(false, "Git event type is not allowed");
        }
    }
}