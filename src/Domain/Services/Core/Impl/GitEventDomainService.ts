import { Inject } from "typescript-ioc";
import { IGitEventRepositoryService } from "../../../../Infrastructure/Core/IGitEventRepositoryService";
import { IGitEventDomainService } from "../IGitEventDomainService";

export class GitEventDomainService implements IGitEventDomainService {

    private gitEventRepositoryService: IGitEventRepositoryService;

    constructor(@Inject gitEventRepositoryService: IGitEventRepositoryService) {
        this.gitEventRepositoryService = gitEventRepositoryService;
    }

    getRepositoryService(): IGitEventRepositoryService {
        return this.gitEventRepositoryService;
    }
}