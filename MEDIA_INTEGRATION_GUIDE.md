# Media Integration Guide for Projects

This guide explains how to properly add images, videos, and documents to your project entries in the `Projects.tsx` component.

## File Structure

Your media files should be placed in the `public` directory:

```
public/
├── images/
│   ├── instagram-posts/          # Instagram post images
│   ├── linkedin-posts/           # LinkedIn post images
│   ├── tech-logos/               # Technology logos
│   └── companies/                # Company logos
├── videos/                       # Project videos (create this folder)
├── documents/                    # Project documents (create this folder)
├── Intel_UGC_Summer2023.pdf     # Example document
└── resume.pdf                    # Resume document
```

## How to Add Media to Projects

### 1. Images

**Supported formats**: JPG, JPEG, PNG, SVG, WebP

**Example usage**:
```typescript
media: {
  images: [
    "/images/instagram-posts/PXL_20250115_083743856~2.jpg",
    "/images/linkedin-posts/post1.jpg"
  ],
  videos: [],
  documents: []
}
```

**Features**:
- Images are displayed in a 2-column grid
- Clickable to open in full size
- Hover effects with "Click to view" overlay
- Responsive design

### 2. Videos

**Supported formats**: MP4, WebM, OGV

**Example usage**:
```typescript
media: {
  images: [],
  videos: [
    "/videos/uav-obstacle-avoidance.mp4",
    "/videos/project-demo.webm"
  ],
  documents: []
}
```

**Features**:
- HTML5 video player with controls
- Preloads metadata for better performance
- Responsive design
- Hover effects

### 3. Documents

**Supported formats**: PDF, DOC, DOCX, TXT

**Example usage**:
```typescript
media: {
  images: [],
  videos: [],
  documents: [
    "/Intel_UGC_Summer2023.pdf",
    "/documents/project-report.pdf"
  ]
}
```

**Features**:
- PDF icon with hover effects
- Clickable to open in new tab
- Shows filename (without extension)
- External link indicator on hover

## File Path Rules

### ✅ Correct Paths (from public folder root):
```typescript
"/images/instagram-posts/image.jpg"     // ✅ Correct
"/videos/demo.mp4"                     // ✅ Correct  
"/Intel_UGC_Summer2023.pdf"            // ✅ Correct
```

### ❌ Incorrect Paths:
```typescript
"/public/images/image.jpg"              // ❌ Wrong - don't include "public"
"images/image.jpg"                      // ❌ Wrong - missing leading slash
"../images/image.jpg"                   // ❌ Wrong - relative paths don't work
```

## Complete Project Example

```typescript
{
  title: "My Amazing Project",
  description: "Description of the project...",
  tech: ["Python", "React", "Node.js"],
  github: "https://github.com/username/project",
  period: "January 2024 – March 2024",
  icon: <FiCpu className="w-6 h-6" />,
  gradient: "from-blue-500 to-purple-500",
  media: {
    images: [
      "/images/project-screenshots/screenshot1.jpg",
      "/images/project-screenshots/screenshot2.png"
    ],
    videos: [
      "/videos/project-demo.mp4"
    ],
    documents: [
      "/documents/project-report.pdf",
      "/documents/technical-specs.docx"
    ]
  }
}
```

## Media Display Features

### Responsive Design
- Images: 2-column grid on mobile, responsive sizing
- Videos: Full-width with proper aspect ratio
- Documents: Stacked vertically with hover effects

### Animations
- Fade-in animations when scrolling into view
- Hover effects on all media elements
- Smooth transitions and scaling effects

### Accessibility
- Alt text for images
- Proper ARIA labels
- Keyboard navigation support
- Screen reader friendly

## Best Practices

1. **Image Optimization**: Use compressed images (WebP format recommended)
2. **Video Compression**: Compress videos to reasonable file sizes
3. **File Naming**: Use descriptive, lowercase names with hyphens
4. **Document Organization**: Group related documents in subdirectories
5. **Performance**: Don't add too many media items per project (max 3-4 total)

## Troubleshooting

### Media Not Showing?
- Check file paths (must start with `/`)
- Ensure files exist in the `public` directory
- Check browser console for 404 errors
- Verify file permissions

### Images Not Loading?
- Check image format support
- Verify file size isn't too large
- Ensure correct file extension

### Videos Not Playing?
- Check video format support
- Verify video file isn't corrupted
- Check browser video codec support

### Documents Not Opening?
- Ensure PDF files are valid
- Check if browser has PDF viewer
- Verify file permissions

## Adding New Media Types

To add support for new media types (e.g., 3D models, audio files), you'll need to:

1. Update the media interface in the project type
2. Add rendering logic in the media section
3. Include appropriate icons and styling
4. Test with different file formats

## Example Media Files to Add

### Images
- Project screenshots
- UI mockups
- Architecture diagrams
- Team photos
- Demo screenshots

### Videos
- Project demonstrations
- Walkthrough videos
- Presentation recordings
- Demo reels

### Documents
- Project reports
- Technical specifications
- Research papers
- Presentation slides
- Certificates
