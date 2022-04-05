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
        var gitEventType = this.gitEventWrapperRepositoryService.getGitEventType();
        if (gitEventType != null) {
            return gitEventType;
        } else {
            throw new Error("Invalid git event type");
        }
    }
}