const manhwaData = [
    {
        title: 'Solo Leveling',
        genre: 'Action, Fantasy',
        description: 'Solo Leveling is an action-packed story of Sung Jin-Woo, the weakest hunter who becomes the strongest after completing secret quests.',
        image: 'images/Solo.jpg'
    },
    {
        title: 'The Beginning After The End',
        genre: 'Action, Fantasy, Reincarnation',
        description: 'A king is reincarnated in a magical world where he strives to learn magic and rediscover his strength.',
        image: 'images/After_The_End.png'
    },
    {
        title: 'Tales of Demons and Gods',
        genre: 'Action, Adventure, Fantasy',
        description: 'Follow Nie Li as he returns to the past to protect his loved ones and change the fate of his city.',
        image: 'images/Tales_of_Demons.png'
    },
    {
        title: 'Tower of God',
        genre: 'Action, Adventure, Fantasy',
        description: 'The story follows Bam, who enters the mysterious Tower to reunite with his best friend Rachel.',
        image: 'images/Tower of God.png'
    },
    {
        title: 'Noblesse',
        genre: 'Action, Supernatural, Vampire',
        description: 'Rai, a vampire, wakes up after 820 years to a world unfamiliar to him. He must protect his friends from dangers of the past.',
        image: 'images/Noblesse.png'
    },
    {
        title: 'The Gamer',
        genre: 'Action, Fantasy, Supernatural',
        description: 'Han Jee-Han, a high school student, suddenly discovers that the world operates like a game. Follow his journey to exploit this newfound power.',
        image: 'images/The Gamer.png'
    },
    {
        title: 'A Returner\'s Magic Should Be Special',
        genre: 'Action, Fantasy, Magic',
        description: 'Desir Arman returns to the past to save the world from a catastrophic event, determined to use his knowledge to change fate.',
        image: 'images/Be_Special.png'
    },
    {
        title: 'The God of High School',
        genre: 'Action, Martial Arts, Fantasy',
        description: 'Mori Jin, a high school student, enters a martial arts tournament that reveals his incredible abilities.',
        image: 'images/The God of High School.png'
    },
    {
        title: 'UnOrdinary',
        genre: 'Action, School Life, Superhero',
        description: 'In a world where everyone has superpowers, John Doe is an ordinary student hiding a secret about his past.',
        image: 'images/UnOrdinary.png'
    },
    {
        title: 'Solo Leveling: Arise',
        genre: 'Action, Fantasy, Magic',
        description: 'A continuation of Solo Leveling, where Sung Jin-Woo embarks on new adventures after his rise to power.',
        image: 'images/Arise.png'
    },
    {
        title: 'Rebirth of the Urban Immortal Cultivator',
        genre: 'Action, Cultivation, Supernatural',
        description: 'Chen Fan, a powerful cultivator, is reborn in the modern world. Watch as he reclaims his power and adjusts to this new era.',
        image: 'images/Cultivator.png'
    },
    {
        title: 'Omniscient Reader\'s Viewpoint',
        genre: 'Action, Fantasy, Supernatural',
        description: 'Kim Dokja realizes that his favorite novel has come to life, and he\'s the only one who knows how the world will end.',
        image: 'images/Viewpoint.png'
    },
    {
        title: 'Legend of the Northern Blade',
        genre: 'Action, Martial Arts, Fantasy',
        description: 'Jin Mu-Won, the last heir of the Northern Heavenly Sect, embarks on a journey of revenge and self-discovery.',
        image: 'images/Northern_Blade.png'
    },
    {
        title: 'The Scholar\'s Reincarnation',
        genre: 'Action, Fantasy, Reincarnation',
        description: 'After dying in battle, a martial arts master is reincarnated into a peaceful scholar\'s life but must protect those he loves.',
        image: 'images/Reincarnation.png'
    },
    {
        title: 'Second Life Ranker',
        genre: 'Action, Adventure, Fantasy',
        description: 'Yeon-Woo climbs a mysterious Tower to avenge his brother\'s death, discovering secrets and immense power along the way.',
        image: 'images/Second Life Ranker.png'
    },
    {
        title: 'Volcanic Age',
        genre: 'Action, Martial Arts, Historical',
        description: 'Joo Seo-Cheon, an elder of the Mount Hua Sect, dies and is reborn in his youth, determined to save his sect and loved ones.',
        image:'images/Volcanic Age.png'
    },
    {
        title: 'Ranker Who Lives a Second Time',
        genre: 'Action, Fantasy, Adventure',
        description: 'Follow Yeon-woo as he navigates the Tower of the Sun God to uncover the secrets behind his brother\'s death.',
        image: 'images/Second Time.png'
    },
    // Continue adding up to the 50th entry
];

// Function to display the list of manhwa titles
function displayManhwaList() {
    const manhwaList = document.getElementById('manhwa-list');
    manhwaData.forEach((manhwa, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <img src="${manhwa.image}" alt="${manhwa.title} Image">
            <h3>${manhwa.title}</h3>
        `;
        listItem.addEventListener('click', () => showManhwaDetails(index));
        manhwaList.appendChild(listItem);
    });
}

// Function to show details of a selected manhwa
function showManhwaDetails(index) {
    const details = document.getElementById('manhwa-details');
    const manhwa = manhwaData[index];
    details.innerHTML = `
        <h2>${manhwa.title}</h2>
        <img src="${manhwa.image}" alt="${manhwa.title} Image">
        <p><strong>Genre:</strong> ${manhwa.genre}</p>
        <p>${manhwa.description}</p>
    `;
    details.scrollIntoView({ behavior: 'smooth' });
}
function searchManhwa() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const manhwaItems = document.querySelectorAll('#manhwa-list li');
    
    manhwaItems.forEach(item => {
        const title = item.textContent.toLowerCase();
        if (title.includes(input)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Initial call to display all manhwa titles on page load
displayManhwaList();
