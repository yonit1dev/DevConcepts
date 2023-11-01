# Basics of Git and Crucial Git Commands

- Git: a version control system to track files and folders when working on projects.
- Repository: a git workspace that tracks and manages files within a folder / project, with its own history and isolation.

## Commands

1. 'git status': gives information about the enclosing git workspace / repository if it exists. Reports 'fatal: not a git repository' error if not.
2. 'git init': initializes a git workspace / repository in the enclosing folder. Run once per project. Simply enables git in the folder.
   - Creates a hidden .git folder.
3. 'git add': used to group and add files to the staging area. Recieves a file name as a flag. Example: 'git add .' which adds all changed files to the staging area.
4. 'git commit': used to commit files from the staging area. Recieves a flag for a commit message. Example: 'git commit -m "Something"' commits files in the staging area with the message "Something".
    - Commit messages usually should be descriptive of the changes made.
5. 'git log': returns the logs for the commits in a repository. Metadata is returned about each commit.

## Commmiting

- A git commit is a checkpoint in a repository. Kind of a snapshot in time. - Usually a message is a associated. - Contains the changes from the previous commits.
- Commiting Workflow: - Working Directory ---> Staging Area ---> Repository. - Working Direcotry: the current folder that's being worked on. - Staging Area: placeholder before commiting files. - Repository: the .git folder where commits are tracked.
