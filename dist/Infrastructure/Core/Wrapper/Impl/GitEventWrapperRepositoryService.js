"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitEventWrapperRepositoryService = void 0;
const github = require("@actions/github");
const GitEventTypeEnum_1 = require("../../../../Domain/Enums/GitEventTypeEnum");
class GitEventWrapperRepositoryService {
    getGitEventType() {
        try {
            var githubEventName = github.context.eventName;
            if (githubEventName == "push") {
                return GitEventTypeEnum_1.GitEventTypeEnum.Push;
            }
            else if (githubEventName == "pull_request") {
                return GitEventTypeEnum_1.GitEventTypeEnum.PullRequest;
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
exports.GitEventWrapperRepositoryService = GitEventWrapperRepositoryService;
//# sourceMappingURL=GitEventWrapperRepositoryService.js.map