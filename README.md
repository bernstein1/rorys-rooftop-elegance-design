# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/4a1efce0-117d-41b3-92ed-2ca013fd033b

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/4a1efce0-117d-41b3-92ed-2ca013fd033b) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies. This will also set up
# ESLint and Vite so the lint and build scripts work.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Environment variables

Create a `.env.local` file in the project root with your Supabase credentials:

```bash
cp .env.example .env.local
# then edit .env.local and add your values
```

The app expects `VITE_SUPABASE_URL` and `VITE_SUPABASE_KEY` to be defined.
The build process also reads `SITE_URL` to populate `public/sitemap.xml`.

## Contact form data

Messages submitted from the Contact page are stored in the Supabase table
**"Contact Us"**. Anonymous users can insert new rows but cannot read existing
messages thanks to row-level security policies.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/4a1efce0-117d-41b3-92ed-2ca013fd033b) and click on Share -> Publish.

## Custom fonts

This project expects two local font files for headings and body text:

- `public/fonts/Phosphate.woff2` (or `Phosphate.ttc`)
- `public/fonts/JubilatRegular.woff2` (or `JubilatRegular.otf`)

Copy your font files into the `public/fonts` directory with these names. The
`@font-face` rules in `src/index.css` will load them automatically.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
