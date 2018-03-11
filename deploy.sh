#!/usr/bin/env sh
set -x

tar -czf $ARTIFACT $DIST_DIR && \
scp $ARTIFACT $REMOTE_USER@$REMOTE_HOST:$REMOTE_APP_DIR && \
ssh $REMOTE_USER@$REMOTE_HOST 'cd /var/www/hamburger.cloud && tar zxvf public.tgz -C .'
