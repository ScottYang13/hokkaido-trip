// Tab Switcher Logic
        window.switchTab = function(targetId, event) {
            if (event) {
                event.preventDefault();
            }

            document.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.add('hidden');
            });
            const selectedPane = document.getElementById(targetId);
            if (selectedPane) {
                selectedPane.classList.remove('hidden');
            }

            document.querySelectorAll('.tab-btn').forEach(btn => {
                const btnTarget = btn.getAttribute('data-target');
                if (btnTarget === targetId) {
                    if (targetId === 'food') {
                        btn.className = "tab-btn py-2.5 px-2 rounded-xl font-bold text-xs transition-all text-center bg-amber-500 text-white shadow-md flex items-center justify-center gap-1";
                    } else if (targetId === 'anime') {
                        btn.className = "tab-btn py-2.5 px-2 rounded-xl font-bold text-xs transition-all text-center bg-purple-600 text-white shadow-md flex items-center justify-center gap-1";
                    } else if (targetId === 'shopping') {
                        btn.className = "tab-btn py-2.5 px-2 rounded-xl font-bold text-xs transition-all text-center bg-emerald-600 text-white shadow-md flex items-center justify-center gap-1";
                    } else if (targetId === 'checklist') {
                        btn.className = "tab-btn py-2.5 px-2 rounded-xl font-bold text-xs transition-all text-center bg-rose-600 text-white shadow-md flex items-center justify-center gap-1";
                    } else if (targetId === 'toolbox') {
                        btn.className = "tab-btn py-2.5 px-2 rounded-xl font-bold text-xs transition-all text-center bg-slate-900 text-sky-300 shadow-md flex items-center justify-center gap-1 col-span-2 sm:col-span-1";
                    } else {
                        btn.className = "tab-btn py-2.5 px-2 rounded-xl font-bold text-xs transition-all text-center bg-rose-600 text-white shadow-md";
                    }
                } else {
                    if (btnTarget === 'food') {
                        btn.className = "tab-btn py-2.5 px-2 rounded-xl font-bold text-xs transition-all text-center bg-white text-amber-700 hover:bg-amber-50 shadow-xs flex items-center justify-center gap-1";
                    } else if (btnTarget === 'anime') {
                        btn.className = "tab-btn py-2.5 px-2 rounded-xl font-bold text-xs transition-all text-center bg-white text-purple-700 hover:bg-purple-50 shadow-xs flex items-center justify-center gap-1";
                    } else if (btnTarget === 'shopping') {
                        btn.className = "tab-btn py-2.5 px-2 rounded-xl font-bold text-xs transition-all text-center bg-white text-emerald-700 hover:bg-emerald-50 shadow-xs flex items-center justify-center gap-1";
                    } else if (btnTarget === 'checklist') {
                        btn.className = "tab-btn py-2.5 px-2 rounded-xl font-bold text-xs transition-all text-center bg-white text-rose-700 hover:bg-rose-50 shadow-xs flex items-center justify-center gap-1";
                    } else if (btnTarget === 'toolbox') {
                        btn.className = "tab-btn py-2.5 px-2 rounded-xl font-bold text-xs transition-all text-center bg-white text-slate-900 hover:bg-slate-100 shadow-xs flex items-center justify-center gap-1 col-span-2 sm:col-span-1";
                    } else {
                        btn.className = "tab-btn py-2.5 px-2 rounded-xl font-bold text-xs transition-all text-center bg-white text-slate-700 hover:bg-slate-100 shadow-xs";
                    }
                }
            });
        };
