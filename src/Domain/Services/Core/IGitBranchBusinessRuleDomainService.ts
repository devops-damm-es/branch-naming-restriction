export abstract class IGitBranchBusinessRuleDomainService {
    abstract isAllowedGitBranch(branchName: String, defaultBranchName: String): Boolean;
    abstract isGitBranchNeedsToBeRenamed(branchName: String): Boolean;
    abstract getRandomBranchNameToDelete(): String;
}