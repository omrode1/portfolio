# Resume Setup Instructions

To enable the resume viewing functionality:

1. **Place your resume file** in the `public/` folder
2. **Supported formats**: PDF, DOC, DOCX
3. **Recommended filename**: `resume.pdf` (or update the path in Hero.tsx if using different name)

## Current Configuration
The resume button in the Hero section is configured to open `/resume.pdf` in a new tab.

## Alternative File Names
If you want to use a different filename, update this line in `components/Hero.tsx`:
```tsx
onClick={() => window.open('/your-resume-filename.pdf', '_blank')}
```

## File Location
Your resume file should be placed at: `public/resume.pdf`
