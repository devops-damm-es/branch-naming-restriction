# Branch naming restriction

Damm DevOps - Gitflow branch naming restriction

This action deletes push branch when branch name is not allowed.

Branch naming allowed:

- Default branch name (usually main or master)
- develop
- feature/xxx
- release/xxx
- hotfix/xxx

## Example usage

```yaml
name: 'Damm DevOps - Gitflow branch naming restriction'
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    name: Verify Gitflow branch naming restriction
    steps:
      - name: Verify Gitflow branch naming restriction
        uses: devops-damm-es/branch-naming-restriction@v1.0.0
        with:
          admin_pat_token: ${{ secrets.ADMIN_PAT_TOKEN }}
```
# Input Variables

## admin_pat_token

Admin Personal Access Token

# Output Variables

## branch-naming-allowed

Boolean output indicating if the push branch name is allowed.