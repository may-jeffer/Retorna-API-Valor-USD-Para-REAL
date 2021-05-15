import React from 'react';


const ListaMoedas = (props) => {
    const { moedas } = props;
    if (!moedas || moedas.length === 0) return <p>Carregando ...</p>;
    return (
        <TabelaDeProdutos listaDeProdutos={moedas}/>
    );
};

class Linha extends React.Component {
    render() {
        const moedas = this.props.moedas;

        return (
            <tr>
                <td>{moedas.code}</td>
                <td>{moedas.codein}</td>
                <td>{moedas.name}</td>
                <td>{moedas.high}</td>
                <td>{moedas.low}</td>
                <td>{moedas.varBid}</td>
                <td>{moedas.pctChange}</td>
                <td>{moedas.bid}</td>
                <td>{moedas.ask}</td>
                <td>{moedas.timestamp}</td>
                <td>{moedas.create_date}</td>
            </tr>
        );
    }
}

class TabelaDeProdutos extends React.Component {
    render() {
        const linhas = [];

        this.props.listaDeProdutos.forEach(
            (moedas) => {
                linhas.push(
                    <Linha moedas={moedas} />
                );
            }
        );

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Codein</th>
                        <th>Name</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>VarBid</th>
                        <th>PctChange</th>
                        <th>Bid</th>
                        <th>Ask</th>
                        <th>TimeStamp</th>
                        <th>Create_date</th>
                    </tr>
                </thead>
                <tbody>{linhas}</tbody>
            </table>
        );
    }
}


export default ListaMoedas;