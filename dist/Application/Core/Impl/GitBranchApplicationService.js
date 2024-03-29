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
exports.GitBranchApplicationService = void 0;
const typescript_ioc_1 = require("typescript-ioc");
const IGitBranchDomainService_1 = require("../../../Domain/Services/Core/IGitBranchDomainService");
let GitBranchApplicationService = class GitBranchApplicationService {
    constructor(gitBranchDomainService) {
        this.gitBranchDomainService = gitBranchDomainService;
    }
    deleteGitBranch(branchName, gitRepository, gitAuthentication) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.gitBranchDomainService.getRepositoryService().deleteGitBranch(branchName, gitRepository, gitAuthentication);
        });
    }
    renameGitBranch(branchName, newBranchName, gitRepository, gitAuthentication) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.gitBranchDomainService.getRepositoryService().renameGitBranch(branchName, newBranchName, gitRepository, gitAuthentication);
        });
    }
};
GitBranchApplicationService = __decorate([
    __param(0, typescript_ioc_1.Inject),
    __metadata("design:paramtypes", [IGitBranchDomainService_1.IGitBranchDomainService])
], GitBranchApplicationService);
exports.GitBranchApplicationService = GitBranchApplicationService;
//# sourceMappingURL=GitBranchApplicationService.js.map