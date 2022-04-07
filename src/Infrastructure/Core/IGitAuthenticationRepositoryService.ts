import { GitAuthentication } from "../../Domain/Entities/GitAuthentication";

export abstract class IGitAuthenticationRepositoryService {
    abstract getGitAuthentication(): GitAuthentication;
}