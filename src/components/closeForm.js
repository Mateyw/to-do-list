

class Form {
    close() {
        const formDiv = document.getElementById('formDiv');
        const closeFormBtn = document.getElementById('closeFormBtn');
        const body = document.querySelector('body');

        if (formDiv) {
            closeFormBtn.addEventListener('click', () => {
                formDiv.innerHTML = ``;
            });
        }
    }
}

export default Form;