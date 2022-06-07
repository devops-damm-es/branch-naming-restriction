import { GitAuthentication } from "../../../../Domain/Entities/GitAuthentication";
import { IGitAuthenticationWrapperRepositoryService } from "../IGitAuthenticationWrapperRepositoryService";

export class GitAuthenticationWrapperRepositoryService implements IGitAuthenticationWrapperRepositoryService {
    getGitAuthentication(): GitAuthentication | null {
        try {
            var token = process.env.ADMIN_PAT_TOKEN;
            if (token != null && token.length > 0) {
                return new GitAuthentication(token);
            } else {
                return null;
            }
        } catch {
            return null;
        }
    }
}