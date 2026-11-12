// Realtime Countdown Logic
        const departureDate = new Date('2026-11-20T05:55:00+08:00').getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = departureDate - now;

            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');

            if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

            if (distance < 0) {
                const container = document.getElementById('countdown');
                if (container) {
                    container.innerHTML = "<div class='col-span-4 text-emerald-400 font-bold text-lg py-2'>✈️ 旅程展開中！祝您愉快！</div>";
                }
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            daysEl.innerText = String(days).padStart(2, '0');
            hoursEl.innerText = String(hours).padStart(2, '0');
            minutesEl.innerText = String(minutes).padStart(2, '0');
            secondsEl.innerText = String(seconds).padStart(2, '0');
        }
