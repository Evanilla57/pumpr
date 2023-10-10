const newFormHandler = async (event) => {
    event.preventDefault();

    const firstName = document.querySelector('#profile-first-name').value.trim();
    const lastName = document.querySelector('#profile-last-name').value.trim();
    const age = document.querySelector('#profile-age').value.trim();
    const freq = document.querySelector('#profile-freq').value.trim();
    const about = document.querySelector('#profile-about').value.trim();
    const search = document.querySelector('#profile-search').value.trim();
    const song = document.querySelector('#profile-song').value.trim();

    //TODO: connect API
    if (firstName && lastName && age && freq && about && search && song) {
        const response = await fetch(`/api/profile`, {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, age, freq, about, search, song }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create profile');
        }
    }
};

document
    .querySelector('.new-profile-form')
    .addEventListener('submit', newFormHandler);