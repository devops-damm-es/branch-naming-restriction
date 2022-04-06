import { Inject } from "typescript-ioc";
import { IActionResultDomainService } from "../../../Domain/Services/Core/IActionResultDomainService";
import { IActionResultApplicationService } from "../IActionResultApplicationService";

export class ActionResultApplicationService implements IActionResultApplicationService {

    private actionResultDomainService: IActionResultDomainService;

    constructor(@Inject actionResultDomainService: IActionResultDomainService) {
        this.actionResultDomainService = actionResultDomainService;
    }

    setActionResult(success: Boolean) {
        this.actionResultDomainService.getRepositoryService().setActionResult(success);
    }
}