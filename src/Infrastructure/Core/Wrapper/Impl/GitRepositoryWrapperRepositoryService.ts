import * as github from '@actions/github';
import { GitRepository } from '../../../../Domain/Entities/GitRepository';
import { IGitRepositoryWrapperRepositoryService } from "../IGitRepositoryWrapperRepositoryService";

export class GitRepositoryWrapperRepositoryService implements IGitRepositoryWrapperRepositoryService {
    getGitRepository(): GitRepository | null {
        try {
            var owner = github.context.repo.owner;
            var name = github.context.repo.repo;
            if (owner != null && owner.length > 0 && name != null && name.length > 0) {
                return new GitRepository(owner, name);
            }
            else {
                return null;
            }
        } catch {
            return null;
        }
    }
}