function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function articles() {
    await sleep(3000);

    window.open("https://localhost:8080/stop");

    await sleep(2000);
    
    window.open("https://localhost:8080/doing");

    await sleep(2000);

    window.open("https://localhost:8080/what");

    await sleep(2000);

    window.open("https://localhost:8080/youre");

    await sleep(2000);

    window.open("https://localhost:8080/told");

    await sleep(3000);

    window.open("https://localhost:8080/do");

    await sleep(2000);

    window.open("https://localhost:8080/you");

    await sleep(2000);

    window.open("https://localhost:8080/know");

    await sleep(2000);

    window.open("https://localhost:8080/what-damage");

    await sleep(2000);

    window.open("https://localhost:8080/youve");

    await sleep(2000);

    window.open("https://localhost:8080/done");
}

document.addEventListener('DOMContentLoaded', () => {
    articles();
});