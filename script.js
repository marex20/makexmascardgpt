document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');

    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });

    // Optional: Add some snowflakes
    const body = document.querySelector('body');
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.style.opacity = Math.random();
        body.appendChild(snowflake);
    }
});