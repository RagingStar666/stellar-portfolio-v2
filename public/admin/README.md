# StaticCMS Content Management System

This directory contains the StaticCMS setup for this website. StaticCMS provides a user-friendly interface to manage all the content on the site.

## How to use

1. Navigate to `/admin` on your deployed site
2. Log in using Netlify Identity
3. Use the interface to manage your content

## Content Types Available for Editing

- **Blog Posts**: Create and edit blog articles
- **Projects**: Manage project entries 
- **Work Experience**: Update your work history
- **Legal Pages**: Edit legal documents like privacy policy, terms, etc.
- **Website Data**:
  - Certifications
  - Projects List
  - Writing Samples
  - Web Development Projects

## Local Development

When developing locally, you can use the local backend:

1. Run your site with `npm run dev`
2. Navigate to `/admin`
3. You'll be able to make changes without pushing to the repository

## Notes

- All content changes made through StaticCMS will be committed to your Git repository
- Media uploads will be stored in `public/images/uploads/`
- Remember to configure Netlify Identity on your Netlify site settings 