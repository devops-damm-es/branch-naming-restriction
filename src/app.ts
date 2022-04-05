import { IoCContainer } from "./Crosscutting/Container";
import { IGitEventRepositoryService } from "./Infrastructure/IGitEventRepositoryService";

let gitEventRepositoryService = IoCContainer.resolve(IGitEventRepositoryService);
let a = gitEventRepositoryService.getGitEvent();

console.log("Branch naming restriction");
let adios = "adios";