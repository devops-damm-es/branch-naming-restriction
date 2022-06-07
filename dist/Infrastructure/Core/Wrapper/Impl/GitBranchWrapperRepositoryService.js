"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitBranchWrapperRepositoryService = void 0;
const github = require("@actions/github");
class GitBranchWrapperRepositoryService {
    deleteGitBranch(branchName, gitRepository, gitAuthentication) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(function (resolve, reject) {
                try {
                    const client = github.getOctokit(gitAuthentication.token);
                    client.git.deleteRef({
                        owner: gitRepository.owner,
                        repo: gitRepository.name,
                        ref: "heads/" + branchName
                    })
                        .then(_ => { resolve(true); })
                        .catch(reason => {
                        console.log("ERROR (fluent): " + reason);
                        reject(false);
                    });
                }
                catch (ex) {
                    console.log("ERROR: " + ex);
                    reject(false);
                }
            });
        });
    }
}
exports.GitBranchWrapperRepositoryService = GitBranchWrapperRepositoryService;
//# sourceMappingURL=GitBranchWrapperRepositoryService.js.map