import { Container } from "typescript-ioc";
import { IGitEventRepositoryService } from "../Infrastructure/IGitEventRepositoryService";
import { GitEventRepositoryService } from "../Infrastructure/Impl/GitEventRepositoryService";

export class IoCContainer {
    private static isLoaded: boolean;

    private static loadContainer() {
        // Application

        // Domain

        // Infrastructure
        Container.bind(IGitEventRepositoryService).to(GitEventRepositoryService);
    }

    static resolve(arg: any): any {
        if (IoCContainer.isLoaded != true) {
            IoCContainer.loadContainer();
            IoCContainer.isLoaded = true;
        }
        return Container.get(arg);
    }
}

