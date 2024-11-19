import { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectName: '',
    projectDescription: '',
    panelCapacity: '',
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Armazena os dados em JSON
    const updatedData = [...submittedData, formData];
    setSubmittedData(updatedData);

    // Limpa o formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectName: '',
      projectDescription: '',
      panelCapacity: '',
    });

    // Mostra o JSON no console (pode ser integrado a uma API posteriormente)
    console.log(JSON.stringify(updatedData, null, 2));
  };

  return (
    <div className="register">
      <h1>Cadastro de Projetos de Energia Solar Flutuante</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <label>
          Nome Completo:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite seu nome"
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu email"
            required
          />
        </label>

        <label>
          Telefone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Digite seu telefone"
            required
          />
        </label>

        <label>
          Nome do Projeto:
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            placeholder="Digite o nome do projeto"
            required
          />
        </label>

        <label>
          Descrição do Projeto:
          <textarea
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            placeholder="Descreva o projeto"
            required
          />
        </label>

        <label>
          Capacidade dos Painéis (em kW):
          <input
            type="number"
            name="panelCapacity"
            value={formData.panelCapacity}
            onChange={handleChange}
            placeholder="Ex: 500"
            required
          />
        </label>

        <button type="submit">Cadastrar</button>
      </form>

      <h2>Dados Cadastrados</h2>
      <pre className="json-output">{JSON.stringify(submittedData, null, 2)}</pre>
    </div>
  );
}

export default Register;
