---
path: '/

```
cd /etc/nginx/sites-available
```

```
touch <domain-name>
```

```
server {
  listen 80;
  listen [::]:80;

  server_name <domain-name>;
  root /var/www/<domain-name>/dist;

  index index.html;

  location / {
    try_files $uri $uri/ =404;
  }
}
```

```
ln -s /etc/nginx/sites-available/<domain-name> /etc/nginx/sites-enabled/<domain-name>
```

```
nginx -t
```

```
certbot --nginx -d <domain-name>
```

```
mkdir /var/www/<domain-name>
```

```
sudo chown travis:travis /var/www/<domain-name>/
```

```
touch deploy.sh
```

```
#!/usr/bin/env sh
set -x

tar -czf $ARTIFACT $DIST_DIR && \
scp $ARTIFACT $REMOTE_USER@$REMOTE_HOST:$REMOTE_APP_DIR && \
ssh $REMOTE_USER@$REMOTE_HOST 'cd /var/www/<domain-name> && tar zxvf dist.tgz -C .'
```

```
chmod +x deploy.sh
```
