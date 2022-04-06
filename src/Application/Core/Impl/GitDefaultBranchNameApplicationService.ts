import { Inject } from "typescript-ioc";
import { IGitDefaultBranchNameDomainService } from "../../../Domain/Services/Core/IGitDefaultBranchNameDomainService";
import { IGitDefaultBranchNameApplicationService } from "../IGitDefaultBranchNameApplicationService";

export class GitDefaultBranchNameApplicationService implements IGitDefaultBranchNameApplicationService {

    private gitDefaultBranchNameDomainService: IGitDefaultBranchNameDomainService;

    constructor(@Inject gitDefaultBranchNameDomainService: IGitDefaultBranchNameDomainService) {
        this.gitDefaultBranchNameDomainService = gitDefaultBranchNameDomainService;
    }

    getGitDefaultBranchName(): String {
        return this.gitDefaultBranchNameDomainService.getRepositoryService().getGitDefaultBranchName();
    }

}