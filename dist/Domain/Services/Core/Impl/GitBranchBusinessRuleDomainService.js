"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitBranchBusinessRuleDomainService = void 0;
class GitBranchBusinessRuleDomainService {
    isAllowedGitBranch(branchName, defaultBranchName) {
        const regex = RegExp("(^" + defaultBranchName + "$)|(^develop$)|(^feature\/.*)|(^release\/.*)|(^hotfix\/.*)");
        return regex.test(branchName);
    }
    isGitBranchNeedsToBeRenamed(branchName) {
        const regex = RegExp("^develop..*");
        return regex.test(branchName);
    }
    getRandomBranchNameToDelete() {
        var timestamp = new Date().getTime().toString();
        return "branchtodelete" + "_" + timestamp;
    }
}
exports.GitBranchBusinessRuleDomainService = GitBranchBusinessRuleDomainService;
//# sourceMappingURL=GitBranchBusinessRuleDomainService.js.map