"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IoCContainer = void 0;
const typescript_ioc_1 = require("typescript-ioc");
const IActionResultApplicationService_1 = require("../Application/Core/IActionResultApplicationService");
const IGitAuthenticationApplicationService_1 = require("../Application/Core/IGitAuthenticationApplicationService");
const IGitBranchApplicationService_1 = require("../Application/Core/IGitBranchApplicationService");
const IGitDefaultBranchNameApplicationService_1 = require("../Application/Core/IGitDefaultBranchNameApplicationService");
const IGitEventApplicationService_1 = require("../Application/Core/IGitEventApplicationService");
const IGitPushBranchNameApplicationService_1 = require("../Application/Core/IGitPushBranchNameApplicationService");
const IGitRepositoryApplicationService_1 = require("../Application/Core/IGitRepositoryApplicationService");
const IMainApplicationService_1 = require("../Application/IMainApplicationService");
const ActionResultApplicationService_1 = require("../Application/Core/Impl/ActionResultApplicationService");
const GitAuthenticationApplicationService_1 = require("../Application/Core/Impl/GitAuthenticationApplicationService");
const GitBranchApplicationService_1 = require("../Application/Core/Impl/GitBranchApplicationService");
const GitDefaultBranchNameApplicationService_1 = require("../Application/Core/Impl/GitDefaultBranchNameApplicationService");
const GitEventApplicationService_1 = require("../Application/Core/Impl/GitEventApplicationService");
const GitPushBranchNameApplicationService_1 = require("../Application/Core/Impl/GitPushBranchNameApplicationService");
const GitRepositoryApplicationService_1 = require("../Application/Core/Impl/GitRepositoryApplicationService");
const MainApplicationService_1 = require("../Application/Impl/MainApplicationService");
const IActionResultDomainService_1 = require("../Domain/Services/Core/IActionResultDomainService");
const IGitAuthenticationDomainService_1 = require("../Domain/Services/Core/IGitAuthenticationDomainService");
const IGitBranchBusinessRuleDomainService_1 = require("../Domain/Services/Core/IGitBranchBusinessRuleDomainService");
const IGitBranchDomainService_1 = require("../Domain/Services/Core/IGitBranchDomainService");
const IGitDefaultBranchNameDomainService_1 = require("../Domain/Services/Core/IGitDefaultBranchNameDomainService");
const IGitEventBusinessRuleDomainService_1 = require("../Domain/Services/Core/IGitEventBusinessRuleDomainService");
const IGitEventDomainService_1 = require("../Domain/Services/Core/IGitEventDomainService");
const IGitPushBranchNameDomainService_1 = require("../Domain/Services/Core/IGitPushBranchNameDomainService");
const IGitRepositoryDomainService_1 = require("../Domain/Services/Core/IGitRepositoryDomainService");
const ActionResultDomainService_1 = require("../Domain/Services/Core/Impl/ActionResultDomainService");
const GitAuthenticationDomainService_1 = require("../Domain/Services/Core/Impl/GitAuthenticationDomainService");
const GitBranchBusinessRuleDomainService_1 = require("../Domain/Services/Core/Impl/GitBranchBusinessRuleDomainService");
const GitBranchDomainService_1 = require("../Domain/Services/Core/Impl/GitBranchDomainService");
const GitDefaultBranchNameDomainService_1 = require("../Domain/Services/Core/Impl/GitDefaultBranchNameDomainService");
const GitEventBusinessRuleDomainService_1 = require("../Domain/Services/Core/Impl/GitEventBusinessRuleDomainService");
const GitEventDomainService_1 = require("../Domain/Services/Core/Impl/GitEventDomainService");
const GitPushBranchNameDomainService_1 = require("../Domain/Services/Core/Impl/GitPushBranchNameDomainService");
const GitRepositoryDomainService_1 = require("../Domain/Services/Core/Impl/GitRepositoryDomainService");
const IActionResultRepositoryService_1 = require("../Infrastructure/Core/IActionResultRepositoryService");
const IGitAuthenticationRepositoryService_1 = require("../Infrastructure/Core/IGitAuthenticationRepositoryService");
const IGitBranchRepositoryService_1 = require("../Infrastructure/Core/IGitBranchRepositoryService");
const IGitDefaultBranchNameRepositoryService_1 = require("../Infrastructure/Core/IGitDefaultBranchNameRepositoryService");
const IGitEventRepositoryService_1 = require("../Infrastructure/Core/IGitEventRepositoryService");
const IGitPushBranchNameRepositoryService_1 = require("../Infrastructure/Core/IGitPushBranchNameRepositoryService");
const IGitRepositoryRepositoryService_1 = require("../Infrastructure/Core/IGitRepositoryRepositoryService");
const ActionResultRepositoryService_1 = require("../Infrastructure/Core/Impl/ActionResultRepositoryService");
const GitAuthenticationRepositoryService_1 = require("../Infrastructure/Core/Impl/GitAuthenticationRepositoryService");
const GitBranchRepositoryService_1 = require("../Infrastructure/Core/Impl/GitBranchRepositoryService");
const GitDefaultBranchNameRepositoryService_1 = require("../Infrastructure/Core/Impl/GitDefaultBranchNameRepositoryService");
const GitEventRepositoryService_1 = require("../Infrastructure/Core/Impl/GitEventRepositoryService");
const GitPushBranchNameRepositoryService_1 = require("../Infrastructure/Core/Impl/GitPushBranchNameRepositoryService");
const GitRepositoryRepositoryService_1 = require("../Infrastructure/Core/Impl/GitRepositoryRepositoryService");
const IActionResultWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/IActionResultWrapperRepositoryService");
const IGitAuthenticationWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/IGitAuthenticationWrapperRepositoryService");
const IGitBranchWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/IGitBranchWrapperRepositoryService");
const IGitDefaultBranchNameWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/IGitDefaultBranchNameWrapperRepositoryService");
const IGitEventWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/IGitEventWrapperRepositoryService");
const IGitPushBranchNameWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/IGitPushBranchNameWrapperRepositoryService");
const IGitRepositoryWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/IGitRepositoryWrapperRepositoryService");
const ActionResultWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/Impl/ActionResultWrapperRepositoryService");
const GitAuthenticationWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/Impl/GitAuthenticationWrapperRepositoryService");
const GitBranchWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/Impl/GitBranchWrapperRepositoryService");
const GitDefaultBranchNameWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/Impl/GitDefaultBranchNameWrapperRepositoryService");
const GitEventWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/Impl/GitEventWrapperRepositoryService");
const GitPushBranchNameWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/Impl/GitPushBranchNameWrapperRepositoryService");
const GitRepositoryWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/Impl/GitRepositoryWrapperRepositoryService");
class IoCContainer {
    static loadContainer() {
        // Application
        typescript_ioc_1.Container.bind(IActionResultApplicationService_1.IActionResultApplicationService).to(ActionResultApplicationService_1.ActionResultApplicationService);
        typescript_ioc_1.Container.bind(IGitAuthenticationApplicationService_1.IGitAuthenticationApplicationService).to(GitAuthenticationApplicationService_1.GitAuthenticationApplicationService);
        typescript_ioc_1.Container.bind(IGitBranchApplicationService_1.IGitBranchApplicationService).to(GitBranchApplicationService_1.GitBranchApplicationService);
        typescript_ioc_1.Container.bind(IGitDefaultBranchNameApplicationService_1.IGitDefaultBranchNameApplicationService).to(GitDefaultBranchNameApplicationService_1.GitDefaultBranchNameApplicationService);
        typescript_ioc_1.Container.bind(IGitEventApplicationService_1.IGitEventApplicationService).to(GitEventApplicationService_1.GitEventApplicationService);
        typescript_ioc_1.Container.bind(IGitPushBranchNameApplicationService_1.IGitPushBranchNameApplicationService).to(GitPushBranchNameApplicationService_1.GitPushBranchNameApplicationService);
        typescript_ioc_1.Container.bind(IGitRepositoryApplicationService_1.IGitRepositoryApplicationService).to(GitRepositoryApplicationService_1.GitRepositoryApplicationService);
        typescript_ioc_1.Container.bind(IMainApplicationService_1.IMainApplicationService).to(MainApplicationService_1.MainApplicationService);
        // Domain
        typescript_ioc_1.Container.bind(IActionResultDomainService_1.IActionResultDomainService).to(ActionResultDomainService_1.ActionResultDomainService);
        typescript_ioc_1.Container.bind(IGitAuthenticationDomainService_1.IGitAuthenticationDomainService).to(GitAuthenticationDomainService_1.GitAuthenticationDomainService);
        typescript_ioc_1.Container.bind(IGitBranchBusinessRuleDomainService_1.IGitBranchBusinessRuleDomainService).to(GitBranchBusinessRuleDomainService_1.GitBranchBusinessRuleDomainService);
        typescript_ioc_1.Container.bind(IGitBranchDomainService_1.IGitBranchDomainService).to(GitBranchDomainService_1.GitBranchDomainService);
        typescript_ioc_1.Container.bind(IGitDefaultBranchNameDomainService_1.IGitDefaultBranchNameDomainService).to(GitDefaultBranchNameDomainService_1.GitDefaultBranchNameDomainService);
        typescript_ioc_1.Container.bind(IGitEventBusinessRuleDomainService_1.IGitEventBusinessRuleDomainService).to(GitEventBusinessRuleDomainService_1.GitEventBusinessRuleDomainService);
        typescript_ioc_1.Container.bind(IGitEventDomainService_1.IGitEventDomainService).to(GitEventDomainService_1.GitEventDomainService);
        typescript_ioc_1.Container.bind(IGitPushBranchNameDomainService_1.IGitPushBranchNameDomainService).to(GitPushBranchNameDomainService_1.GitPushBranchNameDomainService);
        typescript_ioc_1.Container.bind(IGitRepositoryDomainService_1.IGitRepositoryDomainService).to(GitRepositoryDomainService_1.GitRepositoryDomainService);
        // Infrastructure
        typescript_ioc_1.Container.bind(IActionResultRepositoryService_1.IActionResultRepositoryService).to(ActionResultRepositoryService_1.ActionResultRepositoryService);
        typescript_ioc_1.Container.bind(IGitAuthenticationRepositoryService_1.IGitAuthenticationRepositoryService).to(GitAuthenticationRepositoryService_1.GitAuthenticationRepositoryService);
        typescript_ioc_1.Container.bind(IGitBranchRepositoryService_1.IGitBranchRepositoryService).to(GitBranchRepositoryService_1.GitBranchRepositoryService);
        typescript_ioc_1.Container.bind(IGitDefaultBranchNameRepositoryService_1.IGitDefaultBranchNameRepositoryService).to(GitDefaultBranchNameRepositoryService_1.GitDefaultBranchNameRepositoryService);
        typescript_ioc_1.Container.bind(IGitEventRepositoryService_1.IGitEventRepositoryService).to(GitEventRepositoryService_1.GitEventRepositoryService);
        typescript_ioc_1.Container.bind(IGitPushBranchNameRepositoryService_1.IGitPushBranchNameRepositoryService).to(GitPushBranchNameRepositoryService_1.GitPushBranchNameRepositoryService);
        typescript_ioc_1.Container.bind(IGitRepositoryRepositoryService_1.IGitRepositoryRepositoryService).to(GitRepositoryRepositoryService_1.GitRepositoryRepositoryService);
        typescript_ioc_1.Container.bind(IActionResultWrapperRepositoryService_1.IActionResultWrapperRepositoryService).to(ActionResultWrapperRepositoryService_1.ActionResultWrapperRepositoryService);
        typescript_ioc_1.Container.bind(IGitAuthenticationWrapperRepositoryService_1.IGitAuthenticationWrapperRepositoryService).to(GitAuthenticationWrapperRepositoryService_1.GitAuthenticationWrapperRepositoryService);
        typescript_ioc_1.Container.bind(IGitBranchWrapperRepositoryService_1.IGitBranchWrapperRepositoryService).to(GitBranchWrapperRepositoryService_1.GitBranchWrapperRepositoryService);
        typescript_ioc_1.Container.bind(IGitDefaultBranchNameWrapperRepositoryService_1.IGitDefaultBranchNameWrapperRepositoryService).to(GitDefaultBranchNameWrapperRepositoryService_1.GitDefaultBranchNameWrapperRepositoryService);
        typescript_ioc_1.Container.bind(IGitEventWrapperRepositoryService_1.IGitEventWrapperRepositoryService).to(GitEventWrapperRepositoryService_1.GitEventWrapperRepositoryService);
        typescript_ioc_1.Container.bind(IGitPushBranchNameWrapperRepositoryService_1.IGitPushBranchNameWrapperRepositoryService).to(GitPushBranchNameWrapperRepositoryService_1.GitPushBranchNameWrapperRepositoryService);
        typescript_ioc_1.Container.bind(IGitRepositoryWrapperRepositoryService_1.IGitRepositoryWrapperRepositoryService).to(GitRepositoryWrapperRepositoryService_1.GitRepositoryWrapperRepositoryService);
    }
    static resolve(arg) {
        if (IoCContainer.isLoaded != true) {
            IoCContainer.loadContainer();
            IoCContainer.isLoaded = true;
        }
        return typescript_ioc_1.Container.get(arg);
    }
}
exports.IoCContainer = IoCContainer;
//# sourceMappingURL=Container.js.map