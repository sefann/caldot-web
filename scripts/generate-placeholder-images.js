// Placeholder Image Generator Script
// This script helps you create placeholder images for development

const fs = require('fs');
const path = require('path');

// Create a simple HTML file that generates placeholder images
const placeholderHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Placeholder Image Generator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: #f5f5f5;
        }
        .container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        .placeholder {
            background: linear-gradient(135deg, #0B1C3F 0%, #FFA500 100%);
            border-radius: 8px;
            padding: 20px;
            text-align: center;
            color: white;
            min-height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: transform 0.3s ease;
        }
        .placeholder:hover {
            transform: scale(1.05);
        }
        .placeholder h3 {
            margin: 0 0 10px 0;
            font-size: 18px;
        }
        .placeholder p {
            margin: 0;
            font-size: 14px;
            opacity: 0.9;
        }
        .download-btn {
            background: #FFA500;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
            font-weight: bold;
        }
        .download-btn:hover {
            background: #e69500;
        }
        .instructions {
            background: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="instructions">
        <h1>🖼️ Caldot Website Placeholder Images</h1>
        <p>Click on any placeholder below to download it as an image. These are for development purposes only.</p>
        <p><strong>Instructions:</strong></p>
        <ol>
            <li>Click on a placeholder to download it</li>
            <li>Save it to the appropriate folder in <code>public/images/</code></li>
            <li>Replace with your actual images when ready</li>
        </ol>
    </div>

    <div class="container">
        <div class="placeholder" onclick="downloadImage('Logo', 200, 200)">
            <h3>Logo</h3>
            <p>200x200px - PNG with transparent background</p>
            <button class="download-btn">Download Logo</button>
        </div>
        
        <div class="placeholder" onclick="downloadImage('Hero Background', 1920, 1080)">
            <h3>Hero Background</h3>
            <p>1920x1080px - Professional business imagery</p>
            <button class="download-btn">Download Hero</button>
        </div>
        
        <div class="placeholder" onclick="downloadImage('General Merchandise', 600, 400)">
            <h3>General Merchandise</h3>
            <p>600x400px - Product/merchandise imagery</p>
            <button class="download-btn">Download</button>
        </div>
        
        <div class="placeholder" onclick="downloadImage('Procurement', 600, 400)">
            <h3>Procurement</h3>
            <p>600x400px - Supply chain/procurement imagery</p>
            <button class="download-btn">Download</button>
        </div>
        
        <div class="placeholder" onclick="downloadImage('Automobile Maintenance', 600, 400)">
            <h3>Automobile Maintenance</h3>
            <p>600x400px - Car maintenance/repair imagery</p>
            <button class="download-btn">Download</button>
        </div>
        
        <div class="placeholder" onclick="downloadImage('Logistics', 600, 400)">
            <h3>Logistics</h3>
            <p>600x400px - Transportation/trucking imagery</p>
            <button class="download-btn">Download</button>
        </div>
        
        <div class="placeholder" onclick="downloadImage('Interior Decoration', 600, 400)">
            <h3>Interior Decoration</h3>
            <p>600x400px - Interior design/decoration imagery</p>
            <button class="download-btn">Download</button>
        </div>
        
        <div class="placeholder" onclick="downloadImage('Team Member', 300, 300)">
            <h3>Team Member</h3>
            <p>300x300px - Professional headshot</p>
            <button class="download-btn">Download</button>
        </div>
        
        <div class="placeholder" onclick="downloadImage('Project', 800, 600)">
            <h3>Project</h3>
            <p>800x600px - Project showcase imagery</p>
            <button class="download-btn">Download</button>
        </div>
    </div>

    <script>
        function downloadImage(title, width, height) {
            // Create a canvas element
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            canvas.width = width;
            canvas.height = height;
            
            // Create gradient background
            const gradient = ctx.createLinearGradient(0, 0, width, height);
            gradient.addColorStop(0, '#0B1C3F');
            gradient.addColorStop(1, '#FFA500');
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
            
            // Add text
            ctx.fillStyle = 'white';
            ctx.font = 'bold 24px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(title, width/2, height/2);
            
            ctx.font = '16px Arial';
            ctx.fillText(\`\${width}x\${height}px\`, width/2, height/2 + 30);
            
            // Convert to blob and download
            canvas.toBlob(function(blob) {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = \`\${title.toLowerCase().replace(' ', '-')}-\${width}x\${height}.png\`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            });
        }
    </script>
</body>
</html>
`;

// Write the HTML file
const scriptsDir = path.join(__dirname);
if (!fs.existsSync(scriptsDir)) {
    fs.mkdirSync(scriptsDir, { recursive: true });
}

fs.writeFileSync(path.join(scriptsDir, 'placeholder-generator.html'), placeholderHTML);

console.log('✅ Placeholder image generator created!');
console.log('📁 File location: scripts/placeholder-generator.html');
console.log('🌐 Open this file in your browser to generate placeholder images');
console.log('');
console.log('📋 Next steps:');
console.log('1. Open scripts/placeholder-generator.html in your browser');
console.log('2. Click on placeholders to download images');
console.log('3. Save images to the appropriate folders in public/images/');
console.log('4. Replace with your actual images when ready');
