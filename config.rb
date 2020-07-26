activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  # blog.prefix = "blog"

  # blog.permalink = "{year}/{month}/{day}/{title}.html"
  # Matcher for blog source files
  # blog.sources = "{year}-{month}-{day}-{title}.html"
  # blog.taglink = "tags/{tag}.html"
  # blog.layout = "layout"
  # blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  # blog.year_link = "{year}.html"
  # blog.month_link = "{year}/{month}.html"
  # blog.day_link = "{year}/{month}/{day}.html"
  blog.default_extension = ".md"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  # Enable pagination
  blog.paginate = true
  blog.per_page = 10
  blog.page_link = "page/{num}"

  blog.layout = "article_layout"
end

# Reload the browser automatically whenever files change
# configure :development do
#   activate :livereload
# end

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

helpers do
  def url_prefix
    if build?
      '/note'
    else
      ''
    end
  end
end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  set :http_prefix, '/note'
end

activate :external_pipeline,
  name: :webpack,
  command: build? ? 'npm run build' : 'npm run watch',
  source: ".tmp/dist",
  latency: 1

configure :production do
  activate :minify_html
  activate :asset_hash, ignore: [/\.jpg\Z/, /\.png\Z/, /\.svg\Z/]
end

activate :deploy do |deploy|
  deploy.deploy_method = :git
end

## GitHub Flavored Markdown
set :markdown, tables: true, autolink: true, gh_blockcode: true, fenced_code_blocks: true
set :markdown_engine, :redcarpet

page "/note.html"
