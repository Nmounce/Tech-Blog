async function signupFormHandler(event) {
    event.preventDefault();

    const username = event.querySelector('#username-signup').value.trim();
    const password = event.querySelector('#password-signup').value.trim();

    if (username && password) {
        const response = await fetch(`/api/users`, {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            console.log('Account created successfully!');
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);