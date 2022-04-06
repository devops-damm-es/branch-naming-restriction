import { GitPushBranchNameRepositoryService } from "../../../../src/Infrastructure/Core/Impl/GitPushBranchNameRepositoryService";
import { IGitPushBranchNameWrapperRepositoryService } from "../../../../src/Infrastructure/Core/Wrapper/IGitPushBranchNameWrapperRepositoryService";

it("getGitPushBranchName_Ok", () => {
  // Arrange
  let sut = new GitPushBranchNameRepositoryService(mockGitPushBranchNameWrapperRepositoryService);

  // Act
  var result = sut.getGitPushBranchName();

  // Assert
  expect(mockGitPushBranchNameWrapperRepositoryService.getGitPushBranchName).toBeCalledTimes(1);
  expect(result).toBe("branch");
});

it("getGitPushBranchName_ReturnsNull_Ok", () => {
  // Arrange
  let sut = new GitPushBranchNameRepositoryService(mockGitPushBranchNameWrapperNullRepositoryService);

  // Act
  var result = () => sut.getGitPushBranchName();

  // Assert
  expect(result).toThrow(Error);
});

const mockGitPushBranchNameWrapperRepositoryService: jest.Mocked<IGitPushBranchNameWrapperRepositoryService> = {
  getGitPushBranchName: jest.fn().mockImplementation(() => {
    return "branch";
  })
};

const mockGitPushBranchNameWrapperNullRepositoryService: jest.Mocked<IGitPushBranchNameWrapperRepositoryService> = {
  getGitPushBranchName: jest.fn().mockImplementation(() => {
    return null;
  })
};