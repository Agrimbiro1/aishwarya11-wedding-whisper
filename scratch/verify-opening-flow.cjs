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
    
    // 1. Initial Load: InvitationGate Card
    console.log('Navigating to http://localhost:4205/...');
    await page.goto('http://localhost:4205/', { waitUntil: 'networkidle2' });
    
    // Wait for curtain to finish sliding open (~3.2s)
    await new Promise(r => setTimeout(r, 3200));

    // Capture InvitationGate Card screenshot
    await page.screenshot({ path: path.resolve(__dirname, 'invitation_gate_restored_preview.png') });
    console.log('Captured InvitationGate card screenshot to invitation_gate_restored_preview.png');

    // 2. Click "Open Invitation" to trigger GardenGateSaveTheDateTransition
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

    // Wait 3.6s into GardenGateSaveTheDateTransition drawing to capture blooming flower & archway illustration
    await new Promise(r => setTimeout(r, 3600));

    // Capture Save The Date Blooming Illustration screenshot
    await page.screenshot({ path: path.resolve(__dirname, 'save_the_date_blooming_illustration_preview.png') });
    console.log('Captured Save The Date Blooming Illustration screenshot to save_the_date_blooming_illustration_preview.png');

    await browser.close();
  } catch (err) {
    console.error('Error verifying opening flow:', err);
  } finally {
    process.exit(0);
  }
}

main();
