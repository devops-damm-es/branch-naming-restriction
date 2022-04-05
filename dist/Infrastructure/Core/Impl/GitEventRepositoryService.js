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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitEventRepositoryService = void 0;
const typescript_ioc_1 = require("typescript-ioc");
const IGitEventWrapperRepositoryService_1 = require("../Wrapper/IGitEventWrapperRepositoryService");
let GitEventRepositoryService = class GitEventRepositoryService {
    constructor(gitEventWrapperRepositoryService) {
        this.gitEventWrapperRepositoryService = gitEventWrapperRepositoryService;
    }
    getGitEventType() {
        var gitEventType = this.gitEventWrapperRepositoryService.getGitEventType();
        if (gitEventType != null) {
            return gitEventType;
        }
        else {
            throw new Error("Invalid git event type");
        }
    }
};
GitEventRepositoryService = __decorate([
    __param(0, typescript_ioc_1.Inject),
    __metadata("design:paramtypes", [IGitEventWrapperRepositoryService_1.IGitEventWrapperRepositoryService])
], GitEventRepositoryService);
exports.GitEventRepositoryService = GitEventRepositoryService;
//# sourceMappingURL=GitEventRepositoryService.js.map