# 🚀 Quick Deployment Guide

## Fastest Way to Deploy (Recommended)

### GitHub Pages (Free & Easy)

1. **Create a GitHub account** (if you don't have one)
   - Go to [github.com](https://github.com)
   - Sign up for free

2. **Create a new repository**
   - Click the "+" icon → "New repository"
   - Name it: `myportfolio` or any name you like
   - Make it **Public**
   - Click "Create repository"

3. **Upload your files**
   - Click "uploading an existing file"
   - Drag and drop ALL files from the `myportfolio` folder:
     - `index.html`
     - `register.html`
     - `README.md`
     - `css/` folder
     - `js/` folder
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to Settings (gear icon)
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait 1-2 minutes

5. **Your site is live! 🎉**
   - URL will be: `https://yourusername.github.io/myportfolio/`
   - Share this link with anyone!

---

## Alternative: Vercel (Also Free)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Done! Your site is live in 30 seconds

---

## Alternative: Netlify (Drag & Drop)

1. Go to [netlify.com](https://netlify.com)
2. Sign up for free
3. Drag the entire `myportfolio` folder into the upload area
4. Done! Your site is live instantly

---

## Testing Locally First

Before deploying, test locally:

1. Open `myportfolio` folder
2. Double-click `index.html`
3. It should open in your browser
4. The registration page appears first
5. Enter a name to access the portfolio

---

## Common Issues & Solutions

### Issue: "Page not found" on GitHub Pages
**Solution:** Make sure `index.html` is in the root of your repository, not in a subfolder.

### Issue: Images not loading
**Solution:** Check your internet connection. Images are loaded from Unsplash.

### Issue: Can't see the portfolio after registering
**Solution:** Clear browser cache or localStorage:
- Press F12 → Console → Type: `localStorage.clear()`
- Refresh the page

### Issue: Styles not loading
**Solution:** Make sure the folder structure is correct:
```
myportfolio/
├── index.html
├── register.html
├── css/
│   └── style.css
└── js/
    ├── main.js
    └── register.js
```

---

## Next Steps After Deployment

1. ✅ Test your live site on mobile and desktop
2. ✅ Share the URL with friends and family
3. ✅ Add the URL to your resume and social media
4. ✅ Update content as you learn new skills
5. ✅ Add more projects as you build them

---

## Need Help?

- GitHub Pages Docs: [pages.github.com](https://pages.github.com)
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)

---

**Congratulations on deploying your portfolio! 🎉**

Built by Charles Mike Quimado | University of Mindanao
