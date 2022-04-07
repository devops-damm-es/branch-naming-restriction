"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitRepositoryWrapperRepositoryService = void 0;
const github = require("@actions/github");
const GitRepository_1 = require("../../../../Domain/Entities/GitRepository");
class GitRepositoryWrapperRepositoryService {
    getGitRepository() {
        try {
            var owner = github.context.repo.owner;
            var name = github.context.repo.repo;
            if (owner != null && owner.length > 0 && name != null && name.length > 0) {
                return new GitRepository_1.GitRepository(owner, name);
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
exports.GitRepositoryWrapperRepositoryService = GitRepositoryWrapperRepositoryService;
//# sourceMappingURL=GitRepositoryWrapperRepositoryService.js.map