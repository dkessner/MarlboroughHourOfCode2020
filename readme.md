# Marlborough Hour of Code 2020

[Live website](https://dkessner.github.io/MarlboroughHourOfCode2020)


## Tutorials

### Adding a tutorial

To add a tutorial page, you need to:

* Add your source code (_tutorialName.js_)
* Add your tutorial content (_tutorialName.md_)
* Add an entry to the menu

### Tutorial content

Page content is written in Markdown (.md), which is translated to HTML by
Jekyll.  You can also use HTML tags within the Markdown content.

Run your p5.js program by including this at the bottom of your Markdown source.
```html
<script src="hello.js"></script>
```

The actual p5.js canvas will be placed wherever you put this element:
```html
<div id="preview"></div>
```

You can include your source code with this Jekyll tag:

    ```javascript
    {% include_relative hello.js %}
    ```

## Project Notes

### List supported languages for syntax highlighting

```console
rougify help
rougify list
```

### Find Jekyll theme files

```console
bundle info --path hacker
```

### Build with Jekyll and serve locally

From the project root directory:
```console
bundle exec jekyll serve
```

### Setup

`Gemfile`:
```ruby
source 'https://rubygems.org'
gem 'github-pages', group: :jekyll_plugins
```

[GitHub Pages instructions](https://docs.github.com/en/enterprise/2.14/user/articles/setting-up-your-github-pages-site-locally-with-jekyll)


