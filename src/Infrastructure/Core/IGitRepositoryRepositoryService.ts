import { GitRepository } from "../../Domain/Entities/GitRepository";

export abstract class IGitRepositoryRepositoryService {
    abstract getGitRepository(): GitRepository;
}