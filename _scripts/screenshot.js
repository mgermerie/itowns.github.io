const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const sharp = require('sharp');


const CONFIG_URL = '../itowns/examples/config.json';
const OUTPUT_DIR = 'assets/images/examples';
const SERVER_URL = 'http://localhost:8080/itowns/examples';
const BROWSER_WIDTH = 1200;
const BROWSER_HEIGHT = 652;
const IMAGE_WIDTH = 184;
const IMAGE_HEIGHT = 100;


(async () => {

	const config = require(CONFIG_URL);

	const browser = await puppeteer.launch(
		{
			headless: false,
			defaultViewport: {
				width: BROWSER_WIDTH,
				height: BROWSER_HEIGHT,
			},
		},
	);
	const page = await browser.newPage();

	for (category in config) {

		const categoryDir = `${OUTPUT_DIR}/${category}`;

		if (!fs.existsSync(categoryDir)) {

			fs.mkdirSync(categoryDir);

		}

		for (name in config[category]) {

			try {

				console.log(`📸 Capturing ${name}.html`);

				// Load url and capture the page content
				const url = `${SERVER_URL}/${name}.html`;
				await page.goto(url, { waitUntil: 'networkidle2' });
				await new Promise(res => setTimeout(res, 10000));
				const buffer = await page.screenshot(
					{
						fullPage: true,
						encoding: 'binary',
					},
				);

				// Resize the captured buffer to the image file resolution
				const resizedBuffer = await sharp(buffer)
					.resize(IMAGE_WIDTH, IMAGE_HEIGHT)
					.png()
					.toBuffer();

				// Write resized image into the output file
				const imgPath = path.join(categoryDir, `${name}.png`);
				fs.writeFileSync(imgPath, resizedBuffer);

				console.log(`✔️ Screenshot saved : ${imgPath}`);

			} catch (error) {

				console.error(
					`❌ Error while capturing ${name}.html :`,
					error.message,
				);

			}

		}

	}

	await browser.close();

})();

