import { Component } from '@angular/core';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent {
  comandosGit = [
    { nombre: 'Git Init', descripcion: 'Inicializa un nuevo repositorio Git en el directorio actual.' },
    { nombre: 'Git Add', descripcion: 'Agrega cambios de archivos al área de preparación (staging) para que puedan ser confirmados.' },
    { nombre: 'Git Commit', descripcion: 'Confirma los cambios agregados al área de preparación con un mensaje descriptivo.' },
    { nombre: 'Git Branch', descripcion: 'Muestra una lista de ramas en el repositorio y resalta la rama actual.' },
    { nombre: 'Git Push', descripcion: 'Envía tus cambios locales a un repositorio remoto.' },
    { nombre: 'Git Status', descripcion: 'Muestra el estado actual de los archivos en tu repositorio, incluyendo los cambios pendientes y los archivos que están en el área de preparación.' },
    { nombre: 'Git Log', descripcion: 'Muestra un registro de todos los commits en el repositorio, incluyendo información sobre el autor, fecha y mensaje del commit.' },
    { nombre: 'Git Pull', descripcion: 'Descarga los cambios más recientes desde un repositorio remoto a tu rama local.' },
    { nombre: 'Git Clone', descripcion: 'Clona un repositorio remoto en el directorio local.' },
    { nombre: 'Git Fetch', descripcion: 'Descarga cambios desde un repositorio remoto pero no los fusiona en tu rama actual.' },
    { nombre: 'Git Checkout', descripcion: 'Cambia a una rama específica en el repositorio.' },
    { nombre: 'Git Merge', descripcion: 'Fusiona una rama con la rama actual.' },
    { nombre: 'Git Remote -v', descripcion: 'Muestra la información sobre los repositorios remotos configurados.' },
    { nombre: 'Git Reset', descripcion: 'Deshace los cambios de los archivos en el área de preparación.' },
    { nombre: 'Git Stash', descripcion: 'Guarda temporalmente cambios no comprometidos en una pila (stash).' },


    // Agrega más comandos aquí
  ];

  seleccionarComando: any;

  constructor() {
    this.seleccionarComando = this.comandosGit[0]; // Establece un comando predeterminado
  }

  onCommandChange(event: any) {
    const seleccionarNombreDelComando = event.target.value;
    this.seleccionarComando = this.comandosGit.find(command => command.nombre === seleccionarNombreDelComando);
  }
}