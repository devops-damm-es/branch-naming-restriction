const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
    try {
        const branchNamingAllowed = "branch-naming-allowed"

        const validEvent = ["push"];
        const eventName = github.context.eventName;
        core.info("Event name: " + eventName);
        if (validEvent.indexOf(eventName) < 0) {
            core.setFailed("Invalid event: " + eventName);
            core.setOutput(branchNamingAllowed, false);
            return;
        }

        const defaultBranchName = core.getInput("default-branch-name");;
        core.info("Default branch name: " + defaultBranchName);
        const branch = github.context.payload.ref.replace('refs/heads/', '');
        const regex = RegExp("(^" + defaultBranch + "$)|(^develop$)|(^feature\/.*)|(^release\/.*)|(^hotfix\/.*)");
        core.info("Regex: " + regex);
        if (!regex.test(branch)) {
            core.setFailed("Branch " + branch + " failed to pass match regex - " + regex);
            core.setOutput(branchNamingAllowed, false);
            return;
        }
        core.setOutput(branchNamingAllowed, true);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
