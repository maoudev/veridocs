const verifyButton = document.querySelector('.verify-document button');
const loading = document.querySelector('.loading-image');
const legit = document.querySelector('.legit');
const notLegit = document.querySelector('.not-legit');


function verifyToken(){
    loading.classList.toggle('actived');
    setTimeout(() => {
        let token = document.getElementById('tokenInput').value;
        fetch(`https://api.veterinaya.com:80/api/docs/verify-token/${token}`, {method: "POST"}).then(response => response.json())
        .then(data => {
        if(data.authentic){
            notLegit.classList.remove('actived')
            legit.classList.toggle('actived');
        } else {
            legit.classList.remove('actived');
            notLegit.classList.toggle('actived');
        }
        })
        loading.classList.remove('actived');
    }, 2000)
}
