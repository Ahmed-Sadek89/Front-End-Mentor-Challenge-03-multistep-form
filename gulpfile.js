const { task, dest, series, watch, src } = require('gulp');
const sass = require('gulp-sass')(require('sass'))

task('sass', () => {
    return src([
        'src/Styles/Sass/*.scss',
        'src/Components/**/*.scss',
        'src/Pages/**/**.scss'
        //'src/**.scss',
    ])
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(dest('src/Styles/Css'))
});

task('watch', () => {
    watch([
        'src/Styles/Sass/*.scss',
        'src/Components/**/*.scss',
        'src/Pages/**/*.scss',
        //'src/**.scss',
        
        'src/Components/**/*.tsx',
        'src/Pages/**/*.tsx',
        //'src/App.tsx',
    ],
    series('sass')
    )
})