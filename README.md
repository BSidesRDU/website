# Security BSides RDU Website
This repository hosts the Security [BSides RDU website](https://bsidesrdu.org).

## About BSides RDU

Security B-sides (BSides) is a community-driven framework for building events for and by information security community members.
The goal is to expand the spectrum of conversation beyond the traditional confines of space and time. It creates opportunities for individuals to both present and participate in an intimate atmosphere that encourages collaboration.
It is an intense event with discussions, demos, and interaction from participants. It is where conversations for the next-big-thing are happening.

Security is top of mind across the entire sphere of IT and the world beyond. Therefore, more people and organizations are interested in the next new thing in security. BSides is the place where these people come to collaborate, learn and share.

With many tech-companies, colleges and universities in Raleigh, Durham, Chapel Hill and surrounding areas, it is also an international center of innovation in the security industry.

## Development

Work in a branch.

```shell
git checkout -b my-new-branch
```

Edit the `docs/index.html` file directly. It's not necessary to edit `src/input.css` if you don't use anything but tailwindcss utility classes.

### Dev Server

To start the "dev server", do:

```shell
npm start
```

This starts the `server:dev` and `watch:tailwind` scripts defined in `package.json`.

The `server:dev` script starts `live-server` on the `docs` directory. Live-server will pick an open port on your machine, and launch a web browser on `localhost:{PORT}`. Keep this page open in one window, and your editor open in another window. The page will automatically reload when you save.

The `watch:tailwind` script in turn runs the `tailwind --watch` command. CSS will be compiled with tailwindcss defaults and any utility classes used in the html files. This uses the `src/input.css` file. Don't remove this file. It's not necessary to edit this file if you only use tailwindcss utility classes.

Tailwindcss is watching all HTML in the `docs` directory. When tailwindcss detects a change in one of those files, it builds the `docs/css/style.css` file. In turn, live-server will detect the change and reload the web page. Live-server is set to simply reload the css, not to "inject" it. This works best.

### The `docs` Directory

All "static" assets are in the `docs` directory. Leave them there. It's not necessary to move them or have a "build" process that compiles them. They're fine where they are.

Please do not change the `docs` directory to `public` or `html` or `static`. The `docs` directory is where github looks for the web root. When a pull request is done into the `main` branch, a GitHub Action is kicked off that builds from that branch and deploys the website.



### Suggested Global Packages

It is recommended that you have the `live-server` package installed globally. Live-server is required to run the `server:dev` script. It's not necessary, per se, but it's nice to have. However, due to its global utility, it's not installed directly in this project.

To install, do;

```shell
npm i -g live-server
```

## Deployment

Once you're happy with your changes, push them up to github.

```shell
git push -u origin my-new-branch
```

Then, on [GitHub](https://github.com/BSidesRDU/website), open a pull request (PR) against the main branch. When your PR is approved and merged, the GitHub Action will kick off that deploys the site. It's nice if someone previews your changes and code before it's merged.
