import React from 'react';

import { Container, Infomations, Go } from './styles';
import { Link } from 'react-router-dom';

// => Img
import GoIcon from '../../assets/icons/go.svg'

interface RepositoryInterface {
  name: string;
  description?: string;
  avatar: string;
}

const Repository: React.FC<RepositoryInterface> = ({
  name,
  description,
  avatar
}) => {
  return (

    <Container>
      <Link to={`/repository/${name}`}>
        <Infomations>
          <img src={avatar} alt="Foto de perfil" />
          <div>
            <strong>{name}</strong>
            <p>{description ? description : 'Sem descrição'}</p>
          </div>
        </Infomations>
        <Go>
          <img src={GoIcon} alt="Navegar para página de repositorios" />
        </Go>
      </Link>
    </Container>
  );
}

export default Repository;