import { IMainApplicationService } from "./Application/Core/IMainApplicationService";
import { IoCContainer } from "./Crosscutting/Container";

var mainApplicationService = IoCContainer.resolve(IMainApplicationService);
mainApplicationService.start();
