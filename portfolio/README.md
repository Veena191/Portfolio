# Billakanti Veena — Developer Portfolio

A static, dependency-free portfolio (HTML, CSS, vanilla JavaScript). No build step.

## Run it

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000     # then visit http://localhost:8000
```

## Deploy

Upload the folder as-is to GitHub Pages, Netlify, Vercel or Cloudflare Pages
(publish directory = the project root, no build command).

## Folder structure

```
index.html              page structure, SEO tags, structured data
css/
  base.css              design tokens, reset, typography, buttons
  layout.css            header, hero, section grids, footer, responsive rules
  components.css        cards, filters, skills, timeline, form, dialog, loader
js/
  config.js             email, profile links, contact-form endpoint  <- edit this
  data/profile.js       skills, experience, education, services
  data/projects.js      all 16 projects (order, text, tags, repo names)
  components/           icons, projectCard, filters, sections, nav, contactForm
  animations.js         scroll reveal, rotating words, count-up, cursor glow, loader
  main.js               entry point
assets/
  favicon.svg           B + V monogram
  visuals/              hero + 16 unique project visuals (SVG, generated)
```

## Contact form

Edit `js/config.js`:

| `formEndpoint` | What happens on submit |
| --- | --- |
| `""` (default) | Opens the visitor's email app with a pre-filled message to your email. No backend needed. |
| a URL | Sends the form as JSON (`name`, `email`, `subject`, `message`) and shows a success message on the page. |

Free option: create a form at formspree.io and paste its endpoint
(`https://formspree.io/f/yourFormId`) into `formEndpoint`.
A hidden honeypot field blocks simple spam bots.

## Check the GitHub repository links

Each project card links to `https://github.com/Veena191<repo>`. The repo
names come from your project list. If any repository has a different name,
change its `repo` value in `js/data/projects.js`. The names to check:

Criminal-Investigation-Tracker, GharRide, legals-ai, virtual-mouse, Smart-Booking,
mini-crm, legals, BusinessLabs, ecommerce_shopeasy, smart-motion-detector,
file-manager, live-search, task_manager, pinterest-clone,
student-result-calculator, tnsbackendtraining.

"View Project" opens a details panel with a button to the repository. If a
project has a live demo, add a `demo` URL to it in `projects.js` and extend
`js/components/projectCard.js` to show a "Live demo" button.

## Adding technologies

Each project's `stack` list only contains technologies named in its description.
To add more (for example HTML, CSS, JavaScript), push them into that project's
`stack` array in `js/data/projects.js`.

## Replacing the visuals

The covers in `assets/visuals/` are abstract SVG illustrations that follow the
image prompts in the portfolio plan. To use AI-generated images instead, save
them (WebP, 16:9, under 200 KB) in the same folder and change the `visual` /
`image` path in `js/data/projects.js`.

## Notes

- Fonts (Fraunces, Inter, JetBrains Mono) load from Google Fonts; without a
  connection the site falls back to Georgia and system fonts.
- Animations respect `prefers-reduced-motion`.
