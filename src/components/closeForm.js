class Form {
    close() {
        document.addEventListener('click', (event) => {
            const formDiv = document.getElementById('formDiv');
            const closeFormBtn = document.getElementById('closeFormBtn');
            
            if (formDiv && closeFormBtn && event.target.id === 'closeFormBtn') {
                formDiv.remove();
            }
        });
    }
}

export default Form;
