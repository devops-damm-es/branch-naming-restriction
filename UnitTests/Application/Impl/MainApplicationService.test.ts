import { IActionResultApplicationService } from "../../../src/Application/Core/IActionResultApplicationService";
import { IGitAuthenticationApplicationService } from "../../../src/Application/Core/IGitAuthenticationApplicationService";
import { IGitBranchApplicationService } from "../../../src/Application/Core/IGitBranchApplicationService";
import { IGitDefaultBranchNameApplicationService } from "../../../src/Application/Core/IGitDefaultBranchNameApplicationService";
import { IGitEventApplicationService } from "../../../src/Application/Core/IGitEventApplicationService";
import { IGitPushBranchNameApplicationService } from "../../../src/Application/Core/IGitPushBranchNameApplicationService";
import { IGitRepositoryApplicationService } from "../../../src/Application/Core/IGitRepositoryApplicationService";
import { MainApplicationService } from "../../../src/Application/Impl/MainApplicationService";
import { GitAuthentication } from "../../../src/Domain/Entities/GitAuthentication";
import { GitRepository } from "../../../src/Domain/Entities/GitRepository";
import { GitEventTypeEnum } from "../../../src/Domain/Enums/GitEventTypeEnum";
import { IGitBranchBusinessRuleDomainService } from "../../../src/Domain/Services/Core/IGitBranchBusinessRuleDomainService";
import { IGitEventBusinessRuleDomainService } from "../../../src/Domain/Services/Core/IGitEventBusinessRuleDomainService";

beforeEach(() => {
  jest.clearAllMocks();
});

test("start_ActionResultTrue_Ok", async () => {
  // Arrange
  let sut = new MainApplicationService(
    mockGitEventGitEventTypePushApplicationService,
    mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService,
    mockGitDefaultBranchNameApplicationService,
    mockGitPushBranchNameApplicationService,
    mockGitBranchBusinessRuleIsAllowedGitBranchTrueDomainService,
    mockGitAuthenticationApplicationService,
    mockGitRepositoryApplicationService,
    mockGitBranchDeleteGitBranchTrueApplicationService,
    mockActionResultApplicationService);

  // Act
  await sut.start();

  // Assert
  expect(mockGitEventGitEventTypePushApplicationService.getGitEventType).toBeCalledTimes(1);
  expect(mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService.isAllowedGitEventType).toBeCalledTimes(1);
  expect(mockGitDefaultBranchNameApplicationService.getGitDefaultBranchName).toBeCalledTimes(1);
  expect(mockGitPushBranchNameApplicationService.getGitPushBranchName).toBeCalledTimes(1);
  expect(mockGitBranchBusinessRuleIsAllowedGitBranchTrueDomainService.isAllowedGitBranch).toBeCalledTimes(1);
  expect(mockGitAuthenticationApplicationService.getGitAuthentication).toBeCalledTimes(0);
  expect(mockGitRepositoryApplicationService.getGitRepository).toBeCalledTimes(0);
  expect(mockGitBranchDeleteGitBranchTrueApplicationService.deleteGitBranch).toBeCalledTimes(0);
  expect(mockActionResultApplicationService.setActionResult).toBeCalledTimes(1);
});

test("start_ActionResultFalseGitEventTypeIsNotAllowed_Ok", async () => {
  // Arrange
  let sut = new MainApplicationService(
    mockGitEventGitEventTypePullRequestApplicationService,
    mockGitEventBusinessRuleIsAllowedGitEventTypeFalseDomainService,
    mockGitDefaultBranchNameApplicationService,
    mockGitPushBranchNameApplicationService,
    mockGitBranchBusinessRuleIsAllowedGitBranchTrueDomainService,
    mockGitAuthenticationApplicationService,
    mockGitRepositoryApplicationService,
    mockGitBranchDeleteGitBranchTrueApplicationService,
    mockActionResultApplicationService);

  // Act
  await sut.start();

  // Assert
  expect(mockGitEventGitEventTypePullRequestApplicationService.getGitEventType).toBeCalledTimes(1);
  expect(mockGitEventBusinessRuleIsAllowedGitEventTypeFalseDomainService.isAllowedGitEventType).toBeCalledTimes(1);
  expect(mockGitDefaultBranchNameApplicationService.getGitDefaultBranchName).toBeCalledTimes(0);
  expect(mockGitPushBranchNameApplicationService.getGitPushBranchName).toBeCalledTimes(0);
  expect(mockGitBranchBusinessRuleIsAllowedGitBranchTrueDomainService.isAllowedGitBranch).toBeCalledTimes(0);
  expect(mockGitAuthenticationApplicationService.getGitAuthentication).toBeCalledTimes(0);
  expect(mockGitRepositoryApplicationService.getGitRepository).toBeCalledTimes(0);
  expect(mockGitBranchDeleteGitBranchTrueApplicationService.deleteGitBranch).toBeCalledTimes(0);
  expect(mockActionResultApplicationService.setActionResult).toBeCalledTimes(1);
});

test("start_ActionResultFalseBranchNameIsNotAllowedDeletedFromRepository_Ok", async () => {
  // Arrange
  let sut = new MainApplicationService(
    mockGitEventGitEventTypePushApplicationService,
    mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService,
    mockGitDefaultBranchNameApplicationService,
    mockGitPushBranchNameApplicationService,
    mockGitBranchBusinessRuleIsAllowedGitBranchFalseDomainService,
    mockGitAuthenticationApplicationService,
    mockGitRepositoryApplicationService,
    mockGitBranchDeleteGitBranchTrueApplicationService,
    mockActionResultApplicationService);

  // Act
  await sut.start();

  // Assert
  expect(mockGitEventGitEventTypePushApplicationService.getGitEventType).toBeCalledTimes(1);
  expect(mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService.isAllowedGitEventType).toBeCalledTimes(1);
  expect(mockGitDefaultBranchNameApplicationService.getGitDefaultBranchName).toBeCalledTimes(1);
  expect(mockGitPushBranchNameApplicationService.getGitPushBranchName).toBeCalledTimes(1);
  expect(mockGitBranchBusinessRuleIsAllowedGitBranchFalseDomainService.isAllowedGitBranch).toBeCalledTimes(1);
  expect(mockGitAuthenticationApplicationService.getGitAuthentication).toBeCalledTimes(1);
  expect(mockGitRepositoryApplicationService.getGitRepository).toBeCalledTimes(1);
  expect(mockGitBranchDeleteGitBranchTrueApplicationService.deleteGitBranch).toBeCalledTimes(1);
  expect(mockActionResultApplicationService.setActionResult).toBeCalledTimes(1);
});

test("start_ActionResultFalseBranchNameIsNotAllowedErrorWhenDeletingFromRepository_Ok", async () => {
  // Arrange
  let sut = new MainApplicationService(
    mockGitEventGitEventTypePushApplicationService,
    mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService,
    mockGitDefaultBranchNameApplicationService,
    mockGitPushBranchNameApplicationService,
    mockGitBranchBusinessRuleIsAllowedGitBranchFalseDomainService,
    mockGitAuthenticationApplicationService,
    mockGitRepositoryApplicationService,
    mockGitBranchDeleteGitBranchFalseApplicationService,
    mockActionResultApplicationService);

  // Act
  await sut.start();

  // Assert
  expect(mockGitEventGitEventTypePushApplicationService.getGitEventType).toBeCalledTimes(1);
  expect(mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService.isAllowedGitEventType).toBeCalledTimes(1);
  expect(mockGitDefaultBranchNameApplicationService.getGitDefaultBranchName).toBeCalledTimes(1);
  expect(mockGitPushBranchNameApplicationService.getGitPushBranchName).toBeCalledTimes(1);
  expect(mockGitBranchBusinessRuleIsAllowedGitBranchFalseDomainService.isAllowedGitBranch).toBeCalledTimes(1);
  expect(mockGitAuthenticationApplicationService.getGitAuthentication).toBeCalledTimes(1);
  expect(mockGitRepositoryApplicationService.getGitRepository).toBeCalledTimes(1);
  expect(mockGitBranchDeleteGitBranchFalseApplicationService.deleteGitBranch).toBeCalledTimes(1);
  expect(mockActionResultApplicationService.setActionResult).toBeCalledTimes(1);
});

const mockGitEventGitEventTypePushApplicationService: jest.Mocked<IGitEventApplicationService> = {
  getGitEventType: jest.fn().mockImplementation(() => {
    return GitEventTypeEnum.Push;
  })
};

const mockGitEventGitEventTypePullRequestApplicationService: jest.Mocked<IGitEventApplicationService> = {
  getGitEventType: jest.fn().mockImplementation(() => {
    return GitEventTypeEnum.PullRequest;
  })
};

const mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService: jest.Mocked<IGitEventBusinessRuleDomainService> = {
  isAllowedGitEventType: jest.fn().mockImplementation(() => {
    return true;
  })
};

const mockGitEventBusinessRuleIsAllowedGitEventTypeFalseDomainService: jest.Mocked<IGitEventBusinessRuleDomainService> = {
  isAllowedGitEventType: jest.fn().mockImplementation(() => {
    return false;
  })
};

const mockGitDefaultBranchNameApplicationService: jest.Mocked<IGitDefaultBranchNameApplicationService> = {
  getGitDefaultBranchName: jest.fn().mockImplementation(() => {
    return "main";
  })
};

const mockGitPushBranchNameApplicationService: jest.Mocked<IGitPushBranchNameApplicationService> = {
  getGitPushBranchName: jest.fn().mockImplementation(() => {
    return "feature/XXX";
  })
};

const mockGitBranchBusinessRuleIsAllowedGitBranchTrueDomainService: jest.Mocked<IGitBranchBusinessRuleDomainService> = {
  isAllowedGitBranch: jest.fn().mockImplementation(() => {
    return true;
  })
};

const mockGitBranchBusinessRuleIsAllowedGitBranchFalseDomainService: jest.Mocked<IGitBranchBusinessRuleDomainService> = {
  isAllowedGitBranch: jest.fn().mockImplementation(() => {
    return false;
  })
};

const mockGitAuthenticationApplicationService: jest.Mocked<IGitAuthenticationApplicationService> = {
  getGitAuthentication: jest.fn().mockImplementation(() => {
    return new GitAuthentication("token");
  })
};

const mockGitRepositoryApplicationService: jest.Mocked<IGitRepositoryApplicationService> = {
  getGitRepository: jest.fn().mockImplementation(() => {
    return new GitRepository("owner", "name");
  })
};

const mockGitBranchDeleteGitBranchTrueApplicationService: jest.Mocked<IGitBranchApplicationService> = {
  deleteGitBranch: jest.fn().mockImplementation(() => {
    return new Promise<Boolean>(function (resolve, reject) { resolve(true); });
  })
}

const mockGitBranchDeleteGitBranchFalseApplicationService: jest.Mocked<IGitBranchApplicationService> = {
  deleteGitBranch: jest.fn().mockImplementation(() => {
    return new Promise<Boolean>(function (resolve, reject) { reject(false); });
  })
}

const mockActionResultApplicationService: jest.Mocked<IActionResultApplicationService> = {
  setActionResult: jest.fn().mockImplementation(() => { })
};
