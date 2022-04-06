import * as github from '@actions/github';
import { IGitPushBranchNameWrapperRepositoryService } from '../IGitPushBranchNameWrapperRepositoryService';

export class GitPushBranchNameWrapperRepositoryService implements IGitPushBranchNameWrapperRepositoryService {
    getGitPushBranchName(): String | null {
        try {
            const pushBranchName = github.context.payload.ref.replace('refs/heads/', '');
            if (pushBranchName != null && pushBranchName.length > 0) {
                return pushBranchName;
            } else {
                return null;
            }
        } catch {
            return null;
        }
    }
}