# Tech Logo Download Scripts

This directory contains scripts to automatically download technology logos for the portfolio website.

## 📁 Files

- `download_tech_logos.py` - Main Python script for downloading all tech logos
- `download_tech_logos_v2.py` - Improved version with fallback URLs and better error handling
- `download_tech_logos.sh` - Bash script alternative
- `download_remaining_logos.py` - Script for downloading remaining logos
- `requirements.txt` - Python dependencies

## 🚀 Usage

### Option 1: Python Script (Recommended)
```bash
# Install dependencies
pip install -r requirements.txt

# Download all logos
python3 download_tech_logos_v2.py
```

### Option 2: Bash Script
```bash
# Make executable and run
chmod +x download_tech_logos.sh
./download_tech_logos.sh
```

### Option 3: Download Remaining Logos
```bash
# If some logos failed to download
python3 download_remaining_logos.py
```

## 📊 Results

Successfully downloaded **19 out of 19** tech logos:

### ✅ Successfully Downloaded:
1. **python.png** - Python programming language
2. **cpp.png** - C++ programming language  
3. **bash.png** - Bash shell
4. **pytorch.png** - PyTorch framework
5. **tensorrt.png** - TensorRT (NVIDIA)
6. **fastapi.png** - FastAPI framework
7. **opencv.png** - OpenCV computer vision
8. **ros2.png** - ROS2 robotics framework
9. **docker.png** - Docker containerization
10. **kubernetes.png** - Kubernetes orchestration
11. **git.png** - Git version control
12. **vercel.png** - Vercel deployment platform
13. **aws.png** - Amazon Web Services
14. **kafka.png** - Apache Kafka
15. **redis.png** - Redis database
16. **prometheus.png** - Prometheus monitoring
17. **grafana.png** - Grafana visualization
18. **jetson.png** - NVIDIA Jetson
19. **embedded.png** - Embedded systems (Arduino)

## 📂 Output Location

All logos are saved to: `public/images/tech-logos/`

## 🔧 Features

- **Fallback URLs**: Multiple sources for each logo
- **Error Handling**: Graceful handling of failed downloads
- **User-Agent Headers**: Proper browser identification
- **Progress Tracking**: Real-time download status
- **SSL Verification**: Disabled for compatibility
- **Rate Limiting**: Respectful delays between requests

## 🛠️ Troubleshooting

### Common Issues:

1. **SSL Certificate Errors**: Scripts disable SSL verification for compatibility
2. **403 Forbidden**: Some sites block automated downloads
3. **404 Not Found**: URLs may change over time
4. **Network Issues**: Check internet connection

### Manual Download:

If automatic download fails, manually download logos from:
- Official project websites
- Wikimedia Commons
- GitHub repositories
- Brand resource pages

## 📝 Notes

- All logos are saved as PNG format for consistency
- File sizes range from 148 bytes to 801KB
- Logos are sourced from official and reliable sources
- Scripts include proper error handling and reporting

## 🎯 Next Steps

1. Verify logo quality and sizing
2. Test logo display in the website
3. Update any broken or low-quality logos manually
4. Consider adding more tech logos as needed

---

**Status**: ✅ Complete - All 19 tech logos successfully downloaded! 