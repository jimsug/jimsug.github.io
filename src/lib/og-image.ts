import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import satori from 'satori';
import sharp from 'sharp';

export async function generateOgImage(
	title: string,
	date: Date,
	siteName: string,
): Promise<Buffer> {
	const fontPath = join(process.cwd(), 'public', 'fonts', 'atkinson-bold.woff');
	const fontData = await readFile(fontPath);

	const formattedDate = date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	const svg = await satori(
		{
			type: 'div',
			props: {
				style: {
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-end',
					padding: '60px',
					background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
					fontFamily: 'Atkinson',
				},
				children: [
					{
						type: 'div',
						props: {
							style: {
								fontSize: 56,
								color: 'white',
								fontWeight: 700,
								lineHeight: 1.2,
								marginBottom: '24px',
							},
							children: title,
						},
					},
					{
						type: 'div',
						props: {
							style: {
								display: 'flex',
								justifyContent: 'space-between',
								fontSize: 28,
								color: '#a0aec0',
							},
							children: [
								{
									type: 'div',
									props: { children: formattedDate },
								},
								{
									type: 'div',
									props: { children: siteName },
								},
							],
						},
					},
				],
			},
		},
		{
			width: 1200,
			height: 630,
			fonts: [
				{
					name: 'Atkinson',
					data: fontData,
					weight: 700,
					style: 'normal',
				},
			],
		},
	);

	return Buffer.from(
		await sharp(Buffer.from(svg)).png().toBuffer(),
	);
}
