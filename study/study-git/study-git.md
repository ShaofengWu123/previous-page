---
layout: default
title: Git
---

<h1>Git</h1>
<hr>
<ul>
<li><a href="#git-definition">What is Git?</a></li>
<li><a href="#git-commands">Git commands</a></li>    
</ul>

<h2><a id="git-definition">What is Git</a></h2>
<p>
Git is a distributed open-source version control tool. Developers use Git to collaborate their work and control program versions.</p>
<br>

<h2><a id="git-commands">Git commands</a></h2>

Create a local repo in your local machine.
```
git init
```
<br>

Link your local repo with a remote repo, for example, a Github repo.
```
git remote add origin [URL]
```
<br>

Update the code in your local repo and workspace by pulling codes from remote repo.For example, if you want to pull codes from the linked remote repo's main branch, you should use _git pull origin master_ command. 
```
git pull [origin] [branch]
```
<br>

View the current status of local repo and workspace. This command can be used to view if there is any untracked files or modified files. 
```
git status
```
<br>

Add some files to the index. You can use _git add -A_ command to add all files to the index. Note: Files in index are tracked files, which means they will be committed to local repo using _git commit_ command. 
If you want to add only one file to the index, use _git add filename_ command.
```
git add [options] [filename]
```
<br>

Commit file in index to local repo. Frequently used command is _git commit -a -m "description"_, which can commit all tracked files to local repo with specific description.
```
git commit [options]
```
<br>

Push codes to update a branch of a remote repo. _git push origin main_ can update your linked remote repo.
```
git push [origin] [branch]
``` 
<br>

Create a new branch from current branch in local repo.
```
git branch [branchname]
```
<br>

Merge a branch into current branch. If I am currently in main branch, _git merge anotherbranch_ can merge anotherbranch branch to main branch.
```
git merge [another branchname]
```
<br>

_git checkout_ can be used to:
<ul>
<li>Change to another branch by <i>git checkout branchname</i>.</li>
<li>Revert back to previous version by <i>git checkout version-hash</i>.</li>    
</ul>
```
git checkout [contents]
```
<br>

View version log of the program. Version hash can be view by this command.
```
git log
```
<br>



<p><a href="https://shaofengwu123.github.io/study/study-main.html">Back</a></p>
