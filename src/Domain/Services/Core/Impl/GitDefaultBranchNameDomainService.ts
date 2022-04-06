import { Inject } from "typescript-ioc";
import { IGitDefaultBranchNameRepositoryService } from "../../../../Infrastructure/Core/IGitDefaultBranchNameRepositoryService";
import { IGitDefaultBranchNameDomainService } from "../IGitDefaultBranchNameDomainService";

export class GitDefaultBranchNameDomainService implements IGitDefaultBranchNameDomainService {

    private gitDefaultBranchNameRepositoryService: IGitDefaultBranchNameRepositoryService;

    constructor(@Inject gitDefaultBranchNameRepositoryService: IGitDefaultBranchNameRepositoryService) {
        this.gitDefaultBranchNameRepositoryService = gitDefaultBranchNameRepositoryService;
    }

    getRepositoryService(): IGitDefaultBranchNameRepositoryService {
        return this.gitDefaultBranchNameRepositoryService;
    }
}