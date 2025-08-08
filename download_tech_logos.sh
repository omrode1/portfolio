#!/bin/bash

# Script to download technology logos for the portfolio website
# Downloads official logos from reliable sources and saves them as PNG files

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Output directory
OUTPUT_DIR="public/images/tech-logos"

# Create output directory
mkdir -p "$OUTPUT_DIR"

echo -e "${BLUE}🚀 Starting tech logo download...${NC}"
echo -e "${BLUE}📁 Output directory: $OUTPUT_DIR${NC}"
echo

# Function to download logo
download_logo() {
    local filename=$1
    local url=$2
    
    echo -e "${YELLOW}Downloading $filename...${NC}"
    
    if curl -s -L -o "$OUTPUT_DIR/$filename.png" "$url"; then
        echo -e "${GREEN}✓ Successfully downloaded $filename${NC}"
        return 0
    else
        echo -e "${RED}✗ Failed to download $filename${NC}"
        return 1
    fi
}

# Track success/failure
successful=0
failed=0

# Download logos
echo -e "${BLUE}📥 Downloading Language Logos...${NC}"
download_logo "python" "https://www.python.org/static/community_logos/python-logo-generic.svg" && ((successful++)) || ((failed++))
download_logo "cpp" "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" && ((successful++)) || ((failed++))
download_logo "bash" "https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg" && ((successful++)) || ((failed++))

echo -e "${BLUE}📥 Downloading Framework Logos...${NC}"
download_logo "pytorch" "https://pytorch.org/assets/images/pytorch-logo-dark.svg" && ((successful++)) || ((failed++))
download_logo "tensorrt" "https://developer.nvidia.com/sites/default/files/akamai/cuda/images/logo/tensorrt-logo.png" && ((successful++)) || ((failed++))
download_logo "fastapi" "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" && ((successful++)) || ((failed++))
download_logo "opencv" "https://opencv.org/wp-content/uploads/2022/11/opencv-logo-220.png" && ((successful++)) || ((failed++))
download_logo "ros2" "https://www.ros.org/wp-content/uploads/2019/04/ros_logo.png" && ((successful++)) || ((failed++))

echo -e "${BLUE}📥 Downloading DevOps Logos...${NC}"
download_logo "docker" "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" && ((successful++)) || ((failed++))
download_logo "kubernetes" "https://kubernetes.io/images/kubernetes-horizontal-color.png" && ((successful++)) || ((failed++))
download_logo "git" "https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png" && ((successful++)) || ((failed++))
download_logo "vercel" "https://assets.vercel.com/image/upload/q_auto/front/assets/design/vercel-triangle-black.svg" && ((successful++)) || ((failed++))
download_logo "aws" "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" && ((successful++)) || ((failed++))

echo -e "${BLUE}📥 Downloading Tool Logos...${NC}"
download_logo "kafka" "https://kafka.apache.org/logos/kafka_logo--type.png" && ((successful++)) || ((failed++))
download_logo "redis" "https://redis.io/images/redis-white.png" && ((successful++)) || ((failed++))
download_logo "prometheus" "https://prometheus.io/assets/prometheus_logo_grey.svg" && ((successful++)) || ((failed++))
download_logo "grafana" "https://grafana.com/static/assets/img/grafana_icon.svg" && ((successful++)) || ((failed++))
download_logo "jetson" "https://developer.nvidia.com/sites/default/files/akamai/cuda/images/logo/jetson-logo.png" && ((successful++)) || ((failed++))
download_logo "embedded" "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/2560px-Arduino_Logo.svg.png" && ((successful++)) || ((failed++))

# Summary
echo
echo -e "${BLUE}📊 Download Summary:${NC}"
echo -e "${GREEN}✓ Successful: $successful${NC}"
echo -e "${RED}✗ Failed: $failed${NC}"
echo -e "${BLUE}📁 Files saved to: $OUTPUT_DIR${NC}"

if [ $failed -gt 0 ]; then
    echo
    echo -e "${YELLOW}⚠️  Some downloads failed. You may need to:${NC}"
    echo "   - Check your internet connection"
    echo "   - Manually download failed logos from their official websites"
    echo "   - Update URLs in the script if they've changed"
fi

echo
echo -e "${GREEN}🎉 Logo download complete!${NC}" 