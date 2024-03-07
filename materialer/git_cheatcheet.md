<!-- JS use if these pages are used as githubpages. can be deleted if used elsewhere -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="../script.js"></script>

# GIT CHEAT SHEET

## Basics
- Working directory, Staging area, Git Repository

- git help \<command\> : get help for a git command   
- git init : creates a new git repo, with data stored in the .git directory
- git status : tells you what’s going on
- git add \<filename\> : adds files to staging area
- git commit -m "commit msg" : creates a new commit
- git commit -m "commint msg" -a : adds all modified files to staging area, and creates a new commit.
- git log : shows a flattened log of history
- git log -oneline: shows a log of history in onliners
- git log --all --graph --decorated : show a log with all branches and a decorated graph 
- git checkout \<revision\> : updates HEAD and current branch
- git config --global core.editor "nano" : set the deafult editor to nano     

    

![](../img/gitdatamodel.jpg)


<!--
![](../img/git_tavle.JPG)
-->
## Branching and merging
- git branch: shows branches
- git branch \<name\>: creates a branch
- git branch -d \<branch name\>: delete branch
- git checkout -b <name>: creates a branch and switches to it
- git merge \<branch name\>: merges into current branch
<!--
    ## Configuration
    - .gitignore: file for specifying which files should not be included in commits
        - [example (simple):](gitignore_simple.txt)
        - [example (IntelliJ):](gitignore.txt)

    ## Remotes (Github)
    - git remote: list remotes
    - git remote -v: list push and fetch remote url
    - git remote set-url \<remote\> \<url\>: changes the online repository url
    - git remote add \<remote\> \<url\>: add a reference to the remote repository 
    - git push \<remote\> \<local branch\>:\<remote branch\>: send objects to remote, and update remote reference
    - git fetch: retrieve objects/references from a remote
    - git pull: same as git fetch; git merge
    - git clone: download repository from remote
    - git branch -r: list remote branches

-->

