import { GitAuthentication } from "../../../Domain/Entities/GitAuthentication";

export abstract class IGitAuthenticationWrapperRepositoryService {
    abstract getGitAuthentication(): GitAuthentication | null;
}