const name = document.querySelector('#name');

const typeWriter = new Typewriter(name, {
    loop: true
});   

typeWriter.typeString("João Silva")
    .pauseFor(2500)
    .deleteAll()
    .typeString("a full-stack developer")
    .pauseFor(1000)
    .deleteChars(20)
    .typeString("software engineer")
    .pauseFor(2500)
    .start();
