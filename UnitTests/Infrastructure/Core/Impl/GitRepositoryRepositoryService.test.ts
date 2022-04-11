import { GitRepository } from "../../../../src/Domain/Entities/GitRepository";
import { GitRepositoryRepositoryService } from "../../../../src/Infrastructure/Core/Impl/GitRepositoryRepositoryService";
import { IGitRepositoryWrapperRepositoryService } from "../../../../src/Infrastructure/Core/Wrapper/IGitRepositoryWrapperRepositoryService";

beforeEach(() => {
  jest.clearAllMocks();
});

test("getGitRepository_Ok", () => {
  // Arrange
  let sut = new GitRepositoryRepositoryService(mockGitRepositoryWrapperRepositoryService);

  // Act
  var result = sut.getGitRepository();

  // Assert
  expect(mockGitRepositoryWrapperRepositoryService.getGitRepository).toBeCalledTimes(1);
  expect(result.owner).toBe("owner");
  expect(result.name).toBe("name");
});

test("getGitRepository_ReturnsNull_Ok", () => {
  // Arrange
  let sut = new GitRepositoryRepositoryService(mockGitRepositoryWrapperNullRepositoryService);

  // Act
  var result = () => sut.getGitRepository();

  // Assert
  expect(result).toThrow(Error);
});

const mockGitRepositoryWrapperRepositoryService: jest.Mocked<IGitRepositoryWrapperRepositoryService> = {
  getGitRepository: jest.fn().mockImplementation(() => {
    return new GitRepository("owner", "name");
  })
};

const mockGitRepositoryWrapperNullRepositoryService: jest.Mocked<IGitRepositoryWrapperRepositoryService> = {
  getGitRepository: jest.fn().mockImplementation(() => {
    return null;
  })
};