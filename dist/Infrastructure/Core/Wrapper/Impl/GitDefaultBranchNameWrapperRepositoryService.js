"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitDefaultBranchNameWrapperRepositoryService = void 0;
const core = require("@actions/core");
class GitDefaultBranchNameWrapperRepositoryService {
    getGitDefaultBranchName() {
        try {
            const defaultBranchName = core.getInput("default-branch-name");
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