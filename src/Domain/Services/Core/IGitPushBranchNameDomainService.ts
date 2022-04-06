import { IGitPushBranchNameRepositoryService } from "../../../Infrastructure/Core/IGitPushBranchNameRepositoryService";

export abstract class IGitPushBranchNameDomainService {
    abstract getRepositoryService(): IGitPushBranchNameRepositoryService;
}