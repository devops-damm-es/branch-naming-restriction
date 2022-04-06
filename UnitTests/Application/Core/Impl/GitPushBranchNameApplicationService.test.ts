import { IGitPushBranchNameRepositoryService } from "../../../../src/Infrastructure/Core/IGitPushBranchNameRepositoryService";
import { IGitPushBranchNameDomainService } from "../../../../src/Domain/Services/Core/IGitPushBranchNameDomainService";
import { GitPushBranchNameApplicationService } from "../../../../src/Application/Core/Impl/GitPushBranchNameApplicationService";

it("getGitPushBranchName_Ok", () => {
  // Arrange
  let sut = new GitPushBranchNameApplicationService(mockGitPushBranchNameDomainService);

  // Act
  var result = sut.getGitPushBranchName();

  // Assert
  expect(mockGitPushBranchNameDomainService.getRepositoryService).toBeCalledTimes(1);
  expect(mockGitPushBranchNameRepositoryService.getGitPushBranchName).toBeCalledTimes(1);
  expect(result).toBe("branch");
});

const mockGitPushBranchNameRepositoryService: jest.Mocked<IGitPushBranchNameRepositoryService> = {
  getGitPushBranchName: jest.fn().mockImplementation(() => {
    return "branch";
  })
};

const mockGitPushBranchNameDomainService: jest.Mocked<IGitPushBranchNameDomainService> = {
  getRepositoryService: jest.fn().mockImplementation(() => {
    return mockGitPushBranchNameRepositoryService;
  })
};