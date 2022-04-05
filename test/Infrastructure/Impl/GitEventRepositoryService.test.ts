import { GitEventRepositoryService } from "../../../src/Infrastructure/Impl/GitEventRepositoryService";

it("getGitEvent_Ok", () => {
  // Arrange
  let sut = new GitEventRepositoryService();

  // Act
  var result = sut.getGitEvent();

  // Assert
  expect(result).toBe(true);
});