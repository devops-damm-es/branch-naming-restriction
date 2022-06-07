import { GitAuthentication } from "../../Domain/Entities/GitAuthentication";
import { GitRepository } from "../../Domain/Entities/GitRepository";

export abstract class IGitBranchApplicationService {
    abstract deleteGitBranch(
        branchName: String,
        gitRepository: GitRepository,
        gitAuthentication: GitAuthentication): Promise<Boolean>;

    abstract renameGitBranch(
        branchName: String,
        newBranchName: String,
        gitRepository: GitRepository,
        gitAuthentication: GitAuthentication): Promise<Boolean>;
}