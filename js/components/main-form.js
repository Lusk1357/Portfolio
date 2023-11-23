function handleFormSubmission(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    $.ajax({
        url: form.action,
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
            alert('Email enviado com sucesso!');
        },
        error: function (error) {
            alert('Erro ao enviar o email. Por favor, tente novamente.');
        }
    });
}
