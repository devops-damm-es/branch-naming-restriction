import { Inject } from "typescript-ioc";
import { IActionResultRepositoryService } from "../IActionResultRepositoryService";
import { IActionResultWrapperRepositoryService } from "../Wrapper/IActionResultWrapperRepositoryService";

export class ActionResultRepositoryService implements IActionResultRepositoryService {

    private actionResultWrapperRepositoryService: IActionResultWrapperRepositoryService;

    constructor(@Inject actionResultWrapperRepositoryService: IActionResultWrapperRepositoryService) {
        this.actionResultWrapperRepositoryService = actionResultWrapperRepositoryService;
    }

    setActionResult(success: Boolean, message: String) {
        this.actionResultWrapperRepositoryService.setActionResult(success, message);
    }
}