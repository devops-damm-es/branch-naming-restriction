import { IGitBranchBusinessRuleDomainService } from "../IGitBranchBusinessRuleDomainService";

export class GitBranchBusinessRuleDomainService implements IGitBranchBusinessRuleDomainService {
    isAllowedGitBranch(branchName: String, defaultBranchName: String): Boolean {
        const regex = RegExp("(^" + defaultBranchName + "$)|(^develop$)|(^feature\/.*)|(^release\/.*)|(^hotfix\/.*)");
        return regex.test(branchName as string);
    }

    isGitBranchNeedsToBeRenamed(branchName: String): Boolean {
        const regex = RegExp("^develop..*");
        return regex.test(branchName as string);
    }

    getRandomBranchNameToDelete(): String {
        var timestamp = new Date().getTime().toString();
        return "branchtodelete" + "_" + timestamp;
    }
}