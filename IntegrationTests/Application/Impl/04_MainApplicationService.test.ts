import { Container } from "typescript-ioc";
import { IActionResultApplicationService } from "../../../src/Application/Core/IActionResultApplicationService";
import { IGitAuthenticationApplicationService } from "../../../src/Application/Core/IGitAuthenticationApplicationService";
import { IGitBranchApplicationService } from "../../../src/Application/Core/IGitBranchApplicationService";
import { IGitDefaultBranchNameApplicationService } from "../../../src/Application/Core/IGitDefaultBranchNameApplicationService";
import { IGitEventApplicationService } from "../../../src/Application/Core/IGitEventApplicationService";
import { IGitPushBranchNameApplicationService } from "../../../src/Application/Core/IGitPushBranchNameApplicationService";
import { IGitRepositoryApplicationService } from "../../../src/Application/Core/IGitRepositoryApplicationService";
import { IMainApplicationService } from "../../../src/Application/IMainApplicationService";
import { ActionResultApplicationService } from "../../../src/Application/Core/Impl/ActionResultApplicationService";
import { GitAuthenticationApplicationService } from "../../../src/Application/Core/Impl/GitAuthenticationApplicationService";
import { GitBranchApplicationService } from "../../../src/Application/Core/Impl/GitBranchApplicationService";
import { GitDefaultBranchNameApplicationService } from "../../../src/Application/Core/Impl/GitDefaultBranchNameApplicationService";
import { GitEventApplicationService } from "../../../src/Application/Core/Impl/GitEventApplicationService";
import { GitPushBranchNameApplicationService } from "../../../src/Application/Core/Impl/GitPushBranchNameApplicationService";
import { GitRepositoryApplicationService } from "../../../src/Application/Core/Impl/GitRepositoryApplicationService";
import { MainApplicationService } from "../../../src/Application/Impl/MainApplicationService";
import { IActionResultDomainService } from "../../../src/Domain/Services/Core/IActionResultDomainService";
import { IGitAuthenticationDomainService } from "../../../src/Domain/Services/Core/IGitAuthenticationDomainService";
import { IGitBranchBusinessRuleDomainService } from "../../../src/Domain/Services/Core/IGitBranchBusinessRuleDomainService";
import { IGitBranchDomainService } from "../../../src/Domain/Services/Core/IGitBranchDomainService";
import { IGitDefaultBranchNameDomainService } from "../../../src/Domain/Services/Core/IGitDefaultBranchNameDomainService";
import { IGitEventBusinessRuleDomainService } from "../../../src/Domain/Services/Core/IGitEventBusinessRuleDomainService";
import { IGitEventDomainService } from "../../../src/Domain/Services/Core/IGitEventDomainService";
import { IGitPushBranchNameDomainService } from "../../../src/Domain/Services/Core/IGitPushBranchNameDomainService";
import { IGitRepositoryDomainService } from "../../../src/Domain/Services/Core/IGitRepositoryDomainService";
import { ActionResultDomainService } from "../../../src/Domain/Services/Core/Impl/ActionResultDomainService";
import { GitAuthenticationDomainService } from "../../../src/Domain/Services/Core/Impl/GitAuthenticationDomainService";
import { GitBranchBusinessRuleDomainService } from "../../../src/Domain/Services/Core/Impl/GitBranchBusinessRuleDomainService";
import { GitBranchDomainService } from "../../../src/Domain/Services/Core/Impl/GitBranchDomainService";
import { GitDefaultBranchNameDomainService } from "../../../src/Domain/Services/Core/Impl/GitDefaultBranchNameDomainService";
import { GitEventBusinessRuleDomainService } from "../../../src/Domain/Services/Core/Impl/GitEventBusinessRuleDomainService";
import { GitEventDomainService } from "../../../src/Domain/Services/Core/Impl/GitEventDomainService";
import { GitPushBranchNameDomainService } from "../../../src/Domain/Services/Core/Impl/GitPushBranchNameDomainService";
import { GitRepositoryDomainService } from "../../../src/Domain/Services/Core/Impl/GitRepositoryDomainService";
import { IActionResultRepositoryService } from "../../../src/Infrastructure/Core/IActionResultRepositoryService";
import { IGitAuthenticationRepositoryService } from "../../../src/Infrastructure/Core/IGitAuthenticationRepositoryService";
import { IGitBranchRepositoryService } from "../../../src/Infrastructure/Core/IGitBranchRepositoryService";
import { IGitDefaultBranchNameRepositoryService } from "../../../src/Infrastructure/Core/IGitDefaultBranchNameRepositoryService";
import { IGitEventRepositoryService } from "../../../src/Infrastructure/Core/IGitEventRepositoryService";
import { IGitPushBranchNameRepositoryService } from "../../../src/Infrastructure/Core/IGitPushBranchNameRepositoryService";
import { IGitRepositoryRepositoryService } from "../../../src/Infrastructure/Core/IGitRepositoryRepositoryService";
import { ActionResultRepositoryService } from "../../../src/Infrastructure/Core/Impl/ActionResultRepositoryService";
import { GitAuthenticationRepositoryService } from "../../../src/Infrastructure/Core/Impl/GitAuthenticationRepositoryService";
import { GitBranchRepositoryService } from "../../../src/Infrastructure/Core/Impl/GitBranchRepositoryService";
import { GitDefaultBranchNameRepositoryService } from "../../../src/Infrastructure/Core/Impl/GitDefaultBranchNameRepositoryService";
import { GitEventRepositoryService } from "../../../src/Infrastructure/Core/Impl/GitEventRepositoryService";
import { GitPushBranchNameRepositoryService } from "../../../src/Infrastructure/Core/Impl/GitPushBranchNameRepositoryService";
import { GitRepositoryRepositoryService } from "../../../src/Infrastructure/Core/Impl/GitRepositoryRepositoryService";
import { IActionResultWrapperRepositoryService } from "../../../src/Infrastructure/Core/Wrapper/IActionResultWrapperRepositoryService";
import { IGitAuthenticationWrapperRepositoryService } from "../../../src/Infrastructure/Core/Wrapper/IGitAuthenticationWrapperRepositoryService";
import { IGitBranchWrapperRepositoryService } from "../../../src/Infrastructure/Core/Wrapper/IGitBranchWrapperRepositoryService";
import { IGitDefaultBranchNameWrapperRepositoryService } from "../../../src/Infrastructure/Core/Wrapper/IGitDefaultBranchNameWrapperRepositoryService";
import { IGitEventWrapperRepositoryService } from "../../../src/Infrastructure/Core/Wrapper/IGitEventWrapperRepositoryService";
import { IGitPushBranchNameWrapperRepositoryService } from "../../../src/Infrastructure/Core/Wrapper/IGitPushBranchNameWrapperRepositoryService";
import { IGitRepositoryWrapperRepositoryService } from "../../../src/Infrastructure/Core/Wrapper/IGitRepositoryWrapperRepositoryService";
import { GitEventTypeEnum } from "../../../src/Domain/Enums/GitEventTypeEnum";
import { GitAuthentication } from "../../../src/Domain/Entities/GitAuthentication";
import { GitRepository } from "../../../src/Domain/Entities/GitRepository";

beforeEach(() => {
  jest.clearAllMocks();
});

test("start_ActionResultFalseBranchNameIsNotAllowedErrorWhenDeletingFromRepository_Ok", async () => {
  // Arrange

  // Application
  Container.bind(IActionResultApplicationService).to(ActionResultApplicationService);
  Container.bind(IGitAuthenticationApplicationService).to(GitAuthenticationApplicationService);
  Container.bind(IGitBranchApplicationService).to(GitBranchApplicationService);
  Container.bind(IGitDefaultBranchNameApplicationService).to(GitDefaultBranchNameApplicationService);
  Container.bind(IGitEventApplicationService).to(GitEventApplicationService);
  Container.bind(IGitPushBranchNameApplicationService).to(GitPushBranchNameApplicationService);
  Container.bind(IGitRepositoryApplicationService).to(GitRepositoryApplicationService);
  Container.bind(IMainApplicationService).to(MainApplicationService);

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

  Container.bind(IActionResultWrapperRepositoryService).to(FakeActionResultWrapperRepositoryService);
  Container.bind(IGitAuthenticationWrapperRepositoryService).to(FakeGitAuthenticationWrapperRepositoryService);
  Container.bind(IGitBranchWrapperRepositoryService).to(FakeGitBranchWrapperRepositoryService);
  Container.bind(IGitDefaultBranchNameWrapperRepositoryService).to(FakeGitDefaultBranchNameWrapperRepositoryService);
  Container.bind(IGitEventWrapperRepositoryService).to(FakeGitEventWrapperRepositoryService);
  Container.bind(IGitPushBranchNameWrapperRepositoryService).to(FakeGitPushBranchNameWrapperRepositoryService);
  Container.bind(IGitRepositoryWrapperRepositoryService).to(FakeGitRepositoryWrapperRepositoryService);

  var sut = Container.get(IMainApplicationService);

  // Act
  await sut.start();

  // Assert
  expect(FakeActionResultWrapperRepositoryService.Success).toBe(false);
  expect(FakeActionResultWrapperRepositoryService.Message).toBe("Branch name is not allowed: Error when deleting from repository");
});


class FakeActionResultWrapperRepositoryService implements IActionResultWrapperRepositoryService {

  public static Success: Boolean;
  public static Message: String;

  setActionResult(success: Boolean, message: String) {
    FakeActionResultWrapperRepositoryService.Success = success;
    FakeActionResultWrapperRepositoryService.Message = message;
  }
}

class FakeGitAuthenticationWrapperRepositoryService implements IGitAuthenticationWrapperRepositoryService {
  getGitAuthentication(): GitAuthentication {
    return new GitAuthentication("token");
  }
}

class FakeGitBranchWrapperRepositoryService implements IGitBranchWrapperRepositoryService {
  deleteGitBranch(
    branchName: String,
    gitRepository: GitRepository,
    gitAuthentication: GitAuthentication): Promise<Boolean> {
    return new Promise<Boolean>(function (resolve, reject) { reject(false); });
  }

  renameGitBranch(
    branchName: String,
    newBranchName: String,
    gitRepository: GitRepository,
    gitAuthentication: GitAuthentication): Promise<Boolean> {
    return new Promise<Boolean>(function (resolve, reject) { });
  }
}

class FakeGitDefaultBranchNameWrapperRepositoryService implements IGitDefaultBranchNameWrapperRepositoryService {
  getGitDefaultBranchName(): String {
    return "main";
  }
}

class FakeGitEventWrapperRepositoryService implements IGitEventWrapperRepositoryService {
  getGitEventType(): GitEventTypeEnum {
    return GitEventTypeEnum.Push;
  }
}

class FakeGitPushBranchNameWrapperRepositoryService implements IGitPushBranchNameWrapperRepositoryService {
  getGitPushBranchName(): String {
    return "notAllowedBranchName";
  }
}

class FakeGitRepositoryWrapperRepositoryService implements IGitRepositoryWrapperRepositoryService {
  getGitRepository(): GitRepository {
    return new GitRepository("owner", "name");
  }
}