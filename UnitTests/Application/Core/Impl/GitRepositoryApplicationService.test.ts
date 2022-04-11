import { IGitRepositoryRepositoryService } from "../../../../src/Infrastructure/Core/IGitRepositoryRepositoryService";
import { IGitRepositoryDomainService } from "../../../../src/Domain/Services/Core/IGitRepositoryDomainService";
import { GitRepositoryApplicationService } from "../../../../src/Application/Core/Impl/GitRepositoryApplicationService";
import { GitRepository } from "../../../../src/Domain/Entities/GitRepository";

beforeEach(() => {
  jest.clearAllMocks();
});

test("getGitRepository_Ok", () => {
  // Arrange
  let sut = new GitRepositoryApplicationService(mockGitRepositoryDomainService);

  // Act
  var result = sut.getGitRepository();

  // Assert
  expect(mockGitRepositoryDomainService.getRepositoryService).toBeCalledTimes(1);
  expect(mockGitRepositoryRepositoryService.getGitRepository).toBeCalledTimes(1);
  expect(result.owner).toBe("owner");
  expect(result.name).toBe("name");
});

const mockGitRepositoryRepositoryService: jest.Mocked<IGitRepositoryRepositoryService> = {
  getGitRepository: jest.fn().mockImplementation(() => {
    return new GitRepository("owner", "name");
  })
};

const mockGitRepositoryDomainService: jest.Mocked<IGitRepositoryDomainService> = {
  getRepositoryService: jest.fn().mockImplementation(() => {
    return mockGitRepositoryRepositoryService;
  })
};