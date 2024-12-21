document.getElementById('start-button').addEventListener('click', function() {
    document.querySelector('.container').style.opacity = 0;
    setTimeout(function() {
        document.querySelector('.container').style.display = 'none';
        document.getElementById('question-container').style.visibility = 'visible';
        document.getElementById('question-container').style.opacity = 1;
        showScreen(0);
    }, 3000);
});

let currentScreen = 0;
const screens = document.querySelectorAll('.screen');
const progress = document.getElementById('progress');
const totalScreens = screens.length - 1; 

function showScreen(index) {
    screens.forEach((screen, i) => {
        screen.classList.remove('active');
        if (i === index) {
            screen.classList.add('active');
        }
    });
    progress.style.width = `${(index + 1) / totalScreens * 100}%`;
}

screens.forEach((screen, index) => {
    screen.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', function() {
            if (index < totalScreens - 1) {
                currentScreen++;
                showScreen(currentScreen);
            } else {
                document.querySelector('.progress-bar').style.display = 'none';
                document.getElementById('congratulations-screen').classList.add('active');
            }
        });
    });
});
