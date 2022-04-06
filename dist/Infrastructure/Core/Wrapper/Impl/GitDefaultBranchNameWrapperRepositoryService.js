"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitDefaultBranchNameWrapperRepositoryService = void 0;
class GitDefaultBranchNameWrapperRepositoryService {
    getGitDefaultBranchName() {
        try {
            const defaultBranchName = process.env.DEFAULT_BRANCH_NAME;
            if (defaultBranchName != null && defaultBranchName.length > 0) {
                return defaultBranchName;
            }
            else {
                return null;
            }
        }
        catch (_a) {
            return null;
        }
    }
}
exports.GitDefaultBranchNameWrapperRepositoryService = GitDefaultBranchNameWrapperRepositoryService;
//# sourceMappingURL=GitDefaultBranchNameWrapperRepositoryService.js.map