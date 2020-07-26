# note

middlemanでブログを書いてGitHub Pagesで公開する

# セットアップメモ

```
cloneなど

  % git clone git@github.com:tnobuhito/note.git
  % cd note
  % bundle
  % npm install

記事のgenerate

  (投稿のタイトルが「post」の場合)
  % bundle exec middleman article post

「source/articles/」配下に投稿用ファイルが作成される。
これを適宜変更する。

  % vi source/articles/2020-07-26-post.html.md

サーバ起動

  % bundle exec middleman server

ブラウザでアクセス

  http://localhost:4567/

ビルド

  % bundle exec middleman build

Github Pagesにデプロイ

  % bundle exec middleman deploy

ブラウザでGithub Pagesにアクセス

  https://tnobuhito.github.io/note/
```

