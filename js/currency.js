// Currency Calculator (Toolbox Tab)
        const jpyInput = document.getElementById('jpy-input');
        const rateInput = document.getElementById('rate-input');
        const twdResult = document.getElementById('twd-result');

        function calculateTWD() {
            if (!jpyInput || !rateInput || !twdResult) return;
            const jpy = parseFloat(jpyInput.value) || 0;
            const rate = parseFloat(rateInput.value) || 0.215;
            const twd = Math.round(jpy * rate);
            twdResult.innerText = `NT$ ${twd.toLocaleString()}`;
        }

        if (jpyInput && rateInput) {
            jpyInput.addEventListener('input', calculateTWD);
            rateInput.addEventListener('input', calculateTWD);
        }

        // Modal Currency Calculator Logic
        const modalJpyInput = document.getElementById('modal-jpy-input');
        const modalRateInput = document.getElementById('modal-rate-input');
        const modalTwdResult = document.getElementById('modal-twd-result');
        const tableRateDisplay = document.getElementById('table-rate-display');

        function calculateModalCurrency() {
            if (!modalJpyInput || !modalRateInput || !modalTwdResult) return;
            const jpy = parseFloat(modalJpyInput.value) || 0;
            const rate = parseFloat(modalRateInput.value) || 0.215;
            const twd = Math.round(jpy * rate);
            modalTwdResult.innerText = `NT$ ${twd.toLocaleString()}`;
            if (tableRateDisplay) {
                tableRateDisplay.innerText = rate.toString();
            }
        }

        window.setPresetJPY = function(amount) {
            if (modalJpyInput) {
                modalJpyInput.value = amount;
                calculateModalCurrency();
            }
        };

        const referenceItems = [
            { jpy: 200, label: "罐裝飲料 / 超市點心" },
            { jpy: 500, label: "地下鐵單程車票 / 便利商店飯糰" },
            { jpy: 1000, label: "拉麵 / 湯咖哩 / KINOTOYA 甜點" },
            { jpy: 3000, label: "成吉思汗烤羊肉 / 六花亭伴手禮組" },
            { jpy: 5000, label: "根室花丸澎湃壽司餐 / 景品公仔" },
            { jpy: 10000, label: "富士山頂級壽喜燒 / JINS 快取眼鏡" },
            { jpy: 30000, label: "Levi's 丹寧褲 / HOKA & On 潮流跑鞋" },
            { jpy: 50000, label: "Outlet 品牌包款 / 藥妝大採購" }
        ];

        function updateReferenceTable() {
            const tbody = document.getElementById('reference-table-body');
            if (!tbody) return;
            const rate = parseFloat(modalRateInput ? modalRateInput.value : 0.215) || 0.215;
            
            tbody.innerHTML = referenceItems.map(item => {
                const twd = Math.round(item.jpy * rate);
                return `
                    <tr class="hover:bg-slate-50 transition">
                        <td class="p-2.5 font-bold text-slate-800">¥${item.jpy.toLocaleString()}</td>
                        <td class="p-2.5 font-bold text-amber-700">NT$ ${twd.toLocaleString()}</td>
                        <td class="p-2.5 text-slate-500">${item.label}</td>
                    </tr>
                `;
            }).join('');
        }

        if (modalJpyInput && modalRateInput) {
            modalJpyInput.addEventListener('input', calculateModalCurrency);
            modalRateInput.addEventListener('input', () => {
                calculateModalCurrency();
                updateReferenceTable();
            });
        }
