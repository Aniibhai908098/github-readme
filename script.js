// Add this script at the bottom of your index.html, just before </body>
document.querySelector('.generate-readme-btn').addEventListener('click', function() {
    // Get all social media inputs
    const socials = {
        github: document.getElementById('github').value,
        twitter: document.getElementById('twitter').value,
        dev: document.getElementById('dev').value,
        codepen: document.getElementById('codepen').value,
        codesandbox: document.getElementById('codesandbox').value,
        stackoverflow: document.getElementById('stackoverflow').value,
        linkedin: document.getElementById('linkedin').value,
        kaggle: document.getElementById('kaggle').value,
        fb: document.getElementById('fb').value,
        instagram: document.getElementById('instagram').value,
        dribbble: document.getElementById('dribbble').value,
        behance: document.getElementById('behance').value,
        hashnode: document.getElementById('hashnode').value,
        medium: document.getElementById('medium').value,
        youtube: document.getElementById('youtube').value,
        codechef: document.getElementById('codechef').value,
        hackerrank: document.getElementById('hackerrank').value,
        codeforces: document.getElementById('codeforces').value,
        leetcode: document.getElementById('leetcode').value,
        topcoder: document.getElementById('topcoder').value,
        hackerearth: document.getElementById('hackerearth').value,
        geeksforgeeks: document.getElementById('geeksforgeeks').value,
        discord: document.getElementById('discord').value,
        rssurl: document.getElementById('rssurl').value
    };

    // Get other form inputs
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const bio = document.getElementById('bio').value;
    const location = document.getElementById('location').value;
    const learning = document.getElementById('currentLearn').value;
    const email = document.getElementById('email').value;
    // Add all other form fields...

    // Create query string
    const queryString = Object.entries({...socials, name, title, bio, location, learning, email})
        .filter(([_, value]) => value) // Remove empty values
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');

    // Redirect to output.html with parameters
    window.location.href = `output.html?${queryString}`;
});
