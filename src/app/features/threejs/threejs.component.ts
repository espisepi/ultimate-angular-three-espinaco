import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-threejs',
  templateUrl: './threejs.component.html',
  styleUrl: './threejs.component.scss'
})
export class ThreejsComponent implements AfterViewInit {

  // TODO: Crear un div en threejs component html y dentro de ese div meto el canvas con el proyecto react-three-fiber


  ngAfterViewInit(): void {
    this.loadThreejsScript();
  }

  private loadThreejsScript(): void {
    const script: HTMLScriptElement = document.createElement('script');
    script.src = "static/js/main.699a9d22.js";
    // script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    script.id = 'script-threejs';
    document.body.prepend(script);
  }

}
