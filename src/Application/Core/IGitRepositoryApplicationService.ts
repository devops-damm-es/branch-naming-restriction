import { GitRepository } from "../../Domain/Entities/GitRepository";

export abstract class IGitRepositoryApplicationService {
    abstract getGitRepository(): GitRepository;
}