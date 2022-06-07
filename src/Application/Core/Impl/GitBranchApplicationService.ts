import { Inject } from "typescript-ioc";
import { GitAuthentication } from "../../../Domain/Entities/GitAuthentication";
import { GitRepository } from "../../../Domain/Entities/GitRepository";
import { IGitBranchDomainService } from "../../../Domain/Services/Core/IGitBranchDomainService";
import { IGitBranchApplicationService } from "../IGitBranchApplicationService";

export class GitBranchApplicationService implements IGitBranchApplicationService {

    private gitBranchDomainService: IGitBranchDomainService;

    constructor(@Inject gitBranchDomainService: IGitBranchDomainService) {
        this.gitBranchDomainService = gitBranchDomainService;
    }

    async deleteGitBranch(
        branchName: String,
        gitRepository: GitRepository,
        gitAuthentication: GitAuthentication): Promise<Boolean> {
        return this.gitBranchDomainService.getRepositoryService().deleteGitBranch(branchName, gitRepository, gitAuthentication);
    }

    async renameGitBranch(
        branchName: String,
        newBranchName: String,
        gitRepository: GitRepository,
        gitAuthentication: GitAuthentication): Promise<Boolean> {
        return this.gitBranchDomainService.getRepositoryService().renameGitBranch(branchName, newBranchName, gitRepository, gitAuthentication);
    }
}