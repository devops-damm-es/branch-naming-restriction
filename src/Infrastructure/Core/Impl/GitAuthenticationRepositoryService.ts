import { Inject } from "typescript-ioc";
import { GitAuthentication } from "../../../Domain/Entities/GitAuthentication";
import { IGitAuthenticationRepositoryService } from "../IGitAuthenticationRepositoryService";
import { IGitAuthenticationWrapperRepositoryService } from "../Wrapper/IGitAuthenticationWrapperRepositoryService";

export class GitAuthenticationRepositoryService implements IGitAuthenticationRepositoryService {

    private gitAuthenticationWrapperRepositoryService: IGitAuthenticationWrapperRepositoryService;

    constructor(@Inject gitAuthenticationWrapperRepositoryService: IGitAuthenticationWrapperRepositoryService) {
        this.gitAuthenticationWrapperRepositoryService = gitAuthenticationWrapperRepositoryService;
    }

    getGitAuthentication(): GitAuthentication {
        var gitAuthentication = this.gitAuthenticationWrapperRepositoryService.getGitAuthentication();
        if (gitAuthentication != null) {
            return gitAuthentication;
        } else {
            throw new Error("Invalid git authentication");
        }
    }
}