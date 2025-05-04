# AWS User Group Toolkit Website

This repository contains the source code for the [AWS User Group Toolkit](https://usergroup-toolkit.com) website, built with Hugo and Tailwind CSS.

## Overview

The AWS User Group Toolkit website serves as a central hub for our open-source projects designed to help AWS User Group leaders manage and grow their communities. The site features:

- Information about our projects (Otto Slackbot, Community Dashboard)
- Blog with articles, tutorials, and resources for user group leaders
- About section with details about our mission and team
- Contribution guidelines for those who want to get involved

## Technologies Used

- [Hugo](https://gohugo.io/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [GitHub Pages](https://pages.github.com/) - Hosting platform
- [GitHub Actions](https://github.com/features/actions) - CI/CD for automated deployments

## Local Development

### Prerequisites

- [Hugo Extended](https://gohugo.io/getting-started/installing/) (v0.111.3 or later)
- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/)

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/aws-user-group-toolkit/website.git
   cd website
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   hugo server -D
   ```

4. Open your browser and navigate to `http://localhost:1313`

### Project Structure

```
aws-user-group-toolkit-website/
├── assets/                  # Raw assets (CSS, JS, images)
│   └── css/                 # CSS files processed by PostCSS
├── content/                 # Content files (markdown)
│   ├── blog/                # Blog posts
│   └── about/               # About section
├── data/                    # Data files used by Hugo
├── layouts/                 # HTML templates
│   ├── _default/            # Default templates
│   └── partials/            # Reusable template parts
├── static/                  # Static assets
│   ├── images/              # Image assets
│   ├── js/                  # JavaScript files
│   └── css/                 # Compiled CSS
├── themes/                  # Hugo themes
│   └── ugtktheme/           # Custom theme for the site
├── .github/                 # GitHub configuration
│   └── workflows/           # GitHub Actions workflows
├── config.toml              # Hugo configuration
├── package.json             # npm package configuration
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── README.md                # Project documentation
```

## Adding Content

### Blog Posts

To add a new blog post:

1. Create a new markdown file in the `content/blog/` directory:
   ```
   hugo new content blog/my-new-post.md
   ```

2. Edit the front matter and content of the file:
   ```markdown
   ---
   title: "My New Post"
   date: 2025-05-03T12:00:00-00:00
   draft: false
   description: "Description of my new post"
   image: "/images/blog/my-post-image.jpg"
   tags: ["tag1", "tag2"]
   ---

   # My New Post

   Content goes here...
   ```

3. Add any images to the `static/images/blog/` directory.

### Pages

To add a new page:

1. Create a new markdown file in the appropriate content directory:
   ```
   hugo new content about/team.md
   ```

2. Edit the front matter and content of the file.

## Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process is handled by GitHub Actions as defined in `.github/workflows/gh-pages.yml`.

To manually deploy the site:

1. Build the site:
   ```
   hugo --minify
   ```

2. The built site will be in the `public/` directory, which can be deployed to any static hosting service.

## Contributing

We welcome contributions to the AWS User Group Toolkit website! Please see our [Contributing Guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- GitHub: [aws-user-group-toolkit](https://github.com/aws-user-group-toolkit)
- Twitter: [@awsusergroups](https://twitter.com/awsusergroups)
- Email: [contact@usergroup-toolkit.com](mailto:contact@usergroup-toolkit.com)
