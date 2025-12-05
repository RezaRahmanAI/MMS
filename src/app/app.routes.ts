import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/auth/login.component';
import { SignupComponent } from './features/auth/signup.component';
import { PersonalInfoComponent } from './features/onboarding/personal-info.component';
import { MealGuideComponent } from './features/onboarding/meal-guide.component';
import { PreferencesComponent } from './features/onboarding/preferences.component';
import { OnboardingCompleteComponent } from './features/onboarding/complete.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'onboarding/personal-info', component: PersonalInfoComponent },
  { path: 'onboarding/meal-guide', component: MealGuideComponent },
  { path: 'onboarding/preferences', component: PreferencesComponent },
  { path: 'onboarding/complete', component: OnboardingCompleteComponent },
  { path: '**', redirectTo: '' },
];
