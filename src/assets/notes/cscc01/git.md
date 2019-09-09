## Intro
- If you know SVN, you basically know most of what's covered in this tutorial. In this course we are going to use Github
to host our git repos. You can see the general differences between SVN and git [here](https://help.github.com/en/articles/what-are-the-differences-between-subversion-and-git)

## Prerequisites
- [Installing git](https://lmgtfy.com/?q=install+git) on your computer.
- Create an account on [Github](https://github.com), or login to your existing account.

## On Commit Messages
You should always aim for clear commit messages. [Relevant XKCD comic](https://xkcd.com/1296/). **Please ensure this is enforced in your group project.**

Bad Example:
```
$ git commit -m "changed files"
```

Better Example:
```
$ git commit -m "Fix typo in Week 1 tutorial notes"
```

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

### Shortcuts
You don't always want to do `git push origin your-super-long-branch-name`.
To make your lives easier, you could always do
```
$ git push --set-upstream origin your-super-long-branch-name
```
once, and then you can use `git push` subsequently.

## On Two Factor Authentication with Github
I definitely recommend you to have 2FA enabled on Github. If you choose to do that, using `git` in commandline will be a bit different.
If you choose to clone with https, your password will need to be generated [instructions](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line).
I recommend cloning with ssh, which is a bit more complicated, but is definitely worth it. Check it out [here](https://help.github.com/en/articles/connecting-to-github-with-ssh).
