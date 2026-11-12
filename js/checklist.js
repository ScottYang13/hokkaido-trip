// Initialization & LocalStorage Persistence
        document.addEventListener('DOMContentLoaded', () => {
            setInterval(updateCountdown, 1000);
            updateCountdown();

            const checkboxes = document.querySelectorAll('.task-checkbox, .pack-checkbox, .food-checkbox, .anime-checkbox, .shop-checkbox');

            checkboxes.forEach(chk => {
                const key = chk.getAttribute('data-id') || chk.getAttribute('data-pack') || chk.getAttribute('data-food') || chk.getAttribute('data-anime') || chk.getAttribute('data-shop');
                if (key && localStorage.getItem('hokkaido_chk_' + key) === 'true') {
                    chk.checked = true;
                    if (chk.closest('label')) {
                        chk.closest('label').classList.add('bg-rose-50/60', 'border-rose-200');
                    }
                }
            });

            checkboxes.forEach(chk => {
                chk.addEventListener('change', () => {
                    const key = chk.getAttribute('data-id') || chk.getAttribute('data-pack') || chk.getAttribute('data-food') || chk.getAttribute('data-anime') || chk.getAttribute('data-shop');
                    if (key) {
                        localStorage.setItem('hokkaido_chk_' + key, chk.checked);
                        if (chk.closest('label')) {
                            if (chk.checked) {
                                chk.closest('label').classList.add('bg-rose-50/60', 'border-rose-200');
                            } else {
                                chk.closest('label').classList.remove('bg-rose-50/60', 'border-rose-200');
                            }
                        }
                    }
                });
            });
        });
