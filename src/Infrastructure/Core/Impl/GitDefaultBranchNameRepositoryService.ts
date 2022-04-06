import { Inject } from "typescript-ioc";
import { IGitDefaultBranchNameRepositoryService } from "../IGitDefaultBranchNameRepositoryService";
import { IGitDefaultBranchNameWrapperRepositoryService } from "../Wrapper/IGitDefaultBranchNameWrapperRepositoryService";

export class GitDefaultBranchNameRepositoryService implements IGitDefaultBranchNameRepositoryService {

    private gitDefaultBranchNameWrapperRepositoryService: IGitDefaultBranchNameWrapperRepositoryService;

    constructor(@Inject gitDefaultBranchNameWrapperRepositoryService: IGitDefaultBranchNameWrapperRepositoryService) {
        this.gitDefaultBranchNameWrapperRepositoryService = gitDefaultBranchNameWrapperRepositoryService;
    }

    getGitDefaultBranchName(): String {
        var gitDefaultBranchName = this.gitDefaultBranchNameWrapperRepositoryService.getGitDefaultBranchName();
        if (gitDefaultBranchName != null) {
            return gitDefaultBranchName;
        } else {
            throw new Error("Invalid git default branch name");
        }
    }
}