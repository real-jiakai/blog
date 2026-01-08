---
title: "Solution for Git Push Error 'remote: fatal: did not receive expected object'"
date: 2023-09-16T09:56:21+08:00
tags: ['git','github']
slug: "fix-git-push-fatal-error-did-not-receive-expected-object"
summary: "Introducing the solution for git push error 'remote: fatal: did not receive expected object'"
showtoc: true
---

## Background

After arriving at Guangxi Minzu University, when I used Keep's outdoor running feature to record my daily morning runs and excitedly opened my self-hosted [running page](https://running.gujiakai.top) website, I found that new running records weren't showing up as usual. The website's last update date was September 9th, when I used Keep's indoor running feature at the hotel that morning.

![Keep outdoor running data not syncing](https://vip2.loli.net/2023/09/16/PRqXOhnuF4YMHNJ.webp)

Keep's app redesign should have happened during the summer of 2023, around July. At that time at home, I used the indoor running feature daily. Although map data couldn't be obtained, running records could still be continuously retrieved and updated on the website.

Other users in the original project's discussion area also encountered errors with Keep data not syncing. See [Keep data fetching error #484](https://github.com/yihong0618/running_page/issues/484)

![User replies](https://vip2.loli.net/2023/09/16/eRYpKVh3DNsUMSn.webp)

This is a common problem with domestic software - they like to hold user data hostage. I admit that Keep's user experience is more user-friendly than the currently used foreign Strava app, but the behavior of locking user data immediately negates its advantages.

So I prepared to create a new repository and deploy it, keeping the original website while archiving the original repository.

When I finished configuring the settings and was ready to push the content to a new GitHub repository, an error appeared: 'remote: fatal: did not receive expected object'.

## Steps to Reproduce

```bash
# Clone remote repository locally, getting only the latest commit (shallow clone)
git clone https://github.com/yihong0618/running_page.git --depth=1

# Modify configuration items

# Add all changes to Git staging area
git add .
# Commit staged changes with message "xxx"
git commit -m "xxx"
# Push local master branch to remote repository and set remote as default upstream
git push -u origin master
```

After these operations, I got the following error:

![git push error](https://vip2.loli.net/2023/09/16/S5qDHUwpgQ7vsKG.webp)

## Solution

There was a reply on Stack Overflow about this:

![Stack Overflow user reply](https://vip2.loli.net/2023/09/16/agG97tbZVrQPJqm.webp)

- [git 'did not receive expected object' error when trying to update GitHub repo](https://stackoverflow.com/questions/76470864/git-did-not-receive-expected-object-error-when-trying-to-update-github-repo)

For my scenario, I chose Jon Mair's solution - directly delete the .git folder, then perform the following operations. Finally succeeded in pushing the repository to GitHub.

```bash
# Initialize a new Git repository, creating a new .git directory to store repository information
git init
# Add all changes to Git staging area
git add .
# Commit staged changes with message "xxx"
git commit -m "initial commit"
# Push local master branch to remote repository and set remote as default upstream
git push -u origin master
```

GPT-4 analysis:

![GPT-4 analysis](https://vip2.loli.net/2023/09/16/DZ5xA4N7Fqr2Cwu.webp)
