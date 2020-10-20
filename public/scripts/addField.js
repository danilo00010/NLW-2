// Procurar o botao
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField () {
    // Duplicar os campos. Que campos?
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Limpar os campos. Que campos?
    const fields = newFieldsContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        // Pega o field do momento e limpa ele
        field.value = ""
    })

    // Colocar na página: onde??
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)

}