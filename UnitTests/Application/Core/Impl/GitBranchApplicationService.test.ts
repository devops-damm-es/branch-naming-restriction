import { IGitBranchRepositoryService } from "../../../../src/Infrastructure/Core/IGitBranchRepositoryService";
import { IGitBranchDomainService } from "../../../../src/Domain/Services/Core/IGitBranchDomainService";
import { GitBranchApplicationService } from "../../../../src/Application/Core/Impl/GitBranchApplicationService";
import { GitAuthentication } from "../../../../src/Domain/Entities/GitAuthentication";
import { GitRepository } from "../../../../src/Domain/Entities/GitRepository";

beforeEach(() => {
  jest.clearAllMocks();
});

test("deleteGitBranch_Ok", () => {
  // Arrange
  let sut = new GitBranchApplicationService(mockGitBranchDomainService);

  // Act
  var result = sut.deleteGitBranch(
    "branchName",
    new GitRepository("owner", "name"),
    new GitAuthentication("token"));

  // Assert
  expect(mockGitBranchDomainService.getRepositoryService).toBeCalledTimes(1);
  expect(mockGitBranchRepositoryService.deleteGitBranch).toBeCalledTimes(1);
});

test("renameGitBranch_Ok", () => {
  // Arrange
  let sut = new GitBranchApplicationService(mockGitBranchDomainService);

  // Act
  var result = sut.renameGitBranch(
    "branchName",
    "newBranchName",
    new GitRepository("owner", "name"),
    new GitAuthentication("token"));

  // Assert
  expect(mockGitBranchDomainService.getRepositoryService).toBeCalledTimes(1);
  expect(mockGitBranchRepositoryService.renameGitBranch).toBeCalledTimes(1);
});

const mockGitBranchRepositoryService: jest.Mocked<IGitBranchRepositoryService> = {
  deleteGitBranch: jest.fn().mockImplementation(() => {
    return new Promise<Boolean>(function (resolve, reject) { });
  }),
  renameGitBranch: jest.fn().mockImplementation(() => {
    return new Promise<Boolean>(function (resolve, reject) { });
  })
};

const mockGitBranchDomainService: jest.Mocked<IGitBranchDomainService> = {
  getRepositoryService: jest.fn().mockImplementation(() => {
    return mockGitBranchRepositoryService;
  })
};