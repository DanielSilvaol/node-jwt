const gulp = require('gulp');
const eslint = require('gulp-eslint');
const nodemon = require('gulp-nodemon');

// Tarefa para linting do código usando ESLint
gulp.task('lint', () => {
    return gulp.src(['**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

// Tarefa para iniciar o servidor usando Nodemon
gulp.task('start', () => {
    nodemon({
        script: 'src/index.js',
        ext: 'js',
        env: { 'NODE_ENV': 'development' },
    });
});

// Tarefa padrão - Executa o lint e inicia o servidor
gulp.task('default', gulp.series('lint', 'start'));
