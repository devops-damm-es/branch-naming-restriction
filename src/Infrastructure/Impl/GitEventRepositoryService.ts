import { IGitEventRepositoryService } from "../IGitEventRepositoryService";

export class GitEventRepositoryService implements IGitEventRepositoryService {
    getGitEvent(): boolean {
        return true;
    }
}