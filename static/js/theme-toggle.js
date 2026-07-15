(function () {
    var KEY = 'theme';
    var mq = window.matchMedia('(prefers-color-scheme: dark)');

    // 用户偏好：'light' | 'dark' | 'system'（'system' 不写入 localStorage，以缺省表示）
    function getPref() {
        var v = localStorage.getItem(KEY);
        return (v === 'light' || v === 'dark') ? v : 'system';
    }

    // 解析为实际生效的主题
    function resolve(pref) {
        if (pref === 'light' || pref === 'dark') return pref;
        return mq.matches ? 'dark' : 'light';
    }

    function syncUtterances(effective) {
        // utterances-init.js 在收到 iframe 首条消息后标记 ready；懒加载的 iframe
        // 就绪前仍是 about:blank，向它 postMessage 会报 target origin 不匹配。
        // 就绪时 utterances-init 会按当前 data-bs-theme 补发一次主题。
        var frame = document.querySelector('.utterances-frame');
        if (frame && frame.dataset.utterancesReady === 'true') {
            frame.contentWindow.postMessage(
                { type: 'set-theme', theme: effective === 'dark' ? 'github-dark' : 'github-light' },
                'https://utteranc.es'
            );
        }
    }

    // 在下拉菜单中标记当前选中的选项（触发器图标由 CSS 依据 data-bs-theme 切换）
    function markActive(pref) {
        var opts = document.querySelectorAll('.theme-option');
        for (var i = 0; i < opts.length; i++) {
            var on = opts[i].getAttribute('data-theme') === pref;
            opts[i].classList.toggle('active', on);
            opts[i].setAttribute('aria-checked', on ? 'true' : 'false');
        }
    }

    function apply(pref) {
        var effective = resolve(pref);
        document.documentElement.setAttribute('data-bs-theme', effective);
        markActive(pref);
        syncUtterances(effective);
    }

    // 初始应用（head 内联脚本已先行设置 data-bs-theme，避免闪烁）
    apply(getPref());

    var opts = document.querySelectorAll('.theme-option');
    for (var i = 0; i < opts.length; i++) {
        opts[i].addEventListener('click', function () {
            var pref = this.getAttribute('data-theme');
            if (pref === 'system') {
                localStorage.removeItem(KEY);
            } else {
                localStorage.setItem(KEY, pref);
            }
            apply(pref);
        });
    }

    // 当用户偏好为「跟随系统」时，响应系统主题变化
    mq.addEventListener('change', function () {
        if (getPref() === 'system') apply('system');
    });
})();
