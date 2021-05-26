import { Columns, Heading } from 'react-bulma-components';
import ListPeliculas from './components/ListPeliculas';

const App = ({ history }) => {
  return (
    <Columns>
      <Columns.Column className="is-two-fifths">
        <Heading weight="bold" size="4">UTILIZANDO BULMA-COMPONENTS</Heading>
      </Columns.Column>
      <Columns.Column>
        <ListPeliculas history={history} />
      </Columns.Column>
    </Columns>
  );
}

export default App;
