## Supervising Projects
- Minecraft Forge
- pdf.js
- Mozilla Voice

### Git basics for open source projects
You should never make a pull request from your `master` branch. Instead, your master branch should
try to sync with the original repo. Here's how to achieve that:

1. Fork your repo.
2. Clone the repo locally.
```
$ git clone git@github.com:choyiny/pdf.js.git
```
3. You will now see that your `origin` branch is set to your own repo:
```
$ git remote -v
origin	git@github.com:choyiny/pdf.js.git (fetch)
origin	git@github.com:choyiny/pdf.js.git (push)
```
4. We want to set the `upstream` to the original repo in `mozilla/pdf.js`.
```
$ git remote add upstream git@github.com:mozilla/pdf.js.git
```
5. Now, we can easily update our `origin/master` branch from `upstream/master`, to ensure
we always have the latest changes. As best practices, we never touch `origin/master`.
```
$ git checkout master
$ git pull upstream master
```
6. If you have a bugfix to make for `mozilla/pdf.js`, then you should make a new branch for it:
```
$ git checkout -b bugfix-branch-name
```
7. The open source project you're working on is probably very active, and their `master` will be updated often.
Ensure you always have the latest copy on `origin/master`.
```
$ git checkout master
$ git pull upstream master
```
8. To keep your pull request clean, you should always squash your commits into one. (For matplotlib and pdf.js, this is the case)
You can easily do that with the following steps, assuming you committed once.
```
$ git reset HEAD~1                 # reset to one commit ago
$ git stash                        # stash your own local changes
$ git checkout master
$ git pull upstream master         # pull upstream master to your own master
$ git checkout bugfix-branch-name
$ git merge master
$ git stash pop                    # retrieve your local changes
$ git commit -m "your original commit message"
```
