import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env, { mode }) => {
    const isProd = mode === 'production';

    return {
        mode: 'development',
        entry: './src/index.js',
        devtool: !isProd ? 'source-map' : false,
        devServer: {
            devMiddleware: {
                writeToDisk: true,
            },
            static: path.resolve(__dirname, 'dist'),
            compress: true,
            port: 3000,
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.bundle.js',
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.(?:js|jsx|mjs|cjs)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ],
                            plugins: [
                                '@babel/plugin-transform-runtime',
                                '@babel/plugin-transform-react-jsx',
                            ],
                        },
                    },
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: !isProd,
                            },
                        },
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
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Webpack page',
                template: './src/index.html',
                scriptLoading: 'defer',
                minify: true,
                hash: true,
            }),
        ],
    };
};
