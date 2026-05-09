import { SECRET_KEY } from './config.js';

async function decrypt(ciphertextBase64, ivBase64, keyString) {
    const data = Uint8Array.from(atob(ciphertextBase64), c => c.charCodeAt(0));
    const iv = Uint8Array.from(atob(ivBase64), c => c.charCodeAt(0));
    
    // Import the fixed key
    const keyData = new TextEncoder().encode(keyString);
    const key = await window.crypto.subtle.importKey(
        "raw",
        keyData,
        "AES-GCM",
        false,
        ["decrypt"]
    );

    const decrypted = await window.crypto.subtle.decrypt({
        name: "AES-GCM",
        iv
    }, key, data);

    return new TextDecoder().decode(decrypted);
}

document.addEventListener("DOMContentLoaded", async () => {
    const guessInput = document.getElementById('user-guess');
    if (guessInput) {
        guessInput.addEventListener('input', async () => {
            const guess = guessInput.value;
            if (guess.trim()) {
                try {
                    const response = await fetch('/check-guess', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ guess }),
                    });
                    if (response.ok) {
                        const result = await response.json();
                        if (result.success) {
                            window.location.href = '/success';
                        }
                    }
                } catch (error) {
                    console.error('Error checking guess:', error);
                }
            }
        });
    }
});