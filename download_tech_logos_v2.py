#!/usr/bin/env python3
"""
Improved script to download technology logos for the portfolio website.
Downloads official logos from reliable sources with proper headers and fallbacks.
"""

import os
import requests
from pathlib import Path
import time

# Define the tech logos to download with their URLs and fallbacks
TECH_LOGOS = {
    # Languages
    'python': [
        'https://www.python.org/static/community_logos/python-logo-generic.svg',
        'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
    ],
    'cpp': [
        'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
        'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.png'
    ],
    'bash': [
        'https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg',
        'https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg'
    ],
    
    # Frameworks
    'pytorch': [
        'https://pytorch.org/assets/images/pytorch-logo-dark.svg',
        'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg'
    ],
    'tensorrt': [
        'https://developer.nvidia.com/sites/default/files/akamai/cuda/images/logo/tensorrt-logo.png',
        'https://upload.wikimedia.org/wikipedia/commons/2/21/TensorFlow_logo.svg'
    ],
    'fastapi': [
        'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png',
        'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.svg'
    ],
    'opencv': [
        'https://opencv.org/wp-content/uploads/2022/11/opencv-logo-220.png',
        'https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg'
    ],
    'ros2': [
        'https://www.ros.org/wp-content/uploads/2019/04/ros_logo.png',
        'https://upload.wikimedia.org/wikipedia/commons/b/bb/Ros_logo.svg'
    ],
    
    # DevOps
    'docker': [
        'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png',
        'https://www.docker.com/wp-content/uploads/2022/03/logo-tagline.png'
    ],
    'kubernetes': [
        'https://kubernetes.io/images/kubernetes-horizontal-color.png',
        'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg'
    ],
    'git': [
        'https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png',
        'https://git-scm.com/images/logos/downloads/Git-Logo-1788C.png'
    ],
    'vercel': [
        'https://assets.vercel.com/image/upload/q_auto/front/assets/design/vercel-triangle-black.svg',
        'https://assets.vercel.com/image/upload/q_auto/front/assets/design/vercel-triangle-white.svg'
    ],
    'aws': [
        'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
        'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.png'
    ],
    
    # Tools
    'kafka': [
        'https://kafka.apache.org/logos/kafka_logo--type.png',
        'https://upload.wikimedia.org/wikipedia/commons/0/05/Apache_kafka.svg'
    ],
    'redis': [
        'https://redis.io/images/redis-white.png',
        'https://upload.wikimedia.org/wikipedia/commons/6/64/Logo-redis.svg'
    ],
    'prometheus': [
        'https://prometheus.io/assets/prometheus_logo_grey.svg',
        'https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg'
    ],
    'grafana': [
        'https://grafana.com/static/assets/img/grafana_icon.svg',
        'https://upload.wikimedia.org/wikipedia/commons/3/3b/Grafana_icon.svg'
    ],
    'jetson': [
        'https://developer.nvidia.com/sites/default/files/akamai/cuda/images/logo/jetson-logo.png',
        'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg'
    ],
    'embedded': [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/2560px-Arduino_Logo.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg'
    ]
}

def download_logo(urls, filename, output_dir):
    """Download a logo from a list of URLs, trying each until one works."""
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    for i, url in enumerate(urls):
        try:
            print(f"  Trying URL {i+1}/{len(urls)}: {url}")
            response = requests.get(url, headers=headers, timeout=30, verify=False)
            response.raise_for_status()
            
            # Create output directory if it doesn't exist
            output_dir.mkdir(parents=True, exist_ok=True)
            
            # Save the file
            file_path = output_dir / f"{filename}.png"
            with open(file_path, 'wb') as f:
                f.write(response.content)
            
            print(f"✓ Successfully downloaded {filename}")
            return True
            
        except requests.RequestException as e:
            print(f"  ✗ Failed with URL {i+1}: {e}")
            continue
        except Exception as e:
            print(f"  ✗ Error saving {filename}: {e}")
            continue
    
    print(f"✗ All URLs failed for {filename}")
    return False

def main():
    """Main function to download all tech logos."""
    # Set up paths
    script_dir = Path(__file__).parent
    output_dir = script_dir / "public" / "images" / "tech-logos"
    
    print("🚀 Starting improved tech logo download...")
    print(f"📁 Output directory: {output_dir}")
    print()
    
    # Track success/failure
    successful = 0
    failed = 0
    
    # Download each logo
    for filename, urls in TECH_LOGOS.items():
        print(f"Downloading {filename}...")
        success = download_logo(urls, filename, output_dir)
        if success:
            successful += 1
        else:
            failed += 1
        
        # Small delay to be respectful to servers
        time.sleep(1)
    
    # Summary
    print()
    print("📊 Download Summary:")
    print(f"✓ Successful: {successful}")
    print(f"✗ Failed: {failed}")
    print(f"📁 Files saved to: {output_dir}")
    
    if failed > 0:
        print("\n⚠️  Some downloads failed. You may need to:")
        print("   - Check your internet connection")
        print("   - Manually download failed logos from their official websites")
        print("   - Update URLs in the script if they've changed")

if __name__ == "__main__":
    main() 