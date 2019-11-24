export const users_create = async user => {
    const response =  await fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (response.ok) {
        return await response.json();
    } 
    else {
        return false;
    }
}