"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitBranchBusinessRuleDomainService = void 0;
class GitBranchBusinessRuleDomainService {
    isAllowedGitBranch(branchName, defaultBranchName) {
        const regex = RegExp("(^" + defaultBranchName + "$)|(^develop$)|(^feature\/.*)|(^release\/.*)|(^hotfix\/.*)");
        return regex.test(branchName);
    }
}
exports.GitBranchBusinessRuleDomainService = GitBranchBusinessRuleDomainService;
//# sourceMappingURL=GitBranchBusinessRuleDomainService.js.map