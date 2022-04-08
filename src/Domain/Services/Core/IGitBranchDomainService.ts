import { IGitBranchRepositoryService } from "../../../Infrastructure/Core/IGitBranchRepositoryService";

export abstract class IGitBranchDomainService {
    abstract getRepositoryService(): IGitBranchRepositoryService;
}