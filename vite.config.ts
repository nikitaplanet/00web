import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
	base: '/',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@layouts': path.resolve(__dirname, 'src/layouts'),
		},
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
	},
	plugins: [vue()],
	server: {
		host: '0.0.0.0',
		port: 7777,
	},
	publicDir: 'static',
	build: {
		outDir: 'web',
		cssCodeSplit: true,
		rollupOptions: {
			output: {
				// 輸出目錄
				dir: 'web',
				assetFileNames: (assetInfo) => {
					if (assetInfo.name && assetInfo.name.endsWith('.css')) {
						//  CSS 文件放入 'css' 文件夾
						return 'static/css/00.[name].[hash][extname]';
					}

					//其他資源文件（如 JS）放入 'assets' 文件夾
					return 'assets/00.[name].[hash][extname]';
				},
				entryFileNames: 'static/js/00.[name].[hash].js',
				chunkFileNames: 'static/js/00.[name].[hash].js',
			},
		},
	},
});
