<<<<<<< HEAD
function loader() {
    const loader = document.querySelector('#loader');

    window.addEventListener('load', () => { 
        setTimeout(() => {
            loader.classList.add('loader-wrapper--hidden');
        }, 1000)
        
    });
}

=======
function loader() {
    const loader = document.querySelector('#loader');

    window.addEventListener('load', () => { 
        setTimeout(() => {
            loader.classList.add('loader-wrapper--hidden');
        }, 1000)
        
    });
}

>>>>>>> 7127bd9d5c1279a114cdf4c921f1c53ed9b0a4c2
export default loader;