import { GitEventTypeEnum } from "../../../Domain/Enums/GitEventTypeEnum";

export abstract class IGitEventWrapperRepositoryService {
    abstract getGitEventType(): GitEventTypeEnum;
}