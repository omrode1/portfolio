#!/usr/bin/env python3
"""
Script to download the remaining tech logos (kafka and tensorrt).
"""

import requests
from pathlib import Path
import time

# Remaining logos with multiple fallback URLs
REMAINING_LOGOS = {
    'kafka': [
        'https://upload.wikimedia.org/wikipedia/commons/0/05/Apache_kafka.svg',
        'https://upload.wikimedia.org/wikipedia/commons/5/53/Apache_kafka.svg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Apache_kafka.svg/1200px-Apache_kafka.svg.png'
    ],
    'tensorrt': [
        'https://upload.wikimedia.org/wikipedia/commons/2/21/TensorFlow_logo.svg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/TensorFlow_logo.svg/1200px-TensorFlow_logo.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/1/11/TensorFlowLogo-current.svg'
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
    """Main function to download remaining tech logos."""
    # Set up paths
    script_dir = Path(__file__).parent
    output_dir = script_dir / "public" / "images" / "tech-logos"
    
    print("🚀 Downloading remaining tech logos...")
    print(f"📁 Output directory: {output_dir}")
    print()
    
    # Track success/failure
    successful = 0
    failed = 0
    
    # Download each logo
    for filename, urls in REMAINING_LOGOS.items():
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
        print("   - Manually download failed logos from their official websites")
        print("   - Use alternative logo sources")

if __name__ == "__main__":
    main() 