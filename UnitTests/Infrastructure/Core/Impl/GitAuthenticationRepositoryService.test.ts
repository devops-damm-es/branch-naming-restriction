import { GitAuthentication } from "../../../../src/Domain/Entities/GitAuthentication";
import { GitAuthenticationRepositoryService } from "../../../../src/Infrastructure/Core/Impl/GitAuthenticationRepositoryService";
import { IGitAuthenticationWrapperRepositoryService } from "../../../../src/Infrastructure/Core/Wrapper/IGitAuthenticationWrapperRepositoryService";

beforeEach(() => {
  jest.clearAllMocks();
});

test("getGitAuthentication_Ok", () => {
  // Arrange
  let sut = new GitAuthenticationRepositoryService(mockGitAuthenticationWrapperRepositoryService);

  // Act
  var result = sut.getGitAuthentication();

  // Assert
  expect(mockGitAuthenticationWrapperRepositoryService.getGitAuthentication).toBeCalledTimes(1);
  expect(result.token).toBe("token");
});

test("getGitAuthentication_ReturnsNull_Ok", () => {
  // Arrange
  let sut = new GitAuthenticationRepositoryService(mockGitAuthenticationWrapperNullRepositoryService);

  // Act
  var result = () => sut.getGitAuthentication();

  // Assert
  expect(result).toThrow(Error);
});

const mockGitAuthenticationWrapperRepositoryService: jest.Mocked<IGitAuthenticationWrapperRepositoryService> = {
  getGitAuthentication: jest.fn().mockImplementation(() => {
    return new GitAuthentication("token");
  })
};

const mockGitAuthenticationWrapperNullRepositoryService: jest.Mocked<IGitAuthenticationWrapperRepositoryService> = {
  getGitAuthentication: jest.fn().mockImplementation(() => {
    return null;
  })
};