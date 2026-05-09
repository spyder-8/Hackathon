async function getKey(password) {
    const enc = new TextEncoder();
    const keyMaterial = await window.crypto.subtle.importKey(
        "raw",
        enc.encode(password),
        "PBKDF2",
        false,
        ["deriveKey"]
    );
    return window.crypto.subtle.deriveKey({
        name: "PBKDF2",
        salt: enc.encode("fixed-salt"),
        iterations: 100000,
        hash: "SHA-256"
    },keyMaterial, {
        name: "AES-GCM",
        length: 256
    }, false, ["decrypt"]);
}

async function decrypt(ciphertextBase64, ivBase64, password) {
    const enc = new TextEncoder();
    const data = Uint8Array.from(atob(ciphertextBase64), c => c.charCodeAt(0));
    const iv = Uint8Array.from(atob(ivBase64), c => c.charCodeAt(0));
    const key = await getKey(password);

    const decrypted = await window.crypto.subtle.decrypt({
        name: "AES-GCM",
        iv
    }, key, data);

    return new TextDecoder().decode(decrypted);
}

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("encrypted-data");
    const ciphertext = container.dataset.ciphertext;
    const iv = container.dataset.iv;
    const password = "user-shared-password";
    
    try {
        const decryptedText = await decrypt(ciphertext, iv, password);
        document.getElementById("decrypted").textContent = decryptedText;
    } catch (error) {
        console.error("Decryption failed: ", error);
        document.getElementById("decrypted").textContent = "Failed to decrypt.";
    }
});