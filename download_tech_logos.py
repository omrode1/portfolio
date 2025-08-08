#!/usr/bin/env python3
"""
Script to download technology logos for the portfolio website.
Downloads official logos from reliable sources and saves them as PNG files.
"""

import os
import requests
from pathlib import Path
import time

# Define the tech logos to download with their URLs
TECH_LOGOS = {
    # Languages
    'python': 'https://www.python.org/static/community_logos/python-logo-generic.svg',
    'cpp': 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
    'bash': 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg',
    
    # Frameworks
    'pytorch': 'https://pytorch.org/assets/images/pytorch-logo-dark.svg',
    'tensorrt': 'https://developer.nvidia.com/sites/default/files/akamai/cuda/images/logo/tensorrt-logo.png',
    'fastapi': 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png',
    'opencv': 'https://opencv.org/wp-content/uploads/2022/11/opencv-logo-220.png',
    'ros2': 'https://www.ros.org/wp-content/uploads/2019/04/ros_logo.png',
    
    # DevOps
    'docker': 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png',
    'kubernetes': 'https://kubernetes.io/images/kubernetes-horizontal-color.png',
    'git': 'https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png',
    'vercel': 'https://assets.vercel.com/image/upload/q_auto/front/assets/design/vercel-triangle-black.svg',
    'aws': 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    
    # Tools
    'kafka': 'https://kafka.apache.org/logos/kafka_logo--type.png',
    'redis': 'https://redis.io/images/redis-white.png',
    'prometheus': 'https://prometheus.io/assets/prometheus_logo_grey.svg',
    'grafana': 'https://grafana.com/static/assets/img/grafana_icon.svg',
    'jetson': 'https://developer.nvidia.com/sites/default/files/akamai/cuda/images/logo/jetson-logo.png',
    'embedded': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/2560px-Arduino_Logo.svg.png'
}

def download_logo(url, filename, output_dir):
    """Download a logo from URL and save it to the specified directory."""
    try:
        print(f"Downloading {filename}...")
        response = requests.get(url, timeout=30)
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
        print(f"✗ Failed to download {filename}: {e}")
        return False
    except Exception as e:
        print(f"✗ Error saving {filename}: {e}")
        return False

def main():
    """Main function to download all tech logos."""
    # Set up paths
    script_dir = Path(__file__).parent
    output_dir = script_dir / "public" / "images" / "tech-logos"
    
    print("🚀 Starting tech logo download...")
    print(f"📁 Output directory: {output_dir}")
    print()
    
    # Track success/failure
    successful = 0
    failed = 0
    
    # Download each logo
    for filename, url in TECH_LOGOS.items():
        success = download_logo(url, filename, output_dir)
        if success:
            successful += 1
        else:
            failed += 1
        
        # Small delay to be respectful to servers
        time.sleep(0.5)
    
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