import * as core from '@actions/core';
import { IActionResultWrapperRepositoryService } from "../IActionResultWrapperRepositoryService";

export class ActionResultWrapperRepositoryService implements IActionResultWrapperRepositoryService {
    setActionResult(success: Boolean) {
        try {
            var text = "branch_naming_allowed";
            core.setOutput(text, success);
            if (success == false) {
                core.setFailed(text + ": " + success.toString());
            }
        } catch { }
    }
}