import React, { FormEvent, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>([]);

    async function handleAddRepository(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();

        const response = await api.get<Repository>(`repos/${newRepo}`);

        const repository = response.data;
        setRepositories([...repositories, repository]);
    }

    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no github</Title>

            <Form onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={e => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositório"
                />
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
            </Repositories>
        </>
    );
};

export default Dashboard;
