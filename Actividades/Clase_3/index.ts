//ejercicio 1
class Coche{
    marca: string;
    modelo: string;
    velocidad: number;

    constructor(marca: string, modelo: string, velocidad: number){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }

    acelerar(): void{
        this.velocidad += 10;
        console.log(`El veiculo acelero a ${this.velocidad}km/h `)
    }
    frenar(): void{
        if (this.velocidad >= 10) {
            this.velocidad -= 10;
            console.log(`El veiculo freno a ${this.velocidad}km/h `)
        }else{
            console.log(`El ya esta frenado`)
        }
    }

    mostrar(): void{
        console.log(`El coche ${this.marca} ${this.modelo} está a ${this.velocidad}km/h`)
    }

}

const FFiesta = new Coche(`ford`,`fiesta`,0)
FFiesta.acelerar();
FFiesta.acelerar();
FFiesta.frenar();
FFiesta.mostrar();

//ejercicio 2
interface Tarea {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
async function obtenerTodos() {
    try {
        const responser = await fetch("https://jsonplaceholder.typicode.com/todos");
        
        if (!responser.ok) {
            throw new Error(`Error: ${responser.status}`);
        }
        const tareas: Tarea[] = await responser.json();
        console.log(`Tareas completadas`);
        tareas.forEach(tarea => {
            if (tarea.completed == true) {
                console.log(`userId: ${tarea.userId};\nid: ${tarea.id};\ntitle: ${tarea.title};\ncompleted: ${tarea.completed}\n`)
            }
        });

    } catch (error) {
        console.error("Hubo un problema con la solicitud:", error);
    }
}

//obtenerTodos();

//Ejercicio 3
//obtenemos el valor top respecto al contenedor
let boxALeft: number = 0
let boxATop: number = 0
function moveD(): void {
    const boxA = document.getElementById('absolute-box') as HTMLElement;
    if(boxALeft >= 90){
        console.log('sobrepasa las dimenciones(left ${boxALeft}%)')
    }else{
        boxALeft += 10;
        boxA.style.left = `${boxALeft}%`;
        console.log(`left ${boxALeft}%`)
    }
}
function moveA(): void {
    const boxA = document.getElementById('absolute-box') as HTMLElement;
    if(boxALeft <= 0){
        console.log('sobrepasa las dimenciones(left ${boxALeft}%)')
    }else{
        boxALeft -= 10;
        boxA.style.left = `${boxALeft}%`;
        console.log(`left ${boxALeft}%`)
    }
}
function moveS(): void {
    const boxA = document.getElementById('absolute-box') as HTMLElement;
    if(boxATop >= 90){
        console.log('sobrepasa las dimenciones(left ${boxALeft}%)')
    }else{
        boxATop += 10;
        boxA.style.top = `${boxATop}%`;
        console.log(`left ${boxATop}%`)
    }
}
function moveW(): void {
    const boxA = document.getElementById('absolute-box') as HTMLElement;
    if(boxATop <= 0){
        console.log('sobrepasa las dimenciones(Top ${boxALeft}%)')
    }else{
        boxATop -= 10;
        boxA.style.top = `${boxATop}%`;
        console.log(`Top ${boxATop}%`)
    }
}

function handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'd' || event.key === 'D' || event.key === 'ArrowRight') {
      moveD();
    }
    if (event.key === 'a' || event.key === 'A' || event.key === 'ArrowLeft') {
      moveA();
    }
    if (event.key === 's' || event.key === 'S' || event.key === 'ArrowDown') {
      moveS();
    }
    if (event.key === 'w' || event.key === 'W' || event.key === 'ArrowUp') {
      moveW();
    }
}

document.addEventListener('keydown', handleKeyDown);
