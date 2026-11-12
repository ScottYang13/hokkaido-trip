// Modal Handlers (Flight Modal)
        window.openFlightModal = function() {
            const modal = document.getElementById('flight-modal');
            if (modal) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        };

        window.closeFlightModal = function() {
            const modal = document.getElementById('flight-modal');
            if (modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }
        };

        // Modal Handlers (Currency Converter Modal)
        window.openCurrencyModal = function() {
            const modal = document.getElementById('currency-modal');
            if (modal) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                calculateModalCurrency();
                updateReferenceTable();
            }
        };

        window.closeCurrencyModal = function() {
            const modal = document.getElementById('currency-modal');
            if (modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }
        };

        window.openStandaloneFlightWindow = function() {
            const windowFeatures = "width=600,height=700,resizable=yes,scrollbars=yes,status=yes";
            const flightContent = `
                <!DOCTYPE html>
                <html lang="zh-TW">
                <head>
                    <meta charset="UTF-8">
                    <title>泰國亞航 FD242/FD243 航班資訊</title>
                    <script src="https://cdn.tailwindcss.com"><\/script>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
                </head>
                <body class="p-6 bg-slate-900 text-slate-100 font-sans">
                    <h2 class="text-xl font-bold text-sky-400 mb-4"><i class="fa-solid fa-plane"></i> 泰國亞洲航空 直飛航班對照</h2>
                    <div class="space-y-4 text-sm">
                        <div class="p-4 bg-slate-800 rounded-xl border border-slate-700">
                            <span class="text-sky-300 font-bold block mb-1">去程 FD242・2026/11/20 (五)</span>
                            <p class="text-xl font-bold text-white">05:55 TPE T1 ➔ 10:40 CTS I</p>
                            <p class="text-xs text-slate-400 mt-1">台北桃園第一航廈 ➔ 新千歲國際線</p>
                        </div>
                        <div class="p-4 bg-slate-800 rounded-xl border border-slate-700">
                            <span class="text-amber-300 font-bold block mb-1">回程 FD243・2026/11/26 (四)</span>
                            <p class="text-xl font-bold text-white">14:00 CTS I ➔ 17:55 TPE T1</p>
                            <p class="text-xs text-slate-400 mt-1">新千歲國際線 ➔ 台北桃園第一航廈</p>
                        </div>
                    </div>
                </body>
                </html>
            `;
            const win = window.open("", "FlightInfoWindow", windowFeatures);
            if (win) {
                win.document.write(flightContent);
                win.document.close();
            }
        };
