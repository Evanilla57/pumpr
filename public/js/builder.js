const newFormHandler = async (event) => {
    event.preventDefault();

    const age = document.querySelector('#profile-age').value.trim();
    const freq = document.querySelector('#profile-freq').value.trim();
    const about = document.querySelector('#profile-about').value.trim();
    const search = document.querySelector('#profile-search').value.trim();
    const song = document.querySelector('#profile-song').value.trim();

    //TODO: connect API
    if (age && freq && about && search && song) {
        const profileBody = JSON.stringify({ age, freq, about, search, song });
        console.log('profileBody', profileBody);
        const response = await fetch('/api/profile', {
            method: 'POST',
            body: profileBody,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            window.location.href = '/profile';

        } else {
            alert('Failed to create profile');
        }
    }
};

document
    .querySelector('.new-profile-form')
    .addEventListener('submit', newFormHandler);