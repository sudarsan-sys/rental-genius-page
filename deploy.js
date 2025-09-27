#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Tech Trove Systems - Deployment Helper');
console.log('==========================================');

// Check if dist folder exists
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  console.log('❌ dist folder not found. Please run "npm run build" first.');
  process.exit(1);
}

// Copy routing files to dist
const routingFiles = [
  '_redirects',
  '.htaccess',
  'vercel.json',
  'netlify.toml',
  'firebase.json',
  'web.config',
  'nginx.conf',
  '404.html',
  'sitemap.xml',
  'robots.txt'
];

console.log('📁 Copying routing configuration files...');

routingFiles.forEach(file => {
  const sourcePath = path.join(__dirname, 'public', file);
  const destPath = path.join(distPath, file);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✅ Copied ${file}`);
  } else {
    console.log(`⚠️  ${file} not found in public folder`);
  }
});

// Create index.html backup
const indexPath = path.join(distPath, 'index.html');
if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, path.join(distPath, 'index.html.backup'));
  console.log('✅ Created index.html backup');
}

console.log('\n🎉 Deployment files ready!');
console.log('\n📋 Next steps:');
console.log('1. Upload the entire "dist" folder to your hosting service');
console.log('2. Test all routes after deployment');
console.log('3. Visit /test-routes.html to verify routing works');
console.log('\n🔧 If routing still doesn\'t work:');
console.log('- Check your hosting platform\'s documentation');
console.log('- Ensure all files in dist/ were uploaded');
console.log('- Try using HashRouter (already configured for production)');
