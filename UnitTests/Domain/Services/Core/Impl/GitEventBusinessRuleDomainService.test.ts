import { GitEventTypeEnum } from "../../../../../src/Domain/Enums/GitEventTypeEnum";
import { GitEventBusinessRuleDomainService } from "../../../../../src/Domain/Services/Core/Impl/GitEventBusinessRuleDomainService";

it("isAllowedGitEventType_ReturnsTrue_Ok", () => {
  // Arrange
  let sut = new GitEventBusinessRuleDomainService();

  // Act
  var result = sut.isAllowedGitEventType(GitEventTypeEnum.Push);

  // Assert
  expect(result).toBe(true);
});

it("isAllowedGitEventType_ReturnsFalse_Ok", () => {
  // Arrange
  let sut = new GitEventBusinessRuleDomainService();

  // Act
  var result = sut.isAllowedGitEventType(GitEventTypeEnum.PullRequest);

  // Assert
  expect(result).toBe(false);
});