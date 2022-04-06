"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionResultWrapperRepositoryService = void 0;
const core = require("@actions/core");
class ActionResultWrapperRepositoryService {
    setActionResult(success) {
        try {
            core.setOutput("branch-naming-allowed", success);
        }
        catch (_a) { }
    }
}
exports.ActionResultWrapperRepositoryService = ActionResultWrapperRepositoryService;
//# sourceMappingURL=ActionResultWrapperRepositoryService.js.map