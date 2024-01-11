import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default (env, options) => {
    const isProd = options.mode === 'production';
    return {
        mode: 'development',
        entry: './src/app.js',
        devtool: !isProd ? 'source-map' : false,
        devServer: {
            // devMiddleware: {
            //     writeToDisk: true
            // },
            static: resolve(__dirname, 'dist'),
            compress: true,
            port: 3000,
        },
        output: {
            path: resolve(__dirname, 'dist'),
            filename: 'app.bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.(?:js|mjs|cjs)$/i,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: { presets: ['@babel/preset-env'] },
                    },
                },
                {
                    test: /\.css$/i,
                    exclude: /node_modules/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: !isProd,
                            },
                        },
                    ],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: !isProd,
                                sassOptions: {
                                    outputStyle: 'compressed',
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    type: 'asset',
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Hello webpack',
                template: join(__dirname, 'src', 'index.html'),
                scriptLoading: 'defer',
                minify: true,
                hash: true,
            }),
            new CopyPlugin({
                patterns: [
                    {
                        from: resolve(__dirname, 'public'),
                        to: resolve(__dirname, 'dist'),
                    },
                ],
            }),
            new ESLintPlugin()
        ],
        optimization: {
            minimizer: [
                new ImageMinimizerPlugin({
                    minimizer: {
                        implementation: ImageMinimizerPlugin.imageminMinify,
                        options: {
                            plugins: [
                                ['gifsicle', { interlaced: true }],
                                ['jpegtran', { progressive: true }],
                                ['optipng', { optimizationLevel: 5 }],
                                [
                                    'svgo',
                                    {
                                        plugins: [
                                            {
                                                name: 'preset-default',
                                                params: {
                                                    overrides: {
                                                        removeViewBox: false,
                                                        addAttributesToSVGElement:
                                                            {
                                                                params: {
                                                                    attributes:
                                                                        [
                                                                            {
                                                                                xmlns: 'http://www.w3.org/2000/svg',
                                                                            },
                                                                        ],
                                                                },
                                                            },
                                                    },
                                                },
                                            },
                                        ],
                                    },
                                ],
                            ],
                        },
                    },
                }),
            ],
        },
    };
};
