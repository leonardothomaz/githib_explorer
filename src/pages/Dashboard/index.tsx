import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/49080756?s=460&u=09ababea543b64205db547d0b076b45d7c2ddb71&v=4"
                        alt="Leonardo"
                    />
                    <div>
                        <strong>leonardothomaz/receitas</strong>
                        <p>No description</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/49080756?s=460&u=09ababea543b64205db547d0b076b45d7c2ddb71&v=4"
                        alt="Leonardo"
                    />
                    <div>
                        <strong>leonardothomaz/receitas</strong>
                        <p>No description</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/49080756?s=460&u=09ababea543b64205db547d0b076b45d7c2ddb71&v=4"
                        alt="Leonardo"
                    />
                    <div>
                        <strong>leonardothomaz/receitas</strong>
                        <p>No description</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img
                        src="https://avatars.githubusercontent.com/u/49080756?s=460&u=09ababea543b64205db547d0b076b45d7c2ddb71&v=4"
                        alt="Leonardo"
                    />
                    <div>
                        <strong>leonardothomaz/receitas</strong>
                        <p>No description</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
