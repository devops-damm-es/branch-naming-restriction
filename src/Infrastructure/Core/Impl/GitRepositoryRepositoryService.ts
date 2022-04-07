import { Inject } from "typescript-ioc";
import { GitRepository } from "../../../Domain/Entities/GitRepository";
import { IGitRepositoryRepositoryService } from "../IGitRepositoryRepositoryService";
import { IGitRepositoryWrapperRepositoryService } from "../Wrapper/IGitRepositoryWrapperRepositoryService";

export class GitRepositoryRepositoryService implements IGitRepositoryRepositoryService {

    private gitRepositoryWrapperRepositoryService: IGitRepositoryWrapperRepositoryService;

    constructor(@Inject gitRepositoryWrapperRepositoryService: IGitRepositoryWrapperRepositoryService) {
        this.gitRepositoryWrapperRepositoryService = gitRepositoryWrapperRepositoryService;
    }

    getGitRepository(): GitRepository {
        var gitRepository = this.gitRepositoryWrapperRepositoryService.getGitRepository();
        if (gitRepository != null) {
            return gitRepository;
        } else {
            throw new Error("Invalid git repository");
        }
    }
}