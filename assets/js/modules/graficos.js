/* Este arquivo é um módulo.
  Note que não há $(document).ready() aqui.
  Ele apenas define e exporta as funções.
*/

// --- FUNÇÃO PARA O GRÁFICO 1 ---
export function iniciarGraficoVendas() {
    // $ e echarts são "pegos" da janela global
    var $containerGrafico = $('#grafico-vendas');
    
    if ($containerGrafico.length > 0) { 
        var elementoDOM = $containerGrafico[0]; 
        var graficoVendas = echarts.init(elementoDOM);
        
        var option = {
            title: { text: 'Vendas Mensais' },
            // ... resto das opções ...
            series: [{
                name: 'Vendas',
                type: 'bar',
                data: [120, 200, 150]
            }]
        };
        graficoVendas.setOption(option);
    }
}

// --- FUNÇÃO PARA O GRÁFICO 2 ---
export function iniciarGraficoCustos() {
    var $containerGrafico = $('#grafico-custos');
    
    if ($containerGrafico.length > 0) {
        var elementoDOM = $containerGrafico[0];
        var graficoCustos = echarts.init(elementoDOM);
        
        var option = {
            title: { text: 'Custos por Categoria' },
            // ... resto das opções ...
            series: [{
                name: 'Custos',
                type: 'pie',
                data: [ /* ... dados ... */ ]
            }]
        };
        graficoCustos.setOption(option);
    }
}

