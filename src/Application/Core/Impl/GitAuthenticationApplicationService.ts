import { Inject } from "typescript-ioc";
import { GitAuthentication } from "../../../Domain/Entities/GitAuthentication";
import { IGitAuthenticationDomainService } from "../../../Domain/Services/Core/IGitAuthenticationDomainService";
import { IGitAuthenticationApplicationService } from "../IGitAuthenticationApplicationService";

export class GitAuthenticationApplicationService implements IGitAuthenticationApplicationService {

    private gitAuthenticationDomainService: IGitAuthenticationDomainService;

    constructor(@Inject gitAuthenticationDomainService: IGitAuthenticationDomainService) {
        this.gitAuthenticationDomainService = gitAuthenticationDomainService;
    }

    getGitAuthentication(): GitAuthentication {
        return this.gitAuthenticationDomainService.getRepositoryService().getGitAuthentication();
    }
}