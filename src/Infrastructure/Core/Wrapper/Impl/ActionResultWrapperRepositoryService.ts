import * as core from '@actions/core';
import { IActionResultWrapperRepositoryService } from "../IActionResultWrapperRepositoryService";

export class ActionResultWrapperRepositoryService implements IActionResultWrapperRepositoryService {
    setActionResult(success: Boolean) {
        try {
            core.setOutput("branch_naming_allowed", success);
        } catch { }
    }
}