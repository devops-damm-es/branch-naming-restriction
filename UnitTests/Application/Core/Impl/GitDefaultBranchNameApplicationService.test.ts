import { IGitDefaultBranchNameRepositoryService } from "../../../../src/Infrastructure/Core/IGitDefaultBranchNameRepositoryService";
import { IGitDefaultBranchNameDomainService } from "../../../../src/Domain/Services/Core/IGitDefaultBranchNameDomainService";
import { GitDefaultBranchNameApplicationService } from "../../../../src/Application/Core/Impl/GitDefaultBranchNameApplicationService";

it("getGitDefaultBranchName_Ok", () => {
  // Arrange
  let sut = new GitDefaultBranchNameApplicationService(mockGitDefaultBranchNameDomainService);

  // Act
  var result = sut.getGitDefaultBranchName();

  // Assert
  expect(mockGitDefaultBranchNameDomainService.getRepositoryService).toBeCalledTimes(1);
  expect(mockGitDefaultBranchNameRepositoryService.getGitDefaultBranchName).toBeCalledTimes(1);
  expect(result).toBe("main");
});

const mockGitDefaultBranchNameRepositoryService: jest.Mocked<IGitDefaultBranchNameRepositoryService> = {
  getGitDefaultBranchName: jest.fn().mockImplementation(() => {
    return "main";
  })
};

const mockGitDefaultBranchNameDomainService: jest.Mocked<IGitDefaultBranchNameDomainService> = {
  getRepositoryService: jest.fn().mockImplementation(() => {
    return mockGitDefaultBranchNameRepositoryService;
  })
};