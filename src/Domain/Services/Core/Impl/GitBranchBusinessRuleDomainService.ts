import { IGitBranchBusinessRuleDomainService } from "../IGitBranchBusinessRuleDomainService";

export class GitBranchBusinessRuleDomainService implements IGitBranchBusinessRuleDomainService {
    isAllowedGitBranch(branchName: String, defaultBranchName: String): Boolean {
        const regex = RegExp("(^" + defaultBranchName + "$)|(^develop$)|(^feature\/.*)|(^release\/.*)|(^hotfix\/.*)");
        return regex.test(branchName as string);
    }
}