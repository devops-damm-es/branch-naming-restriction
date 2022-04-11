"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainApplicationService = void 0;
const typescript_ioc_1 = require("typescript-ioc");
const IGitBranchBusinessRuleDomainService_1 = require("../../../Domain/Services/Core/IGitBranchBusinessRuleDomainService");
const IGitEventBusinessRuleDomainService_1 = require("../../../Domain/Services/Core/IGitEventBusinessRuleDomainService");
const IActionResultApplicationService_1 = require("../IActionResultApplicationService");
const IGitAuthenticationApplicationService_1 = require("../IGitAuthenticationApplicationService");
const IGitBranchApplicationService_1 = require("../IGitBranchApplicationService");
const IGitDefaultBranchNameApplicationService_1 = require("../IGitDefaultBranchNameApplicationService");
const IGitEventApplicationService_1 = require("../IGitEventApplicationService");
const IGitPushBranchNameApplicationService_1 = require("../IGitPushBranchNameApplicationService");
const IGitRepositoryApplicationService_1 = require("../IGitRepositoryApplicationService");
let MainApplicationService = class MainApplicationService {
    constructor(gitEventApplicationService, gitEventBusinessRuleDomainService, gitDefaultBranchNameApplicationService, gitPushBranchNameApplicationService, gitBranchBusinessRuleDomainService, gitAuthenticationApplicationService, gitRepositoryApplicationService, gitBranchApplicationService, actionResultApplicationService) {
        this.gitEventApplicationService = gitEventApplicationService;
        this.gitEventBusinessRuleDomainService = gitEventBusinessRuleDomainService;
        this.gitDefaultBranchNameApplicationService = gitDefaultBranchNameApplicationService;
        this.gitPushBranchNameApplicationService = gitPushBranchNameApplicationService;
        this.gitBranchBusinessRuleDomainService = gitBranchBusinessRuleDomainService;
        this.gitAuthenticationApplicationService = gitAuthenticationApplicationService;
        this.gitRepositoryApplicationService = gitRepositoryApplicationService;
        this.gitBranchApplicationService = gitBranchApplicationService;
        this.actionResultApplicationService = actionResultApplicationService;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            var gitEventType = this.gitEventApplicationService.getGitEventType();
            if (this.gitEventBusinessRuleDomainService.isAllowedGitEventType(gitEventType)) {
                var gitDefaultBranchName = this.gitDefaultBranchNameApplicationService.getGitDefaultBranchName();
                var gitPushBranchName = this.gitPushBranchNameApplicationService.getGitPushBranchName();
                if (this.gitBranchBusinessRuleDomainService.isAllowedGitBranch(gitPushBranchName, gitDefaultBranchName)) {
                    this.actionResultApplicationService.setActionResult(true, "Branch name is allowed");
                }
                else {
                    var gitAuthentication = this.gitAuthenticationApplicationService.getGitAuthentication();
                    var gitRepository = this.gitRepositoryApplicationService.getGitRepository();
                    try {
                        yield this.gitBranchApplicationService.deleteGitBranch(gitPushBranchName, gitRepository, gitAuthentication);
                        this.actionResultApplicationService.setActionResult(false, "Branch name is not allowed: Deleted from repository");
                    }
                    catch (_a) {
                        this.actionResultApplicationService.setActionResult(false, "Branch name is not allowed: Error when deleting from repository");
                    }
                }
            }
            else {
                this.actionResultApplicationService.setActionResult(false, "Git event type is not allowed");
            }
        });
    }
};
MainApplicationService = __decorate([
    __param(0, typescript_ioc_1.Inject),
    __param(1, typescript_ioc_1.Inject),
    __param(2, typescript_ioc_1.Inject),
    __param(3, typescript_ioc_1.Inject),
    __param(4, typescript_ioc_1.Inject),
    __param(5, typescript_ioc_1.Inject),
    __param(6, typescript_ioc_1.Inject),
    __param(7, typescript_ioc_1.Inject),
    __param(8, typescript_ioc_1.Inject),
    __metadata("design:paramtypes", [IGitEventApplicationService_1.IGitEventApplicationService,
        IGitEventBusinessRuleDomainService_1.IGitEventBusinessRuleDomainService,
        IGitDefaultBranchNameApplicationService_1.IGitDefaultBranchNameApplicationService,
        IGitPushBranchNameApplicationService_1.IGitPushBranchNameApplicationService,
        IGitBranchBusinessRuleDomainService_1.IGitBranchBusinessRuleDomainService,
        IGitAuthenticationApplicationService_1.IGitAuthenticationApplicationService,
        IGitRepositoryApplicationService_1.IGitRepositoryApplicationService,
        IGitBranchApplicationService_1.IGitBranchApplicationService,
        IActionResultApplicationService_1.IActionResultApplicationService])
], MainApplicationService);
exports.MainApplicationService = MainApplicationService;
//# sourceMappingURL=MainApplicationService.js.map