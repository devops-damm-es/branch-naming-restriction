import { ActionResultRepositoryService } from "../../../../src/Infrastructure/Core/Impl/ActionResultRepositoryService";
import { IActionResultWrapperRepositoryService } from "../../../../src/Infrastructure/Core/Wrapper/IActionResultWrapperRepositoryService";

beforeEach(() => {
  jest.clearAllMocks();
});

test("setActionResult_Ok", () => {
  // Arrange
  let sut = new ActionResultRepositoryService(mockActionResultWrapperRepositoryService);

  // Act
  var result = sut.setActionResult(true, "message");

  // Assert
  expect(mockActionResultWrapperRepositoryService.setActionResult).toBeCalledTimes(1);
});

const mockActionResultWrapperRepositoryService: jest.Mocked<IActionResultWrapperRepositoryService> = {
  setActionResult: jest.fn().mockImplementation(() => {
  })
};