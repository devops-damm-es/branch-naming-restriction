"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitEventBusinessRuleDomainService = void 0;
const GitEventTypeEnum_1 = require("../../../Enums/GitEventTypeEnum");
class GitEventBusinessRuleDomainService {
    isAllowedGitEventType(gitEventType) {
        return gitEventType == GitEventTypeEnum_1.GitEventTypeEnum.Push;
    }
}
exports.GitEventBusinessRuleDomainService = GitEventBusinessRuleDomainService;
//# sourceMappingURL=GitEventBusinessRuleDomainService.js.map