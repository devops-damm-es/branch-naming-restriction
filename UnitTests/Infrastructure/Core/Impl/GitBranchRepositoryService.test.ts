import { GitAuthentication } from "../../../../src/Domain/Entities/GitAuthentication";
import { GitRepository } from "../../../../src/Domain/Entities/GitRepository";
import { GitBranchRepositoryService } from "../../../../src/Infrastructure/Core/Impl/GitBranchRepositoryService";
import { IGitBranchWrapperRepositoryService } from "../../../../src/Infrastructure/Core/Wrapper/IGitBranchWrapperRepositoryService";

beforeEach(() => {
  jest.clearAllMocks();
});

test("deleteGitBranch_Ok", () => {
  // Arrange
  let sut = new GitBranchRepositoryService(mockGitBranchWrapperRepositoryService);

  // Act
  var result = sut.deleteGitBranch(
    "branchName",
    new GitRepository("owner", "name"),
    new GitAuthentication("token"));

  // Assert
  expect(mockGitBranchWrapperRepositoryService.deleteGitBranch).toBeCalledTimes(1);
});

const mockGitBranchWrapperRepositoryService: jest.Mocked<IGitBranchWrapperRepositoryService> = {
  deleteGitBranch: jest.fn().mockImplementation(() => {
    return new Promise<Boolean>(function (resolve, reject) { });
  })
};