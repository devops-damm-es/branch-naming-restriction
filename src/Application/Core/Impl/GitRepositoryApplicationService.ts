import { Inject } from "typescript-ioc";
import { GitRepository } from "../../../Domain/Entities/GitRepository";
import { IGitRepositoryDomainService } from "../../../Domain/Services/Core/IGitRepositoryDomainService";
import { IGitRepositoryApplicationService } from "../IGitRepositoryApplicationService";

export class GitRepositoryApplicationService implements IGitRepositoryApplicationService {

    private gitRepositoryDomainService: IGitRepositoryDomainService;

    constructor(@Inject gitRepositoryDomainService: IGitRepositoryDomainService) {
        this.gitRepositoryDomainService = gitRepositoryDomainService;
    }

    getGitRepository(): GitRepository {
        return this.gitRepositoryDomainService.getRepositoryService().getGitRepository();
    }
}