import { Inject } from "typescript-ioc";
import { GitAuthentication } from "../../../Domain/Entities/GitAuthentication";
import { GitRepository } from "../../../Domain/Entities/GitRepository";
import { IGitBranchRepositoryService } from "../IGitBranchRepositoryService";
import { IGitBranchWrapperRepositoryService } from "../Wrapper/IGitBranchWrapperRepositoryService";

export class GitBranchRepositoryService implements IGitBranchRepositoryService {

    private gitBranchWrapperRepositoryService: IGitBranchWrapperRepositoryService;

    constructor(@Inject gitBranchWrapperRepositoryService: IGitBranchWrapperRepositoryService) {
        this.gitBranchWrapperRepositoryService = gitBranchWrapperRepositoryService;
    }

    async deleteGitBranch(branchName: String, gitRepository: GitRepository, gitAuthentication: GitAuthentication): Promise<Boolean> {
        return this.gitBranchWrapperRepositoryService.deleteGitBranch(branchName, gitRepository, gitAuthentication);
    }
}