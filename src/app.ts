import { IMainApplicationService } from "./Application/IMainApplicationService";
import { IoCContainer } from "./Crosscutting/Container";

var mainApplicationService = IoCContainer.resolve(IMainApplicationService);
mainApplicationService.start();
