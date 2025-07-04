async function fetchUserData() {
    // Define API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select data container
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Fetch data from API
        const response = await fetch(apiUrl);
        
        // Check if response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        // Convert response to JSON
        const users = await response.json();
        
        // Clear loading message
        dataContainer.innerHTML = '';
        
        // Create user list
        const userList = document.createElement('ul');
        
        // Populate user list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        // Append user list to container
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Handle errors
        console.error('Error fetching user data:', error);
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Invoke function when DOM is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
