import { Component, computed, signal } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-cacao-cartilla',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './cacao-cartilla.component.html',
  styleUrl: './cacao-cartilla.component.css'
})
export class CacaoCartillaComponent {

    // const firsName = signal('juan');

    // console.log(firsName());

    // firstName.set('Jaime');


    // firstName.update(name => name.toUpperCase());
    
      isTrial = signal(false);
      isTrialExpired = signal(false);
      showTrialDuration = computed(() => this.isTrial() && !this.isTrialExpired());
      activateTrial() {
        this.isTrial.set(true);
      }
    
  
  }
