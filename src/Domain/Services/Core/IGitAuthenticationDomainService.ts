import { IGitAuthenticationRepositoryService } from "../../../Infrastructure/Core/IGitAuthenticationRepositoryService";

export abstract class IGitAuthenticationDomainService {
    abstract getRepositoryService(): IGitAuthenticationRepositoryService;
}