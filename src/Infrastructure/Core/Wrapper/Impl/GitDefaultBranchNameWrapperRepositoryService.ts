import { IGitDefaultBranchNameWrapperRepositoryService } from '../IGitDefaultBranchNameWrapperRepositoryService';

export class GitDefaultBranchNameWrapperRepositoryService implements IGitDefaultBranchNameWrapperRepositoryService {
    getGitDefaultBranchName(): String | null {
        try {
            const defaultBranchName = process.env.DEFAULT_BRANCH_NAME;
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