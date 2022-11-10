import webpack from "webpack-stream";
import path from "path";
export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "JS",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(webpack({
        mode: app.isBuild ? 'production' : 'development',
        entry: './src/js/app.js',
        output: {
            // filename: 'app.min.js',
            // path: path.resolve(__dirname, 'dist'),
             filename: 'main.js',
           // filename: 'main.js',
      
        },
        optimization: {
          splitChunks: {
            chunks: 'all',
            filename: 'vendors.js',
          },
        },
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream());
}