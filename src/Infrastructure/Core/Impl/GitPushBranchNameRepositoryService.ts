import { Inject } from "typescript-ioc";
import { IGitPushBranchNameRepositoryService } from "../IGitPushBranchNameRepositoryService";
import { IGitPushBranchNameWrapperRepositoryService } from "../Wrapper/IGitPushBranchNameWrapperRepositoryService";

export class GitPushBranchNameRepositoryService implements IGitPushBranchNameRepositoryService {

    private gitPushBranchNameWrapperRepositoryService: IGitPushBranchNameWrapperRepositoryService;

    constructor(@Inject gitPushBranchNameWrapperRepositoryService: IGitPushBranchNameWrapperRepositoryService) {
        this.gitPushBranchNameWrapperRepositoryService = gitPushBranchNameWrapperRepositoryService;
    }

    getGitPushBranchName(): String {
        var gitPushBranchName = this.gitPushBranchNameWrapperRepositoryService.getGitPushBranchName();
        if (gitPushBranchName != null) {
            return gitPushBranchName;
        } else {
            throw new Error("Invalid git push branch name");
        }
    }
}