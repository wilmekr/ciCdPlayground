import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Richard Wilmek',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'Continuous Integration and Continuous Deployment'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'Jenkins, for sure!',
		// What do you want to learn in this workshop? 
		expectations: [
			'How to create a Jenkins job from "scratch"'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'play chess', 
			'play the bass guitar', 
			'speedcubing'
		]
	}
});
