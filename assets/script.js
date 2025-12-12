function updateClock() {
    const now = new Date(); // 現在の日時を取得

    // 時刻を HH:MM:SS の形式でフォーマット
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;

    // HTML要素に時刻を反映
    const clockElement = document.getElementById('clock');
    clockElement.textContent = timeString;

    clockElement.style.color = '#61dafb'; // 偶数秒の色
    clockElement.style.textShadow = '0 0 20px rgba(97, 218, 251, 0.8)';
}

// 1000ミリ秒（1秒）ごとに updateClock 関数を実行
setInterval(updateClock, 1000);

// ページロード時に一度実行して、すぐに時刻を表示
updateClock();