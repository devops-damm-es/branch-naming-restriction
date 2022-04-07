import { Inject } from "typescript-ioc";
import { IGitRepositoryRepositoryService } from "../../../../Infrastructure/Core/IGitRepositoryRepositoryService";
import { IGitRepositoryDomainService } from "../IGitRepositoryDomainService";

export class GitRepositoryDomainService implements IGitRepositoryDomainService {

    private gitRepositoryRepositoryService: IGitRepositoryRepositoryService;

    constructor(@Inject gitRepositoryRepositoryService: IGitRepositoryRepositoryService) {
        this.gitRepositoryRepositoryService = gitRepositoryRepositoryService;
    }

    getRepositoryService(): IGitRepositoryRepositoryService {
        return this.gitRepositoryRepositoryService;
    }
}