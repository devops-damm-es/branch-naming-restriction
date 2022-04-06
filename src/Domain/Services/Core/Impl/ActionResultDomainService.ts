import { Inject } from "typescript-ioc";
import { IActionResultRepositoryService } from "../../../../Infrastructure/Core/IActionResultRepositoryService";
import { IActionResultDomainService } from "../IActionResultDomainService";

export class ActionResultDomainService implements IActionResultDomainService {

    private actionResultRepositoryService: IActionResultRepositoryService;

    constructor(@Inject actionResultRepositoryService: IActionResultRepositoryService) {
        this.actionResultRepositoryService = actionResultRepositoryService;
    }

    getRepositoryService(): IActionResultRepositoryService {
        return this.actionResultRepositoryService;
    }
}