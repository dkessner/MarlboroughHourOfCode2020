# Marlborough Hour of Code 2020

[Live website](https://dkessner.github.io/MarlboroughHourOfCode2020)


## Tutorials

### Adding a tutorial

To add a tutorial page, you need to:

* Add your source code (`tutorial_name.js`)
* Add your tutorial content (`tutorial_name.md`)
* Add an entry to the menu (in `_includes/menu.html`)

### Tutorial content

Page content is written in Markdown (.md), which is translated to HTML by
Jekyll.  You can also use HTML tags within the Markdown content.

Include the metadata block at the top of your page (this tells Jekyll to
use `_layouts/tutorial.html` as a template):

```yaml
---
layout: tutorial
---
```

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

To embed a YouTube video, click Share/Embed on the video page to get the HTML
code (`<iframe ...>`) that you can copy into your page.


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


