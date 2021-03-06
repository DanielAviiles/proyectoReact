import React, { useCallback, useEffect, useState } from 'react';
import { Button, Card, Columns, Content, Form, Icon } from 'react-bulma-components';
import axios from 'axios';

const { REACT_APP_API } = process.env;
const endPoint = `${REACT_APP_API}`;

const FormModify = ({ history, match: { params } }) => {
  const [form, setForm] = useState({
    id: '',
    nombre: '',
    descripcion: ''
  });

  const consumeData = useCallback(async () => {
    try {
      const { data: { peli } } = await axios.get(`${endPoint}/info/${params.idPeli}`);
      if (peli.length === 0) {
        history.replace('/');
        return;
      }
      setForm(peli[0]);
    } catch (err) {
      console.warn(err);
    }
  }, [params, history]);

  useEffect(() => {
    consumeData();
  }, [consumeData]);

  const modifyData = useCallback(async () => {
    try {
      await axios.put(`${endPoint}/modificar`, form).then(() => {
        history.replace('/');
      });
    } catch (err) {
      console.warn(err);
    }
  }, [form, history])

  const handleInputChange = ({ target }) => {
    setForm((current) => ({
      ...current,
      [target.name]: target.value
    }));
  }

  return (
    <>
      <Columns justifyContent="center">
        <Columns.Column className="is-half">
          <Card>
            <Card.Content>
              <Content>
                <Form.Field>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control>
                    <Form.Input placeholder="Nombre Pelicula" name="nombre" 
                        value={form.nombre} onChange={handleInputChange} />
                    <Icon align="left">
                      <i className="fas fa-film" />
                    </Icon>
                  </Form.Control>
                </Form.Field>
                <Form.Field>
                  <Form.Label>Descripcion</Form.Label>
                  <Form.Control>
                    <Form.Input placeholder="Descripcion" name="descripcion"
                        value={form.descripcion} onChange={handleInputChange} />
                    <Icon align="left">
                      <i className="fas fa-file-medical-alt" />
                    </Icon>
                  </Form.Control>
                </Form.Field>
                <Button.Group>
                  <Button fullwidth rounded color="primary" onClick={modifyData}>Editar</Button>
                </Button.Group>
              </Content>
            </Card.Content>
          </Card>
        </Columns.Column>
      </Columns>
    </>
  )
}

export default FormModify
