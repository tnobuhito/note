# note

middlemanでブログを書いてGitHub Pagesで公開する

# セットアップメモ

```
cloneなど

  % git clone git@github.com:tnobuhito/note.git
  % cd note
  % bundle
  % yarn

記事のgenerate

  % middleman article post

適当に編集

  % vi source/2020-07-21-post.html.markdown

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

