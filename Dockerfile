# ref. https://rara-world.com/docker-nuxt/
FROM node:12.5.0-alpine

# 環境変数定義
ENV LANG=C.UTF-8 TZ=Asia/Tokyo

# アプリケーションディレクトリの作成    
WORKDIR /app

# パッケージのインストール
RUN apk update

# nodeパッケージファイルのコピー
COPY ./package*.json ./

# nodeモジュールのインストール
RUN npm install

# アプリケーションの配置
COPY ./ .

# アプリケーションの起動設定
ENV HOST 0.0.0.0
EXPOSE 3000