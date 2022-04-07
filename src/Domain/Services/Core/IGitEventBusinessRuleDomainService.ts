import { GitEventTypeEnum } from "../../Enums/GitEventTypeEnum";

export abstract class IGitEventBusinessRuleDomainService {
    abstract isAllowedGitEventType(gitEventType: GitEventTypeEnum): Boolean;
}