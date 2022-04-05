import { IGitEventRepositoryService } from "../../../Infrastructure/Core/IGitEventRepositoryService";

export abstract class IGitEventDomainService {
    abstract getRepositoryService(): IGitEventRepositoryService;
}