import { GitEventTypeEnum } from "../../../../src/Domain/Enums/GitEventTypeEnum";
import { GitEventRepositoryService } from "../../../../src/Infrastructure/Core/Impl/GitEventRepositoryService";
import { IGitEventWrapperRepositoryService } from "../../../../src/Infrastructure/Core/Wrapper/IGitEventWrapperRepositoryService";

it("getGitEventType_Ok", () => {
  // Arrange
  let sut = new GitEventRepositoryService(mockGitEventWrapperRepositoryService);

  // Act
  var result = sut.getGitEventType();

  // Assert
  expect(mockGitEventWrapperRepositoryService.getGitEventType).toBeCalledTimes(1);
  expect(result).toBe(GitEventTypeEnum.PullRequest);
});

const mockGitEventWrapperRepositoryService: jest.Mocked<IGitEventWrapperRepositoryService> = {
  getGitEventType: jest.fn().mockImplementation(() => {
    return GitEventTypeEnum.PullRequest;
  })
};