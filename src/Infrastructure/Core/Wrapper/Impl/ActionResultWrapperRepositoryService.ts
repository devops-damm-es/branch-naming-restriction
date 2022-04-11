import * as core from '@actions/core';
import { IActionResultWrapperRepositoryService } from "../IActionResultWrapperRepositoryService";

export class ActionResultWrapperRepositoryService implements IActionResultWrapperRepositoryService {
    setActionResult(success: Boolean, message: String) {
        try {
            core.setOutput("branch_naming_allowed", success);
            if (success == true) {
                core.info(message as string);
            } else {
                core.setFailed(message as string);
            }
        } catch { }
    }
}