btnUtilitiesCppRepository = document.querySelector('button[name="btn-utilities-cpp-repository"]')
btnChallengesCodeRepository = document.querySelector('button[name="btn-challenges-code-repository"]')

btnUtilitiesCppRepository.addEventListener('click', () => {
    openURLInNewTab('https://github.com/AlexanderGuacan/Utilities-CPP.git')
})

btnChallengesCodeRepository.addEventListener('click', () => {
    openURLInNewTab('https://github.com/AlexanderGuacan/Code-Challenges.git')
})

function openURLInNewTab(url) {
    window.open(url, "_blank")
}