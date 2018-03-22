---
path: '/deploying-with-travis'
date: '2018-03-11'
title: 'Deploying with Travis'
lead: 'Deploying static websites with Travis'
---

```bash
#!/usr/bin/env sh
set -x

tar -czf public.tgz public && \
scp public.tgz $REMOTE_USER@$REMOTE_HOST:$REMOTE_APP_DIR && \
ssh $REMOTE_USER@$REMOTE_HOST 'bash -s' < ./untar.sh
```

`set-x` debug

```bash
#!/usr/bin/env sh
set -x

cd /var/www/hamburger.cloud && \
tar zxvf public.tgz -C .
```

```
travis encrypt-file travis --add
```
