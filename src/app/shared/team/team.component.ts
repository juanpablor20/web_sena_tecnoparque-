import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  public team = [

    {
      name: 'Adrian Rico Aristizabal',
      image: 'assets/img/0Fotos_autores/Adrian_resultado.webp',
      description: 'Participación en proyectos e investigación sobre sistemas sostenibles de producción agropecuaria (Sistemas Agroforestales con cacao y Sistemas Silvopastoriles) y procesos de fermentación en café y cacao.',
      role: 'Investigador experto'
    },
    {
      name: 'Karen Julieth Lozano Rojas',
      image: 'assets/img/0Fotos_autores/Karen_resultado.webp',
      description: 'Participación en proyectos de investigación sobre elaboración de abonos orgánicos y procesos de fermentación en café y cacao.',
      role: 'Investigadora experta'
    },
    {
      name: 'Kevin Santiago Trujillo Guzmán',
      image: 'assets/img/0Fotos_autores/Kevin_resultado.webp',
      description: 'Participación en proyectos de investigación sobre cosecha, poscosecha y fermentación de café y cacao.',
      role: 'Investigador Junior'
    },
    {
      name: 'Claudia Mercedes Ordoñez Espinosa',
      image: 'assets/img/0Fotos_autores/Claudia_resultado.webp',
      description: 'Instructora SENA, profesional en Ingeniería Agropecuaria, Magister en Sistemas Sostenibles, Doctora en Ciencia Biología. Certificada en Cata Internacional de Cacao y Chocolate IICCT e ISCQF & CoEx 2024.',
      role: 'Instructora investigadora línea café'
    },
    {
      name: 'Kathryn Yadira Guzmán Pacheco',
      image: 'assets/img/0Fotos_autores/Kathryn_resultado.webp',
      description: 'Instructora SENA, Ingeniera Agroindustrial, experta en confitería y chocolatería para mercados especializados. Certificada en Cata Internacional de Cacao y Chocolate IICCT e ISCQF & CoEx 2024.',
      role: 'Instructora investigadora línea cacao'
    },
    {
      name: 'Juan Pablo Ramos Medina',
      image: 'assets/img/0Fotos_autores/juan_resultado.webp',
      description: 'experto en angular.',
      role: 'desarrollador'
    }



  ];

}
