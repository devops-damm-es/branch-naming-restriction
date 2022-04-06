import { Inject } from "typescript-ioc";
import { IGitPushBranchNameDomainService } from "../../../Domain/Services/Core/IGitPushBranchNameDomainService";
import { IGitPushBranchNameApplicationService } from "../IGitPushBranchNameApplicationService";

export class GitPushBranchNameApplicationService implements IGitPushBranchNameApplicationService {

    private gitPushBranchNameDomainService: IGitPushBranchNameDomainService;

    constructor(@Inject gitPushBranchNameDomainService: IGitPushBranchNameDomainService) {
        this.gitPushBranchNameDomainService = gitPushBranchNameDomainService;
    }

    getGitPushBranchName(): String {
        return this.gitPushBranchNameDomainService.getRepositoryService().getGitPushBranchName();
    }

}