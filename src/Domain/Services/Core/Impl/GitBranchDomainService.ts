import { Inject } from "typescript-ioc";
import { IGitBranchRepositoryService } from "../../../../Infrastructure/Core/IGitBranchRepositoryService";
import { IGitBranchDomainService } from "../IGitBranchDomainService";

export class GitBranchDomainService implements IGitBranchDomainService {

    private gitBranchRepositoryService: IGitBranchRepositoryService;

    constructor(@Inject gitBranchRepositoryService: IGitBranchRepositoryService) {
        this.gitBranchRepositoryService = gitBranchRepositoryService;
    }

    getRepositoryService(): IGitBranchRepositoryService {
        return this.gitBranchRepositoryService;
    }
}