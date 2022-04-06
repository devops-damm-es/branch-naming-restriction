import { ActionResultRepositoryService } from "../../../../src/Infrastructure/Core/Impl/ActionResultRepositoryService";
import { IActionResultWrapperRepositoryService } from "../../../../src/Infrastructure/Core/Wrapper/IActionResultWrapperRepositoryService";

it("setActionResult_Ok", () => {
  // Arrange
  let sut = new ActionResultRepositoryService(mockActionResultWrapperRepositoryService);

  // Act
  var result = sut.setActionResult(true);

  // Assert
  expect(mockActionResultWrapperRepositoryService.setActionResult).toBeCalledTimes(1);
});

const mockActionResultWrapperRepositoryService: jest.Mocked<IActionResultWrapperRepositoryService> = {
  setActionResult: jest.fn().mockImplementation(() => {
  })
};