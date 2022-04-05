import { GitEventTypeEnum } from "../../Domain/Enums/GitEventTypeEnum";

export abstract class IGitEventRepositoryService {
    abstract getGitEventType(): GitEventTypeEnum;
}