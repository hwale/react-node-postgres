export const users_create = async user => {
    console.log(user, "user inside api")
    const response =  await fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    return await response.json();
}