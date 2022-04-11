import { IActionResultRepositoryService } from "../../../../src/Infrastructure/Core/IActionResultRepositoryService";
import { IActionResultDomainService } from "../../../../src/Domain/Services/Core/IActionResultDomainService";
import { ActionResultApplicationService } from "../../../../src/Application/Core/Impl/ActionResultApplicationService";

it("setActionResult_Ok", () => {
  // Arrange
  let sut = new ActionResultApplicationService(mockActionResultDomainService);

  // Act
  var result = sut.setActionResult(true, "message");

  // Assert
  expect(mockActionResultDomainService.getRepositoryService).toBeCalledTimes(1);
  expect(mockActionResultRepositoryService.setActionResult).toBeCalledTimes(1);
});

const mockActionResultRepositoryService: jest.Mocked<IActionResultRepositoryService> = {
  setActionResult: jest.fn().mockImplementation(() => {
  })
};

const mockActionResultDomainService: jest.Mocked<IActionResultDomainService> = {
  getRepositoryService: jest.fn().mockImplementation(() => {
    return mockActionResultRepositoryService;
  })
};