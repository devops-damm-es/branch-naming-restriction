import { Inject } from "typescript-ioc";
import { GitEventTypeEnum } from "../../../Domain/Enums/GitEventTypeEnum";
import { IGitEventDomainService } from "../../../Domain/Services/Core/IGitEventDomainService";
import { IGitEventApplicationService } from "../IGitEventApplicationService";

export class GitEventApplicationService implements IGitEventApplicationService {

    private gitEventDomainService: IGitEventDomainService;

    constructor(@Inject gitEventDomainService: IGitEventDomainService) {
        this.gitEventDomainService = gitEventDomainService;
    }

    getGitEventType(): GitEventTypeEnum {
        return this.gitEventDomainService.getRepositoryService().getGitEventType();
    }
}