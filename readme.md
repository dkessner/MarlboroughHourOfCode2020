# Marlborough Hour of Code 2020

[Live website](https://dkessner.github.io/MarlboroughHourOfCode2020)


## Tutorials

### Adding a tutorial

To add a tutorial page, you need to:

* add _tutorialName.md_ (the page content in Markdown)
* add _tutorialName.js_ (p5.js code)
* add an entry to the menu

### Tutorial content

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


