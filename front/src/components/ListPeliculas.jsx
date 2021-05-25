import React, { useCallback, useEffect, useState } from 'react';
import { Button, Card, Content, Table } from 'react-bulma-components';
import axios from 'axios';

const { REACT_APP_API } = process.env;
const endPoint = `${REACT_APP_API}/listar`;

const ListPeliculas = () => {

  const [infoData, setInfoData] = useState([]);

  const consumeData = useCallback( async () => {
    try {
      const { data: { data } } = await axios.get(endPoint);
      setInfoData(data);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  useEffect(() => {
    consumeData()
  }, [consumeData]);

  return (
    <Card>
      <Card.Content>
        <Content>
          <Table hoverable="true">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {
                (infoData.length > 0)
                  ? (infoData.map((item, idx) => (
                    <tr key={idx}>
                      <td>{ item.id }</td>
                      <td>{ item.nombre }</td>
                      <td>{ item.descripcion }</td>
                      <td>
                        <Button color="info" onClick={() => console.log('Hola')}>
                        <i className="fas fa-edit"></i>
                        </Button>
                      </td>
                    </tr>
                  ) ))
                  : (<tr>
                      <td colSpan="3">NO HAY DATOS</td>
                    </tr>)
              }
            </tbody>
          </Table>
        </Content>
      </Card.Content>
    </Card>
  )
}

export default ListPeliculas
