"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionResultWrapperRepositoryService = void 0;
const core = require("@actions/core");
class ActionResultWrapperRepositoryService {
    setActionResult(success, message) {
        try {
            core.setOutput("branch_naming_allowed", success);
            if (success == true) {
                core.info(message);
            }
            else {
                core.setFailed(message);
            }
        }
        catch (_a) { }
    }
}
exports.ActionResultWrapperRepositoryService = ActionResultWrapperRepositoryService;
//# sourceMappingURL=ActionResultWrapperRepositoryService.js.map