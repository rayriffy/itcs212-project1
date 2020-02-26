window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("div.content > div.submit > div")
    .addEventListener("click", () => {
      const inputs = document.querySelectorAll(".form > * > input, textarea");

      const entrites = Array.from(inputs).map(input => {
        return [input.id, input.value];
      });
      
      if(entrites.filter(([_key, val]) => val.trim() === "").length > 0) {
        document.querySelector('.submit > .error').innerText = '*Please fill required fields'
      } else {
        const res = entrites.reduce(
          (acc, [key, val]) => ({ ...acc, [key]: val }),
          {}
        );
        
        // TODO: Submit data to server
        console.log('data: ', res)
        
        document.querySelector('div.content > div.flex > h1').innerText = 'Sent'
        document.querySelector('div.content > div.form').innerHTML = ''
        document.querySelector('div.content > span').remove()
        document.querySelector('div.content > .submit').remove()
        document.querySelector('div.content > p').innerText = 'Message has been sent to recipiant. We will reply back to you in a few business days.'
      }
    });
});
