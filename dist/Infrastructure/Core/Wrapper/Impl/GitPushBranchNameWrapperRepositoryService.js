"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitPushBranchNameWrapperRepositoryService = void 0;
const github = require("@actions/github");
class GitPushBranchNameWrapperRepositoryService {
    getGitPushBranchName() {
        try {
            const pushBranchName = github.context.payload.ref.replace('refs/heads/', '');
            if (pushBranchName != null && pushBranchName.length > 0) {
                return pushBranchName;
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
exports.GitPushBranchNameWrapperRepositoryService = GitPushBranchNameWrapperRepositoryService;
//# sourceMappingURL=GitPushBranchNameWrapperRepositoryService.js.map