const puppeteer = require('puppeteer');
const path = require('path');

async function main() {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
    
    // 1. Initial Page Load on vite preview server
    console.log('Navigating to http://localhost:4200/...');
    await page.goto('http://localhost:4200/', { waitUntil: 'networkidle2' });
    console.log('Opened initial page');

    // Wait for button selector
    await page.waitForSelector('button', { timeout: 10000 });
    
    const btnsInfo = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      return btns.map(b => b.textContent.trim());
    });
    console.log('Found buttons after hydration:', btnsInfo);

    // Tap "Open Invitation" button
    const clicked = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      const openBtn = btns.find(b => b.textContent.toLowerCase().includes('open'));
      if (openBtn) {
        openBtn.click();
        return true;
      }
      return false;
    });
    console.log('Clicked Open Invitation button:', clicked);
    
    // Wait for bloom transition to complete (~5s)
    await new Promise(r => setTimeout(r, 5500));

    // Verify sessionStorage & localStorage items set
    const isSessionOpened = await page.evaluate(() => sessionStorage.getItem('wedding_invitation_opened'));
    const isLocalOpened = await page.evaluate(() => localStorage.getItem('wedding_invitation_opened'));
    console.log('SessionStorage opened:', isSessionOpened, '| LocalStorage opened:', isLocalOpened);

    // 2. Refresh Page (Simulating 2nd time refresh)
    console.log('Refreshing page now...');
    await page.reload({ waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 1500));

    const refreshedSession = await page.evaluate(() => sessionStorage.getItem('wedding_invitation_opened'));
    const refreshedLocal = await page.evaluate(() => localStorage.getItem('wedding_invitation_opened'));
    console.log('Refreshed SessionStorage opened:', refreshedSession, '| Refreshed LocalStorage opened:', refreshedLocal);

    // Capture screenshot of refreshed page
    await page.screenshot({ path: path.resolve(__dirname, 'page_refresh_persisted_site_preview.png') });
    console.log('Captured Refreshed Page screenshot to page_refresh_persisted_site_preview.png');

    await browser.close();
  } catch (err) {
    console.error('Error verifying page refresh:', err);
  } finally {
    process.exit(0);
  }
}

main();
