import { IGitRepositoryRepositoryService } from "../../../Infrastructure/Core/IGitRepositoryRepositoryService";

export abstract class IGitRepositoryDomainService {
    abstract getRepositoryService(): IGitRepositoryRepositoryService;
}