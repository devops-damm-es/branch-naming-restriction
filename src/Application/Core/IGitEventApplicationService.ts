import { GitEventTypeEnum } from "../../Domain/Enums/GitEventTypeEnum";

export abstract class IGitEventApplicationService {
    abstract getGitEventType(): GitEventTypeEnum;
}