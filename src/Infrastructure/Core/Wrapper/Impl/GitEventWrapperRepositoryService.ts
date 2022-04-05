import { GitEventTypeEnum } from "../../../../Domain/Enums/GitEventTypeEnum";
import { IGitEventWrapperRepositoryService } from "../IGitEventWrapperRepositoryService";

export class GitEventWrapperRepositoryService implements IGitEventWrapperRepositoryService {
    getGitEventType(): GitEventTypeEnum {
        return GitEventTypeEnum.Push;
    }
}