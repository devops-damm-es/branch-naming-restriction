export abstract class IGitBranchBusinessRuleDomainService {
    abstract isAllowedGitBranch(branchName: String, defaultBranchName: String): Boolean;
}