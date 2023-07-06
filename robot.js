const caminos = [
    "Casa de Alicia-Casa de Bob",
    "Casa de Alicia-Cabaña",
    "Casa de Alicia-Oficina de Correos", 
    "Casa de Bob-Ayuntamiento",
    "Casa de Daria-Casa de Ernie", 
    "Casa de Daria-Ayuntamiento",
    "Casa de Ernie-Casa de Grete", 
    "Casa de Grete-Granja",
    "Casa de Grete-Tienda", 
    "Mercado-Granja",
    "Mercado-Oficina de Correos", 
    "Mercado-Tienda",
    "Mercado-Ayuntamiento", 
    "Tienda-Ayuntamiento"
]

let grafo = {}
const construirGrafo = (caminos)=>{
    for(let camino of caminos){
        let desde, hasta
        desde = camino.split("-")[0]
        hasta = camino.split("-")[1]
        grafo[desde] = []
        grafo[hasta] = []
    }

    for(let lugar of Object.keys(grafo)){
        for(let camino of caminos){
            let desde
            desde = camino.split("-")[0]
            if(desde==lugar){
                hasta = camino.split("-")[1] 
                grafo[lugar].push(hasta)
            }
        }

        for(let camino of caminos){
            let desde
            desde = camino.split("-")[1]
            if(desde==lugar){
                hasta = camino.split("-")[0] 
                grafo[lugar].push(hasta)
            }
        }
    }
}
construirGrafo(caminos)
console.log(grafo)


    