import { GitRepository } from "../../../Domain/Entities/GitRepository";

export abstract class IGitRepositoryWrapperRepositoryService {
    abstract getGitRepository(): GitRepository |null;
}