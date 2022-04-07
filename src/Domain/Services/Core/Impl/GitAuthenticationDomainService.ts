import { Inject } from "typescript-ioc";
import { IGitAuthenticationRepositoryService } from "../../../../Infrastructure/Core/IGitAuthenticationRepositoryService";
import { IGitAuthenticationDomainService } from "../IGitAuthenticationDomainService";

export class GitAuthenticationDomainService implements IGitAuthenticationDomainService {

    private gitAuthenticationRepositoryService: IGitAuthenticationRepositoryService;

    constructor(@Inject gitAuthenticationRepositoryService: IGitAuthenticationRepositoryService) {
        this.gitAuthenticationRepositoryService = gitAuthenticationRepositoryService;
    }

    getRepositoryService(): IGitAuthenticationRepositoryService {
        return this.gitAuthenticationRepositoryService;
    }
}