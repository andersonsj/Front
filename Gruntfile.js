module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-war');
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        war: {
            target: {
                options: {
                    war_dist_folder: 'C:/Liberty Server/wlp/usr/servers/sapsserver/apps/', /* Folder where to generate the WAR. */
                    war_name: 'war-angular'                /* The name fo the WAR file (.war will be the extension) */
				},
                files: [
                    {
                        expand: true,
                        cwd: './dist/FrontAsesoria/',
                        src: ['**'],
                        dest: ''
                    }
                ]
            }
        }
    });

    grunt.registerTask('default', ['war']);
};