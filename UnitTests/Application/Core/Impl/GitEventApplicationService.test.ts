import { GitEventTypeEnum } from "../../../../src/Domain/Enums/GitEventTypeEnum";
import { IGitEventRepositoryService } from "../../../../src/Infrastructure/Core/IGitEventRepositoryService";
import { IGitEventDomainService } from "../../../../src/Domain/Services/Core/IGitEventDomainService";
import { GitEventApplicationService } from "../../../../src/Application/Core/Impl/GitEventApplicationService";

beforeEach(() => {
  jest.clearAllMocks();
});

test("getGitEventType_Ok", () => {
  // Arrange
  let sut = new GitEventApplicationService(mockGitEventDomainService);

  // Act
  var result = sut.getGitEventType();

  // Assert
  expect(mockGitEventDomainService.getRepositoryService).toBeCalledTimes(1);
  expect(mockGitEventRepositoryService.getGitEventType).toBeCalledTimes(1);
  expect(result).toBe(GitEventTypeEnum.PullRequest);
});

const mockGitEventRepositoryService: jest.Mocked<IGitEventRepositoryService> = {
  getGitEventType: jest.fn().mockImplementation(() => {
    return GitEventTypeEnum.PullRequest;
  })
};

const mockGitEventDomainService: jest.Mocked<IGitEventDomainService> = {
  getRepositoryService: jest.fn().mockImplementation(() => {
    return mockGitEventRepositoryService;
  })
};