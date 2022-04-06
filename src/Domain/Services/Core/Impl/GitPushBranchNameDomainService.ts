import { Inject } from "typescript-ioc";
import { IGitPushBranchNameRepositoryService } from "../../../../Infrastructure/Core/IGitPushBranchNameRepositoryService";
import { IGitPushBranchNameDomainService } from "../IGitPushBranchNameDomainService";

export class GitPushBranchNameDomainService implements IGitPushBranchNameDomainService {

    private gitPushBranchNameRepositoryService: IGitPushBranchNameRepositoryService;

    constructor(@Inject gitPushBranchNameRepositoryService: IGitPushBranchNameRepositoryService) {
        this.gitPushBranchNameRepositoryService = gitPushBranchNameRepositoryService;
    }

    getRepositoryService(): IGitPushBranchNameRepositoryService {
        return this.gitPushBranchNameRepositoryService;
    }
}