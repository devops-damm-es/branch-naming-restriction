import { GitAuthentication } from "../../Domain/Entities/GitAuthentication";

export abstract class IGitAuthenticationApplicationService {
    abstract getGitAuthentication(): GitAuthentication;
}