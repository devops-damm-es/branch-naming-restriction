import { GitAuthentication } from "../../../Domain/Entities/GitAuthentication";
import { GitRepository } from "../../../Domain/Entities/GitRepository";

export abstract class IGitBranchWrapperRepositoryService {
    abstract deleteGitBranch(branchName: String, gitRepository: GitRepository, gitAuthentication: GitAuthentication): Promise<Boolean>;
}