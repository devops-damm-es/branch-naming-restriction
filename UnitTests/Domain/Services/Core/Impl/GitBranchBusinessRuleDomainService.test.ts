import { GitBranchBusinessRuleDomainService } from "../../../../../src/Domain/Services/Core/Impl/GitBranchBusinessRuleDomainService";

it("isAllowedGitBranch_AllowedBranchMaster_ReturnsTrue_Ok", () => {
  // Arrange
  let sut = new GitBranchBusinessRuleDomainService();

  // Act
  var result = sut.isAllowedGitBranch("master", "master");

  // Assert
  expect(result).toBe(true);
});

it("isAllowedGitBranch_AllowedBranchMain_ReturnsTrue_Ok", () => {
  // Arrange
  let sut = new GitBranchBusinessRuleDomainService();

  // Act
  var result = sut.isAllowedGitBranch("main", "main");

  // Assert
  expect(result).toBe(true);
});

it("isAllowedGitBranch_AllowedBranchDevelop_ReturnsTrue_Ok", () => {
  // Arrange
  let sut = new GitBranchBusinessRuleDomainService();

  // Act
  var result = sut.isAllowedGitBranch("develop", "main");

  // Assert
  expect(result).toBe(true);
});

it("isAllowedGitBranch_AllowedBranchFeature_ReturnsTrue_Ok", () => {
  // Arrange
  let sut = new GitBranchBusinessRuleDomainService();

  // Act
  var result = sut.isAllowedGitBranch("feature/MyFeature", "main");

  // Assert
  expect(result).toBe(true);
});

it("isAllowedGitBranch_AllowedBranchRelease_ReturnsTrue_Ok", () => {
  // Arrange
  let sut = new GitBranchBusinessRuleDomainService();

  // Act
  var result = sut.isAllowedGitBranch("release/MyRelease", "main");

  // Assert
  expect(result).toBe(true);
});

it("isAllowedGitBranch_AllowedBranchHotfix_ReturnsTrue_Ok", () => {
  // Arrange
  let sut = new GitBranchBusinessRuleDomainService();

  // Act
  var result = sut.isAllowedGitBranch("hotfix/MyHotfix", "main");

  // Assert
  expect(result).toBe(true);
});

it("isAllowedGitBranch_AllowedBranchMasterUppercase_ReturnsFalse_Ok", () => {
  // Arrange
  let sut = new GitBranchBusinessRuleDomainService();

  // Act
  var result = sut.isAllowedGitBranch("MASTER", "master");

  // Assert
  expect(result).toBe(false);
});

it("isAllowedGitBranch_AllowedBranchMainUppercase_ReturnsFalse_Ok", () => {
  // Arrange
  let sut = new GitBranchBusinessRuleDomainService();

  // Act
  var result = sut.isAllowedGitBranch("MAIN", "main");

  // Assert
  expect(result).toBe(false);
});

it("isAllowedGitBranch_AllowedBranchDevelopUppercase_ReturnsFalse_Ok", () => {
  // Arrange
  let sut = new GitBranchBusinessRuleDomainService();

  // Act
  var result = sut.isAllowedGitBranch("DEVELOP", "main");

  // Assert
  expect(result).toBe(false);
});

it("isAllowedGitBranch_AllowedBranchFeatureUppercase_ReturnsFalse_Ok", () => {
  // Arrange
  let sut = new GitBranchBusinessRuleDomainService();

  // Act
  var result = sut.isAllowedGitBranch("FEATURE/MyFeature", "main");

  // Assert
  expect(result).toBe(false);
});

it("isAllowedGitBranch_AllowedBranchReleaseUppercase_ReturnsFalse_Ok", () => {
  // Arrange
  let sut = new GitBranchBusinessRuleDomainService();

  // Act
  var result = sut.isAllowedGitBranch("RELEASE/MyRelease", "main");

  // Assert
  expect(result).toBe(false);
});

it("isAllowedGitBranch_AllowedBranchHotfixUppercase_ReturnsFalse_Ok", () => {
  // Arrange
  let sut = new GitBranchBusinessRuleDomainService();

  // Act
  var result = sut.isAllowedGitBranch("HOTFIX/MyHotfix", "main");

  // Assert
  expect(result).toBe(false);
});

it("isAllowedGitBranch_AllowedBranchRandomName_ReturnsFalse_Ok", () => {
  // Arrange
  let sut = new GitBranchBusinessRuleDomainService();

  // Act
  var result = sut.isAllowedGitBranch("randombranch/myrandombranch", "main");

  // Assert
  expect(result).toBe(false);
});