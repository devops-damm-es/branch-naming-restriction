import * as github from '@actions/github';
import { GitEventTypeEnum } from "../../../../Domain/Enums/GitEventTypeEnum";
import { IGitEventWrapperRepositoryService } from "../IGitEventWrapperRepositoryService";

export class GitEventWrapperRepositoryService implements IGitEventWrapperRepositoryService {
    getGitEventType(): GitEventTypeEnum | null {
        try {
            var githubEventName = github.context.eventName;
            if (githubEventName == "push") {
                return GitEventTypeEnum.Push;
            }
            else if (githubEventName == "pull_request") {
                return GitEventTypeEnum.PullRequest;
            } else {
                return null;
            }
        } catch {
            return null;
        }
    }
}