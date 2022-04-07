import { Container } from "typescript-ioc";
import { IActionResultApplicationService } from "../Application/Core/IActionResultApplicationService";
import { IGitAuthenticationApplicationService } from "../Application/Core/IGitAuthenticationApplicationService";
import { IGitDefaultBranchNameApplicationService } from "../Application/Core/IGitDefaultBranchNameApplicationService";
import { IGitEventApplicationService } from "../Application/Core/IGitEventApplicationService";
import { IGitPushBranchNameApplicationService } from "../Application/Core/IGitPushBranchNameApplicationService";
import { ActionResultApplicationService } from "../Application/Core/Impl/ActionResultApplicationService";
import { GitAuthenticationApplicationService } from "../Application/Core/Impl/GitAuthenticationApplicationService";
import { GitDefaultBranchNameApplicationService } from "../Application/Core/Impl/GitDefaultBranchNameApplicationService";
import { GitEventApplicationService } from "../Application/Core/Impl/GitEventApplicationService";
import { GitPushBranchNameApplicationService } from "../Application/Core/Impl/GitPushBranchNameApplicationService";
import { IActionResultDomainService } from "../Domain/Services/Core/IActionResultDomainService";
import { IGitAuthenticationDomainService } from "../Domain/Services/Core/IGitAuthenticationDomainService";
import { IGitDefaultBranchNameDomainService } from "../Domain/Services/Core/IGitDefaultBranchNameDomainService";
import { IGitEventDomainService } from "../Domain/Services/Core/IGitEventDomainService";
import { IGitPushBranchNameDomainService } from "../Domain/Services/Core/IGitPushBranchNameDomainService";
import { ActionResultDomainService } from "../Domain/Services/Core/Impl/ActionResultDomainService";
import { GitAuthenticationDomainService } from "../Domain/Services/Core/Impl/GitAuthenticationDomainService";
import { GitDefaultBranchNameDomainService } from "../Domain/Services/Core/Impl/GitDefaultBranchNameDomainService";
import { GitEventDomainService } from "../Domain/Services/Core/Impl/GitEventDomainService";
import { GitPushBranchNameDomainService } from "../Domain/Services/Core/Impl/GitPushBranchNameDomainService";
import { IActionResultRepositoryService } from "../Infrastructure/Core/IActionResultRepositoryService";
import { IGitAuthenticationRepositoryService } from "../Infrastructure/Core/IGitAuthenticationRepositoryService";
import { IGitDefaultBranchNameRepositoryService } from "../Infrastructure/Core/IGitDefaultBranchNameRepositoryService";
import { IGitEventRepositoryService } from "../Infrastructure/Core/IGitEventRepositoryService";
import { IGitPushBranchNameRepositoryService } from "../Infrastructure/Core/IGitPushBranchNameRepositoryService";
import { ActionResultRepositoryService } from "../Infrastructure/Core/Impl/ActionResultRepositoryService";
import { GitAuthenticationRepositoryService } from "../Infrastructure/Core/Impl/GitAuthenticationRepositoryService";
import { GitDefaultBranchNameRepositoryService } from "../Infrastructure/Core/Impl/GitDefaultBranchNameRepositoryService";
import { GitEventRepositoryService } from "../Infrastructure/Core/Impl/GitEventRepositoryService";
import { GitPushBranchNameRepositoryService } from "../Infrastructure/Core/Impl/GitPushBranchNameRepositoryService";
import { IActionResultWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IActionResultWrapperRepositoryService";
import { IGitAuthenticationWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitAuthenticationWrapperRepositoryService";
import { IGitDefaultBranchNameWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitDefaultBranchNameWrapperRepositoryService";
import { IGitEventWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitEventWrapperRepositoryService";
import { IGitPushBranchNameWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitPushBranchNameWrapperRepositoryService";
import { ActionResultWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/ActionResultWrapperRepositoryService";
import { GitAuthenticationWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitAuthenticationWrapperRepositoryService";
import { GitDefaultBranchNameWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitDefaultBranchNameWrapperRepositoryService";
import { GitEventWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitEventWrapperRepositoryService";
import { GitPushBranchNameWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitPushBranchNameWrapperRepositoryService";

export class IoCContainer {
    private static isLoaded: boolean;

    private static loadContainer() {

        // Application
        Container.bind(IActionResultApplicationService).to(ActionResultApplicationService);
        Container.bind(IGitAuthenticationApplicationService).to(GitAuthenticationApplicationService);
        Container.bind(IGitDefaultBranchNameApplicationService).to(GitDefaultBranchNameApplicationService);
        Container.bind(IGitEventApplicationService).to(GitEventApplicationService);
        Container.bind(IGitPushBranchNameApplicationService).to(GitPushBranchNameApplicationService);

        // Domain
        Container.bind(IActionResultDomainService).to(ActionResultDomainService);
        Container.bind(IGitAuthenticationDomainService).to(GitAuthenticationDomainService);
        Container.bind(IGitDefaultBranchNameDomainService).to(GitDefaultBranchNameDomainService);
        Container.bind(IGitEventDomainService).to(GitEventDomainService);
        Container.bind(IGitPushBranchNameDomainService).to(GitPushBranchNameDomainService);

        // Infrastructure
        Container.bind(IActionResultRepositoryService).to(ActionResultRepositoryService);
        Container.bind(IGitAuthenticationRepositoryService).to(GitAuthenticationRepositoryService);
        Container.bind(IGitDefaultBranchNameRepositoryService).to(GitDefaultBranchNameRepositoryService);
        Container.bind(IGitEventRepositoryService).to(GitEventRepositoryService);
        Container.bind(IGitPushBranchNameRepositoryService).to(GitPushBranchNameRepositoryService);

        Container.bind(IActionResultWrapperRepositoryService).to(ActionResultWrapperRepositoryService);
        Container.bind(IGitAuthenticationWrapperRepositoryService).to(GitAuthenticationWrapperRepositoryService);
        Container.bind(IGitDefaultBranchNameWrapperRepositoryService).to(GitDefaultBranchNameWrapperRepositoryService);
        Container.bind(IGitEventWrapperRepositoryService).to(GitEventWrapperRepositoryService);
        Container.bind(IGitPushBranchNameWrapperRepositoryService).to(GitPushBranchNameWrapperRepositoryService);
    }

    static resolve(arg: any): any {
        if (IoCContainer.isLoaded != true) {
            IoCContainer.loadContainer();
            IoCContainer.isLoaded = true;
        }
        return Container.get(arg);
    }
}

