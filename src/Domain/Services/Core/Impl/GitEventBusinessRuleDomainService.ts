import { GitEventTypeEnum } from "../../../Enums/GitEventTypeEnum";
import { IGitEventBusinessRuleDomainService } from "../IGitEventBusinessRuleDomainService";

export class GitEventBusinessRuleDomainService implements IGitEventBusinessRuleDomainService {
    isAllowedGitEventType(gitEventType: GitEventTypeEnum): Boolean {
        return gitEventType == GitEventTypeEnum.Push;
    }
}