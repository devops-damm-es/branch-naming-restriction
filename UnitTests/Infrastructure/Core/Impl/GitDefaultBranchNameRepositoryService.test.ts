import { GitDefaultBranchNameRepositoryService } from "../../../../src/Infrastructure/Core/Impl/GitDefaultBranchNameRepositoryService";
import { IGitDefaultBranchNameWrapperRepositoryService } from "../../../../src/Infrastructure/Core/Wrapper/IGitDefaultBranchNameWrapperRepositoryService";

beforeEach(() => {
  jest.clearAllMocks();
});

test("getGitDefaultBranchName_Ok", () => {
  // Arrange
  let sut = new GitDefaultBranchNameRepositoryService(mockGitDefaultBranchNameWrapperRepositoryService);

  // Act
  var result = sut.getGitDefaultBranchName();

  // Assert
  expect(mockGitDefaultBranchNameWrapperRepositoryService.getGitDefaultBranchName).toBeCalledTimes(1);
  expect(result).toBe("main");
});

test("getGitDefaultBranchName_ReturnsNull_Ok", () => {
  // Arrange
  let sut = new GitDefaultBranchNameRepositoryService(mockGitDefaultBranchNameWrapperNullRepositoryService);

  // Act
  var result = () => sut.getGitDefaultBranchName();

  // Assert
  expect(result).toThrow(Error);
});

const mockGitDefaultBranchNameWrapperRepositoryService: jest.Mocked<IGitDefaultBranchNameWrapperRepositoryService> = {
  getGitDefaultBranchName: jest.fn().mockImplementation(() => {
    return "main";
  })
};

const mockGitDefaultBranchNameWrapperNullRepositoryService: jest.Mocked<IGitDefaultBranchNameWrapperRepositoryService> = {
  getGitDefaultBranchName: jest.fn().mockImplementation(() => {
    return null;
  })
};