import { IGitAuthenticationRepositoryService } from "../../../../src/Infrastructure/Core/IGitAuthenticationRepositoryService";
import { IGitAuthenticationDomainService } from "../../../../src/Domain/Services/Core/IGitAuthenticationDomainService";
import { GitAuthenticationApplicationService } from "../../../../src/Application/Core/Impl/GitAuthenticationApplicationService";
import { GitAuthentication } from "../../../../src/Domain/Entities/GitAuthentication";

beforeEach(() => {
  jest.clearAllMocks();
});

test("getGitAuthentication_Ok", () => {
  // Arrange
  let sut = new GitAuthenticationApplicationService(mockGitAuthenticationDomainService);

  // Act
  var result = sut.getGitAuthentication();

  // Assert
  expect(mockGitAuthenticationDomainService.getRepositoryService).toBeCalledTimes(1);
  expect(mockGitAuthenticationRepositoryService.getGitAuthentication).toBeCalledTimes(1);
  expect(result.token).toBe("token");
});

const mockGitAuthenticationRepositoryService: jest.Mocked<IGitAuthenticationRepositoryService> = {
  getGitAuthentication: jest.fn().mockImplementation(() => {
    return new GitAuthentication("token");
  })
};

const mockGitAuthenticationDomainService: jest.Mocked<IGitAuthenticationDomainService> = {
  getRepositoryService: jest.fn().mockImplementation(() => {
    return mockGitAuthenticationRepositoryService;
  })
};