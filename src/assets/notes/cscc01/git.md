## Intro
- If you know SVN, you basically know most of what's covered in this tutorial. In this course we are going to use Github
to host our git repos. You can see the general differences between SVN and git [here](https://help.github.com/en/articles/what-are-the-differences-between-subversion-and-git)
- For this topic, material presented here is an extension of what is provided in class. Although I highly recommend you to practice this in your group project, you are not required to do so in this course.

## Prerequisites
- [Installing git](https://lmgtfy.com/?q=install+git) on your computer.
- Create an account on [Github](https://github.com), or login to your existing account.

## Basics
### PUSH!
`git push` is the only command that will update the remote repository (on Github). `git commit` will only store the commit locally. My rule of thumb after creating/modifying a file (eg. `a.txt`) is the follows
```
$ git add test.py
$ git commit -m "fixed stack overflow in test code"
$ git push
```
Notice that I push right after I commit.

## On Committing

### Commit Messages
You should always aim for clear commit messages. [Relevant XKCD comic](https://xkcd.com/1296/).

Bad Example:
```
$ git commit -m "changed files"
```

Better Example:
```
$ git commit -m "Fix typo in Week 1 tutorial notes"
```

### Don't commit everything
Some files are not necessary in the repo. For example, compiled files like `*.pyc` or `*.class`. You can
ignore specific files by putting it in a file in the root directory of the repo called `.gitignore`.
You can find templates for the `.gitignore` files [here](https://github.com/github/gitignore).

Passwords, private keys and secret files should generally not be commited either and should be put in `.gitignore` as well.

## On Branching
### Best Practices
You will never be the only person working on the repo in a project. It will be a mess if everyone works on only `master`.
Branching allows you to isolate your work from others.

When your branch is ready to be merged back to `master`,

1. Ensure your copy is updated with the latest updates in `master`. (Someone in your team might have already merged something in)
```
$ git merge master
```
2. Resolve all merge conflicts
3. Test everything works with the changes merged from master
4. Either open a pull request on Github or merge to master manually.
```
$ git checkout master
$ git merge yourbranch
```
5. If you merge, push!

### Shortcuts
You don't always want to do `git push origin your-super-long-branch-name`.
To make your lives easier, you could always do
```
$ git push --set-upstream origin your-super-long-branch-name
```
once, and then you can use `git push` subsequently.

## On Merging
Goal: you want to merge a feature branch into `master`.

1. Ensure you have pushed everything to your feature branch. `git status` should look like
```
On branch featurebranch
Your branch is up to date with 'origin/featurebranch'.
nothing to commit, working tree clean
```
2. If you haven't committed and pushed yet, do
```
$ git add .
$ git commit -m "<commit message>"
$ git push
```
3. Switch branches back to master
```
$ git checkout master
```
4. merge in the feature branch
```
$ git merge featurebranch
```
5. If you merge in command line and there is a conflict, you need to fix it manually.

Original
```
<<<<<<< HEAD
print('I love C01')
=======
print('C01 is fun')
>>>>>>> my-branch
```
After
```
print('I love C01, C01 is cool.')
```
6. `git push origin master`

## On messing up
Common commands to fix up your git command mistakes, or just any other mistakes.

### Remove file from commit
If you accidentally did `git add .` and added some files you don't want, you can unstage it.
```
$ git rm --cached <file path>
```

### Already in repo
If you have a file that is supposedly in `.gitignore` but is already in the remote repository, you can also use the same command.
```
$ git rm --cached <file path>
```

### Discard all local changes
`git reset --hard` should do the trick. For more undo possibilities, read it up [here](https://docs.gitlab.com/ee/topics/git/numerous_undo_possibilities_in_git/).

### Accidentally pushing to the wrong branch
Sometimes you accidentally push to the wrong branch. It happens. You can take steps to correct that. Assume you have pushed 3 commits to the wrong branch:

1. Reset local branch to the state of 3 commits ago.
```
$ git reset HEAD~3
```
2. Force push to the branch. (Exercise with caution as this rewrites history.)
```
$ git push origin +branchname
```
Note the `+` before `branchname`. It signifies force pushing.

## Additional notes on merging
Many people like to keep `master` clean, and consolidate feature branch commits into 1. This process is called squashinng. You could read it up [here](https://gist.github.com/patik/b8a9dc5cd356f9f6f980).

## On Two Factor Authentication with Github
I definitely recommend you to have 2FA enabled on Github. If you choose to do that, using `git` in commandline will be a bit different.
If you choose to clone with https, your password will need to be generated [instructions](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line).
I recommend cloning with ssh, which is a bit more complicated, but is definitely worth it. Check it out [here](https://help.github.com/en/articles/connecting-to-github-with-ssh).
