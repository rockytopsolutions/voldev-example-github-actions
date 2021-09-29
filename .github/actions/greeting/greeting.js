const core = require('@actions/core');
const github = require('@actions/github');

try {
    let timeOfDay = null;
    const date = new Date();
    if (date.getHours() <= 11) {
        timeOfDay = 'Morning';
    } else if (date.getHours() > 11 && date.getHours() <= 16) {
        timeOfDay = 'Afternoon';
    } else {
        timeOfDay = 'Evening';
    }
    console.log(`Greeting will be: Good ${timeOfDay} World!`);
    core.setOutput("greeting", `Good ${timeOfDay} World!`);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}