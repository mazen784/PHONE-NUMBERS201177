document.addEventListener('DOMContentLoaded', () => {
    const copyIcons = document.querySelectorAll('.copy-icon');
    const tooltip = document.getElementById('tooltip');

    copyIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            const numberToCopy = icon.dataset.number;
            navigator.clipboard.writeText(numberToCopy).then(() => {
                const rect = icon.getBoundingClientRect();
                tooltip.style.left = `${rect.left + window.scrollX + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`;
                tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 5}px`;
                tooltip.style.opacity = '1';
                tooltip.style.visibility = 'visible';

                setTimeout(() => {
                    tooltip.style.opacity = '0';
                    tooltip.style.visibility = 'hidden';
                }, 1500);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    });
});

