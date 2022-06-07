"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitAuthenticationWrapperRepositoryService = void 0;
const GitAuthentication_1 = require("../../../../Domain/Entities/GitAuthentication");
class GitAuthenticationWrapperRepositoryService {
    getGitAuthentication() {
        try {
            var token = process.env.ADMIN_PAT_TOKEN;
            if (token != null && token.length > 0) {
                return new GitAuthentication_1.GitAuthentication(token);
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
exports.GitAuthenticationWrapperRepositoryService = GitAuthenticationWrapperRepositoryService;
//# sourceMappingURL=GitAuthenticationWrapperRepositoryService.js.map