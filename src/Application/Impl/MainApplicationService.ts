import { Inject } from "typescript-ioc";
import { GitAuthentication } from "../../Domain/Entities/GitAuthentication";
import { GitRepository } from "../../Domain/Entities/GitRepository";
import { IGitBranchBusinessRuleDomainService } from "../../Domain/Services/Core/IGitBranchBusinessRuleDomainService";
import { IGitEventBusinessRuleDomainService } from "../../Domain/Services/Core/IGitEventBusinessRuleDomainService";
import { IActionResultApplicationService } from "../Core/IActionResultApplicationService";
import { IGitAuthenticationApplicationService } from "../Core/IGitAuthenticationApplicationService";
import { IGitBranchApplicationService } from "../Core/IGitBranchApplicationService";
import { IGitDefaultBranchNameApplicationService } from "../Core/IGitDefaultBranchNameApplicationService";
import { IGitEventApplicationService } from "../Core/IGitEventApplicationService";
import { IGitPushBranchNameApplicationService } from "../Core/IGitPushBranchNameApplicationService";
import { IGitRepositoryApplicationService } from "../Core/IGitRepositoryApplicationService";
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
                if (this.gitBranchBusinessRuleDomainService.isGitBranchNeedsToBeRenamed(gitPushBranchName)) {
                    var randomBranchNameToDelete = this.gitBranchBusinessRuleDomainService.getRandomBranchNameToDelete();
                    this.gitBranchApplicationService.renameGitBranch(
                        gitPushBranchName,
                        randomBranchNameToDelete,
                        gitRepository,
                        gitAuthentication)
                        .then(_ => {
                            this._deleteGitBranch(randomBranchNameToDelete, gitRepository, gitAuthentication);
                        })
                        .catch(_ => {
                            this.actionResultApplicationService.setActionResult(false, "Branch name is not allowed: Error when rename for delete branch from repository");
                        });
                } else {
                    this._deleteGitBranch(gitPushBranchName, gitRepository, gitAuthentication);
                }
            }
        } else {
            this.actionResultApplicationService.setActionResult(false, "Git event type is not allowed");
        }
    }

    private async _deleteGitBranch(branchName: String, gitRepository: GitRepository, gitAuthentication: GitAuthentication) {

        this.gitBranchApplicationService.deleteGitBranch(
            branchName,
            gitRepository,
            gitAuthentication)
            .then(_ => {
                this.actionResultApplicationService.setActionResult(false, "Branch name is not allowed: Deleted from repository");
            })
            .catch(_ => {
                this.actionResultApplicationService.setActionResult(false, "Branch name is not allowed: Error when deleting from repository");
            });
    }
}