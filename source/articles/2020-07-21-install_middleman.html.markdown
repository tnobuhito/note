---
title: middlemanのインストール
date: 2020-07-21
tags: middleman
---

## middleman blogのインストールメモ

```
  % rbenv shell 2.5.5
  % gem install middleman
  % gem install middleman-blog
  % middleman init test_blog --template=blog
  % cd test_blog
  % bundle install
  % git init
  % git add .
  % git commit
  % vi Gemfile
  % git diff
  (実行結果)
  diff --git a/Gemfile b/Gemfile
  index 1ad62a1..4943d3f 100644
  --- a/Gemfile
  +++ b/Gemfile
  @@ -3,6 +3,7 @@ source 'https://rubygems.org'
   # Middleman Gems
   gem 'middleman', '~> 4.2'
   gem 'middleman-blog'
  +gem "middleman-autoprefixer"
   
   gem 'redcarpet', '~> 3.3', '>= 3.3.3'
  
  % bundle install
  % middleman article post

  % cat source/2020-07-21-post.html.markdown
  (実行結果)
  ---
  
  title: post
  date: 2020-07-21 08:08 UTC
  tags: 
  
  ---

以下で記事の記述を追加。

  % vi source/2012-01-01-example-article.html.markdown
  % vi source/2020-07-21-post.html.markdown

ファイル名なども変更。

サーバ起動

  % middleman server

ブラウザでアクセス。

  http://localhost:4567/

設定変更

  % vi config.rb
  (以下、追記)
  ## GitHub Flavored Markdown
  set :markdown, tables: true, autolink: true, gh_blockcode: true, fenced_code_blocks: true
  set :markdown_engine, :redcarpet
```

