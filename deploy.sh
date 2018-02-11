#!/usr/bin/env sh
set -x

tar -czf public.tgz public && \
scp public.tgz $REMOTE_USER@$REMOTE_HOST:$REMOTE_APP_DIR && \
ssh $REMOTE_USER@$REMOTE_HOST 'bash -s' < ./untar.sh
