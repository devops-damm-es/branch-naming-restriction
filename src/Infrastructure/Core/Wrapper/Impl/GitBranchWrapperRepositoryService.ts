import * as github from '@actions/github';
import { GitAuthentication } from '../../../../Domain/Entities/GitAuthentication';
import { GitRepository } from '../../../../Domain/Entities/GitRepository';
import { IGitBranchWrapperRepositoryService } from "../IGitBranchWrapperRepositoryService";

export class GitBranchWrapperRepositoryService implements IGitBranchWrapperRepositoryService {
    async deleteGitBranch(branchName: String, gitRepository: GitRepository, gitAuthentication: GitAuthentication): Promise<Boolean> {
        return new Promise<Boolean>(function (resolve, reject) {
            try {
                const client = github.getOctokit(gitAuthentication.token as string);
                client.git.deleteRef({
                    owner: gitRepository.owner as string,
                    repo: gitRepository.name as string,
                    ref: "heads/" + branchName
                })
                    .then(_ => { resolve(true); })
                    .catch(reason => {
                        console.log("ERROR (fluent): " + reason);
                        reject(false);
                    })
            } catch (ex) {
                console.log("ERROR: " + ex);
                reject(false);
            }
        });
    }
}