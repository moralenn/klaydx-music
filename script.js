// Получаем элемент для отображения треков
const trackList = document.getElementById('track-list');

// Функция для отображения треков
function displayTracks() {
    const tracks = [
        { title: "Meteor rain", file: "music/Meteor-Rain.mp3", image: "https://raw.githubusercontent.com/moralenn/klaydx-music/refs/heads/main/music/images/Meteor-rain.png", date: "5 Октября 2024 года", bg_color: "background: rgb(59,47,67);background: linear-gradient(27deg, rgba(59,47,67,1) 0%, rgba(130,91,146,1) 86%); -webkit-box-shadow: 0px 0px 81px -5px rgba(191,94,191,1);-moz-box-shadow: 0px 0px 81px -5px rgba(191,94,191,1); box-shadow: 0px 0px 81px -5px rgba(191,94,191,1);" },
        { title: "Silent night", file: "music/Silent-night.mp3", image: "music/images/Silent-night.png", date: "5 Октября 2024 года", bg_color: "background: rgb(17,24,34);background: linear-gradient(27deg, rgba(17,24,34,1) 0%, rgba(78,103,110,1) 86%); -webkit-box-shadow: 0px 0px 81px -5px rgba(26,108,122,1);-moz-box-shadow: 0px 0px 81px -5px rgba(26,108,122,1); box-shadow: 0px 0px 81px -5px rgba(26,108,122,1);" },
        // Добавьте свои треки здесь
    ];

    // Определяем количество треков
    const trackCount = tracks.length;

    // Определяем количество колонок
    const columns = trackCount >= 8 ? 4 : 2;

    // Создаем контейнер для треков
    const trackContainer = document.createElement('div');
    trackContainer.className = `track-container columns-${columns}`;

    tracks.forEach(track => {
        const trackItem = document.createElement('div');
        trackItem.className = 'track-item';

        // Устанавливаем фон для блока трека
        if (track.bg_color) {
            trackItem.style.cssText += track.bg_color; // Применяем фоновый стиль
        }

        // Создаем изображение для фона
        const img = document.createElement('img');
        img.src = track.image;
        img.alt = track.title;

        trackItem.appendChild(img); // Добавляем изображение в блок

        // Создаем контейнер для информации о треке
        const trackInfo = document.createElement('div');
        trackInfo.className = 'trackInfo'; // Класс для названия и аудиоплеера
        
        trackInfo.innerHTML = `
            <h3>${track.title} <div class="track-date">${track.date}</div></h3>
            <audio controls class="audio-controls">
                <source src="${track.file}" type="audio/mpeg">
                Ваш браузер не поддерживает аудиоплеер.
            </audio>
        `;

        // Добавляем trackInfo в блок трека
        trackItem.appendChild(trackInfo);

        // Добавляем блок трека в контейнер
        trackContainer.appendChild(trackItem);
    });

    // Добавляем контейнер с треками на страницу
    trackList.appendChild(trackContainer);
}

// Вызываем функцию для отображения треков
displayTracks();
