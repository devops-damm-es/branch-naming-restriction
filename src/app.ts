import { IGitEventApplicationService } from "./Application/Core/IGitEventApplicationService";
import { IoCContainer } from "./Crosscutting/Container";
import { GitEventTypeEnum } from "./Domain/Enums/GitEventTypeEnum";

let gitEventApplicationService = IoCContainer.resolve(IGitEventApplicationService);
var gitEventType = gitEventApplicationService.getGitEventType();

if (gitEventType == GitEventTypeEnum.Push) {
    console.log("Branch naming restriction: Push event");
} else if (gitEventType == GitEventTypeEnum.PullRequest) {
    console.log("Branch naming restriction: Pull request event");
}