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
    const container = document.getElementById('encrypted-data');
    const ciphertext = container?.dataset.ciphertext;
    const iv = container?.dataset.iv;
    const key = SECRET_KEY;
    
    const decryptedElement = document.getElementById("decrypted");
    if (!decryptedElement) {
        console.error("Decrypted element not found");
        return;
    }
    
    if (!ciphertext || !iv) {
        console.error("Encrypted data not found");
        decryptedElement.textContent = "Encrypted data missing.";
        return;
    }
    
    try {
        const decryptedText = await decrypt(ciphertext, iv, key);
        decryptedElement.textContent = decryptedText;
    } catch (error) {
        console.error("Decryption failed: ", error);
        decryptedElement.textContent = "Failed to decrypt.";
    }

    const guessInput = document.getElementById('user-guess');
    if (guessInput) {
        guessInput.addEventListener('input', () => {
            if (guessInput.value === 'This is a secret message') {
                window.location.href = 'https://78.141.238.111:8080/success';
            }
        })
    }
});