import { IGitDefaultBranchNameRepositoryService } from "../../../Infrastructure/Core/IGitDefaultBranchNameRepositoryService";

export abstract class IGitDefaultBranchNameDomainService {
    abstract getRepositoryService(): IGitDefaultBranchNameRepositoryService;
}