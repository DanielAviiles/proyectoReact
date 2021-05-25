import { Columns, Heading } from 'react-bulma-components';
import ListPeliculas from './components/ListPeliculas';

const App = () => {
  return (
    <Columns>
      <Columns.Column>
        <Heading weight="bold" size="4">UTILIZANDO BULMA-COMPONENTS</Heading>
      </Columns.Column>
      <Columns.Column>
        <ListPeliculas />
      </Columns.Column>
    </Columns>
  );
}

export default App;
