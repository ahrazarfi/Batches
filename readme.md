# HOW TO SYNC THIS FORK WITH THE ORIGINAL REPO?

* add a remote repo:
    * command:
    * 1. git remote add <give a name to this remote repo> <copy orignal repo HTTP or SSH link>
    * 2. git fetch <name given to remote repo in previous branch>

    * //if you are not on your local repos default branch then checkout to it using the command:
    * 3. git checkout <local repo default branch name(usually it is master or main)>

    * 4. git merge <remote repo name from step 1>/<remote repo branch name you want to merge>

    * // doing till step 4 will only sync the local forked repo with the original repo, to push changes to your remote repo, use the command:
    * 5. git push <the remote name you want to push(generally if you cloned a repo, the default name is origin, unless and until you added remote manually or changed it later)> <the local branch you want to push>
             
            
