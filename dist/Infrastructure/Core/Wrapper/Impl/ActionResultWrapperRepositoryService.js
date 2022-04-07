"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionResultWrapperRepositoryService = void 0;
const core = require("@actions/core");
class ActionResultWrapperRepositoryService {
    setActionResult(success) {
        try {
            var text = "branch_naming_allowed";
            core.setOutput(text, success);
            if (success == false) {
                core.setFailed(text + ": " + success.toString());
            }
        }
        catch (_a) { }
    }
}
exports.ActionResultWrapperRepositoryService = ActionResultWrapperRepositoryService;
//# sourceMappingURL=ActionResultWrapperRepositoryService.js.map