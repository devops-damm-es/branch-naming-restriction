import { Container } from "typescript-ioc";
import { IActionResultApplicationService } from "../Application/Core/IActionResultApplicationService";
import { IGitAuthenticationApplicationService } from "../Application/Core/IGitAuthenticationApplicationService";
import { IGitBranchApplicationService } from "../Application/Core/IGitBranchApplicationService";
import { IGitDefaultBranchNameApplicationService } from "../Application/Core/IGitDefaultBranchNameApplicationService";
import { IGitEventApplicationService } from "../Application/Core/IGitEventApplicationService";
import { IGitPushBranchNameApplicationService } from "../Application/Core/IGitPushBranchNameApplicationService";
import { IGitRepositoryApplicationService } from "../Application/Core/IGitRepositoryApplicationService";
import { ActionResultApplicationService } from "../Application/Core/Impl/ActionResultApplicationService";
import { GitAuthenticationApplicationService } from "../Application/Core/Impl/GitAuthenticationApplicationService";
import { GitBranchApplicationService } from "../Application/Core/Impl/GitBranchApplicationService";
import { GitDefaultBranchNameApplicationService } from "../Application/Core/Impl/GitDefaultBranchNameApplicationService";
import { GitEventApplicationService } from "../Application/Core/Impl/GitEventApplicationService";
import { GitPushBranchNameApplicationService } from "../Application/Core/Impl/GitPushBranchNameApplicationService";
import { GitRepositoryApplicationService } from "../Application/Core/Impl/GitRepositoryApplicationService";
import { IActionResultDomainService } from "../Domain/Services/Core/IActionResultDomainService";
import { IGitAuthenticationDomainService } from "../Domain/Services/Core/IGitAuthenticationDomainService";
import { IGitBranchBusinessRuleDomainService } from "../Domain/Services/Core/IGitBranchBusinessRuleDomainService";
import { IGitBranchDomainService } from "../Domain/Services/Core/IGitBranchDomainService";
import { IGitDefaultBranchNameDomainService } from "../Domain/Services/Core/IGitDefaultBranchNameDomainService";
import { IGitEventBusinessRuleDomainService } from "../Domain/Services/Core/IGitEventBusinessRuleDomainService";
import { IGitEventDomainService } from "../Domain/Services/Core/IGitEventDomainService";
import { IGitPushBranchNameDomainService } from "../Domain/Services/Core/IGitPushBranchNameDomainService";
import { IGitRepositoryDomainService } from "../Domain/Services/Core/IGitRepositoryDomainService";
import { ActionResultDomainService } from "../Domain/Services/Core/Impl/ActionResultDomainService";
import { GitAuthenticationDomainService } from "../Domain/Services/Core/Impl/GitAuthenticationDomainService";
import { GitBranchBusinessRuleDomainService } from "../Domain/Services/Core/Impl/GitBranchBusinessRuleDomainService";
import { GitBranchDomainService } from "../Domain/Services/Core/Impl/GitBranchDomainService";
import { GitDefaultBranchNameDomainService } from "../Domain/Services/Core/Impl/GitDefaultBranchNameDomainService";
import { GitEventBusinessRuleDomainService } from "../Domain/Services/Core/Impl/GitEventBusinessRuleDomainService";
import { GitEventDomainService } from "../Domain/Services/Core/Impl/GitEventDomainService";
import { GitPushBranchNameDomainService } from "../Domain/Services/Core/Impl/GitPushBranchNameDomainService";
import { GitRepositoryDomainService } from "../Domain/Services/Core/Impl/GitRepositoryDomainService";
import { IActionResultRepositoryService } from "../Infrastructure/Core/IActionResultRepositoryService";
import { IGitAuthenticationRepositoryService } from "../Infrastructure/Core/IGitAuthenticationRepositoryService";
import { IGitBranchRepositoryService } from "../Infrastructure/Core/IGitBranchRepositoryService";
import { IGitDefaultBranchNameRepositoryService } from "../Infrastructure/Core/IGitDefaultBranchNameRepositoryService";
import { IGitEventRepositoryService } from "../Infrastructure/Core/IGitEventRepositoryService";
import { IGitPushBranchNameRepositoryService } from "../Infrastructure/Core/IGitPushBranchNameRepositoryService";
import { IGitRepositoryRepositoryService } from "../Infrastructure/Core/IGitRepositoryRepositoryService";
import { ActionResultRepositoryService } from "../Infrastructure/Core/Impl/ActionResultRepositoryService";
import { GitAuthenticationRepositoryService } from "../Infrastructure/Core/Impl/GitAuthenticationRepositoryService";
import { GitBranchRepositoryService } from "../Infrastructure/Core/Impl/GitBranchRepositoryService";
import { GitDefaultBranchNameRepositoryService } from "../Infrastructure/Core/Impl/GitDefaultBranchNameRepositoryService";
import { GitEventRepositoryService } from "../Infrastructure/Core/Impl/GitEventRepositoryService";
import { GitPushBranchNameRepositoryService } from "../Infrastructure/Core/Impl/GitPushBranchNameRepositoryService";
import { GitRepositoryRepositoryService } from "../Infrastructure/Core/Impl/GitRepositoryRepositoryService";
import { IActionResultWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IActionResultWrapperRepositoryService";
import { IGitAuthenticationWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitAuthenticationWrapperRepositoryService";
import { IGitBranchWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitBranchWrapperRepositoryService";
import { IGitDefaultBranchNameWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitDefaultBranchNameWrapperRepositoryService";
import { IGitEventWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitEventWrapperRepositoryService";
import { IGitPushBranchNameWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitPushBranchNameWrapperRepositoryService";
import { IGitRepositoryWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitRepositoryWrapperRepositoryService";
import { ActionResultWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/ActionResultWrapperRepositoryService";
import { GitAuthenticationWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitAuthenticationWrapperRepositoryService";
import { GitBranchWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitBranchWrapperRepositoryService";
import { GitDefaultBranchNameWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitDefaultBranchNameWrapperRepositoryService";
import { GitEventWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitEventWrapperRepositoryService";
import { GitPushBranchNameWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitPushBranchNameWrapperRepositoryService";
import { GitRepositoryWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitRepositoryWrapperRepositoryService";

export class IoCContainer {
    private static isLoaded: boolean;

    private static loadContainer() {

        // Application
        Container.bind(IActionResultApplicationService).to(ActionResultApplicationService);
        Container.bind(IGitAuthenticationApplicationService).to(GitAuthenticationApplicationService);
        Container.bind(IGitBranchApplicationService).to(GitBranchApplicationService);
        Container.bind(IGitDefaultBranchNameApplicationService).to(GitDefaultBranchNameApplicationService);
        Container.bind(IGitEventApplicationService).to(GitEventApplicationService);
        Container.bind(IGitPushBranchNameApplicationService).to(GitPushBranchNameApplicationService);
        Container.bind(IGitRepositoryApplicationService).to(GitRepositoryApplicationService);

        // Domain
        Container.bind(IActionResultDomainService).to(ActionResultDomainService);
        Container.bind(IGitAuthenticationDomainService).to(GitAuthenticationDomainService);
        Container.bind(IGitBranchBusinessRuleDomainService).to(GitBranchBusinessRuleDomainService);
        Container.bind(IGitBranchDomainService).to(GitBranchDomainService);
        Container.bind(IGitDefaultBranchNameDomainService).to(GitDefaultBranchNameDomainService);
        Container.bind(IGitEventBusinessRuleDomainService).to(GitEventBusinessRuleDomainService);
        Container.bind(IGitEventDomainService).to(GitEventDomainService);
        Container.bind(IGitPushBranchNameDomainService).to(GitPushBranchNameDomainService);
        Container.bind(IGitRepositoryDomainService).to(GitRepositoryDomainService);

        // Infrastructure
        Container.bind(IActionResultRepositoryService).to(ActionResultRepositoryService);
        Container.bind(IGitAuthenticationRepositoryService).to(GitAuthenticationRepositoryService);
        Container.bind(IGitBranchRepositoryService).to(GitBranchRepositoryService);
        Container.bind(IGitDefaultBranchNameRepositoryService).to(GitDefaultBranchNameRepositoryService);
        Container.bind(IGitEventRepositoryService).to(GitEventRepositoryService);
        Container.bind(IGitPushBranchNameRepositoryService).to(GitPushBranchNameRepositoryService);
        Container.bind(IGitRepositoryRepositoryService).to(GitRepositoryRepositoryService);

        Container.bind(IActionResultWrapperRepositoryService).to(ActionResultWrapperRepositoryService);
        Container.bind(IGitAuthenticationWrapperRepositoryService).to(GitAuthenticationWrapperRepositoryService);
        Container.bind(IGitBranchWrapperRepositoryService).to(GitBranchWrapperRepositoryService);
        Container.bind(IGitDefaultBranchNameWrapperRepositoryService).to(GitDefaultBranchNameWrapperRepositoryService);
        Container.bind(IGitEventWrapperRepositoryService).to(GitEventWrapperRepositoryService);
        Container.bind(IGitPushBranchNameWrapperRepositoryService).to(GitPushBranchNameWrapperRepositoryService);
        Container.bind(IGitRepositoryWrapperRepositoryService).to(GitRepositoryWrapperRepositoryService);
    }

    static resolve(arg: any): any {
        if (IoCContainer.isLoaded != true) {
            IoCContainer.loadContainer();
            IoCContainer.isLoaded = true;
        }
        return Container.get(arg);
    }
}

