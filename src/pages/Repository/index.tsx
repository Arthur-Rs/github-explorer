import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Container, Header, Infomartion } from './styles';

// => Imagens
import LogoImg from '../../assets/logo.svg'
import backIcon from '../../assets/icons/back.svg'

interface Iparams {
  repository: string
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<Iparams>()
  return (
    <Container>
      <Header>
        <img src={LogoImg} alt="Logo Github Explorer" />
        <span>
          <img src={backIcon} alt="Voltar" />
          Voltar
        </span>
      </Header>
      <Infomartion>
        <header>

        </header>
        <div>
          <Numbers>
            <strong>1808</strong>
            <p>Stars</p>
          </Numbers>
          <Numbers>
            <strong>48</strong>
            <p>Forks</p>
          </Numbers>
          <Numbers>
            <strong>67</strong>
            <p>Issues abertas</p>
          </Numbers>
        </div>
      </Infomartion>
    </Container>
  )
}

export default Repository;