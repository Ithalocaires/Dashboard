import React from "react";
import "../signUp/createAcc.css";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

function CreateAcc() {

  const yup = require("yup");

  const navigate = useNavigate();

  function Criar() {
    navigate("/");
  }

  const validation = yup.object({
    nome: yup
    .string()
    .min(2, "Nome Inválido")
    .required("O nome é obrigatório"),
    email: yup
      .string()
      .email("Email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória")
  });

  return (

    <Formik
    initialValues={{ email: "", password: "" }}
    validationSchema={validation}
    >
    <div className="signUp">
      <Form>
          <div>
            <label className="label">  *Nome:</label>
            <ErrorMessage className="error" component="div" name="nome" />
            <Field type="text" name="nome" placeholder="Nome" />
          </div>
          <div>
            <label className="label">  *E-mail:</label>
            <ErrorMessage className="error" component="div" name="email" />
            <Field type="email" name="email" placeholder="Email" />
          </div>

          <div>
            <label className="label">  *Senha:</label>
            <ErrorMessage className="error" component="div" name="password" />
            <Field type="password" name="password" placeholder="Senha" />
          </div>

          <button type="submit" className="button" onClick={Criar}>Submit</button>
        </Form>
    </div>
    </Formik>
  );
}

export default CreateAcc;