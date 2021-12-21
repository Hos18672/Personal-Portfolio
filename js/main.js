
    var form = document.getElementById("my-form");
    const nav_menu = document.getElementById("menu_item");
    const navs = document.querySelector('.content .links');
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.classList.add('success');
        status.innerHTML = "Thanks";
        form.reset()
      }).catch(error => {
        status.classList.add('error');
        status.innerHTML = "Oops!"
      });
    }
    form.addEventListener("submit", handleSubmit)

    nav_menu.addEventListener('click', ()=>{
        navs.classList.add('active')
    })