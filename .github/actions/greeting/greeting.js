const core = require('@actions/core');
const github = require('@actions/github');

try {
    let timeOfDay = null;
    const date = new Date();
    if (date.getHours() <= 11) {
        timeOfDay = 'Morning';
    } else if (date.getHours() > 11 && date.getHours() <= 17) {
        timeOfDay = 'Afternoon';
    } else {
        timeOfDay = 'Evening';
    }
    console.log(`Good ${timeOfDay} World!`);
    core.setOutput("greeting", `Good ${timeOfDay} World!`);
} catch (error) {
    core.setFailed(error.message);
}