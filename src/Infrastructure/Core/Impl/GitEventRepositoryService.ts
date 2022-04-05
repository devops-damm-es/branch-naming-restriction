import { Inject } from "typescript-ioc";
import { GitEventTypeEnum } from "../../../Domain/Enums/GitEventTypeEnum";
import { IGitEventRepositoryService } from "../IGitEventRepositoryService";
import { IGitEventWrapperRepositoryService } from "../Wrapper/IGitEventWrapperRepositoryService";

export class GitEventRepositoryService implements IGitEventRepositoryService {

    private gitEventWrapperRepositoryService: IGitEventWrapperRepositoryService;

    constructor(@Inject gitEventWrapperRepositoryService: IGitEventWrapperRepositoryService) {
        this.gitEventWrapperRepositoryService = gitEventWrapperRepositoryService;
    }

    getGitEventType(): GitEventTypeEnum {
        return this.gitEventWrapperRepositoryService.getGitEventType();
    }
}