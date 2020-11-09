module.exports = function (app) {
    app.dataSources.flamengodb.automigrate('jogo', function (err) {
        if (err) throw err;

        app.models.jogo.create([{
            titulo: 'Atlético MG x Flamengo',
            placar: '4x0',
            adversario: 'Atlético Mineiro',
            contexto: 'Primeiro jogo do returno do campeonato brasileiro de 2020, o Flamengo do técnico Domenec Torrent vem de derrota para o São Paulo do Diniz de 4x1. A 8º dupla de zaga no ano, sim meus amigos esse catalão é louco. Time jogou muito mal e perde a vice liderança para o Galo, também vê o Fluminense com chances de passar, mas este decepciona. FORA DOME',
            data: "2020-11-08",
            campeonato: "Brasileirão"
        }], function (err, jogos) {
            if (err) throw err;

            console.log('Models created: \n', jogos);
        });
    });
};
