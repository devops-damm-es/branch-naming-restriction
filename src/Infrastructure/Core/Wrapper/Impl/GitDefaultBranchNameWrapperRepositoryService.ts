import * as core from '@actions/core';
import { IGitDefaultBranchNameWrapperRepositoryService } from '../IGitDefaultBranchNameWrapperRepositoryService';

export class GitDefaultBranchNameWrapperRepositoryService implements IGitDefaultBranchNameWrapperRepositoryService {
    getGitDefaultBranchName(): String | null {
        try {
            const defaultBranchName = core.getInput("default-branch-name");
            console.log("default-branch-name: " + defaultBranchName);
            if (defaultBranchName != null && defaultBranchName.length > 0) {
                return defaultBranchName;
            } else {
                return null;
            }
        } catch {
            return null;
        }
    }
}