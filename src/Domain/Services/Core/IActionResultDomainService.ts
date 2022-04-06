import { IActionResultRepositoryService } from "../../../Infrastructure/Core/IActionResultRepositoryService";

export abstract class IActionResultDomainService {
    abstract getRepositoryService(): IActionResultRepositoryService;
}